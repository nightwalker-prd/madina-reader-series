#!/bin/bash

# Parallel Claude Code PDF Summary Processor
# Processes all PDF files in madina-book-*-split/ directories using Claude Code
# Each PDF gets its own subdirectory with a comprehensive bilingual summary

set -e

# Allow running claude from within a Claude Code session
unset CLAUDECODE

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MAX_PARALLEL=1  # Default to sequential to avoid output mixing
FORCE=false

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --force|-f)
            FORCE=true
            shift
            ;;
        --parallel|-p)
            MAX_PARALLEL="${2:-2}"
            shift 2
            ;;
        *)
            echo "Unknown option: $1"
            echo "Usage: $0 [--force|-f] [--parallel|-p N]"
            echo "  --force, -f      Reprocess all PDFs, ignoring existing results"
            echo "  --parallel, -p N Run N instances in parallel (default: 1 sequential)"
            exit 1
            ;;
    esac
done

# Collect all PDFs from madina-book-*-split/ directories
pdf_files=()
for split_dir in "$SCRIPT_DIR"/madina-book-*-split; do
    if [ -d "$split_dir" ]; then
        for pdf_file in "$split_dir"/*.pdf; do
            if [ -f "$pdf_file" ]; then
                pdf_files+=("$pdf_file")
            fi
        done
    fi
done

pdf_count=${#pdf_files[@]}
echo "Found $pdf_count PDF files to process"

if [ "$pdf_count" -eq 0 ]; then
    echo "No PDF files found in madina-book-*-split/ directories"
    exit 0
fi

# Track background jobs
declare -a pids
declare -a pdf_names
declare -a log_files
running=0
completed=0

# Function to check job status and report completions
check_jobs() {
    for i in "${!pids[@]}"; do
        if [ -n "${pids[$i]}" ]; then
            if ! kill -0 "${pids[$i]}" 2>/dev/null; then
                # Job finished
                wait "${pids[$i]}" 2>/dev/null || true
                ((completed++)) || true
                echo ""
                echo "[$completed/$pdf_count] COMPLETED: ${pdf_names[$i]}"

                # Show summary of created files
                answer_dir="${log_files[$i]%/claude_log.txt}"
                md_count=$(find "$answer_dir" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
                echo "  -> Created $md_count markdown file(s) in ${pdf_names[$i]}/"

                # Show last few lines of log if there were issues
                if [ -f "${log_files[$i]}" ]; then
                    if grep -qi "error\|failed\|exception" "${log_files[$i]}" 2>/dev/null; then
                        echo "  -> WARNING: Possible errors in log. Check: ${log_files[$i]}"
                    fi
                fi

                unset 'pids[i]'
                unset 'pdf_names[i]'
                unset 'log_files[i]'
                ((running--)) || true
            fi
        fi
    done
    # Compact arrays
    pids=("${pids[@]}")
    pdf_names=("${pdf_names[@]}")
    log_files=("${log_files[@]}")
}

# Function to wait for a slot to open up
wait_for_slot() {
    while [ $running -ge $MAX_PARALLEL ]; do
        check_jobs
        if [ $running -ge $MAX_PARALLEL ]; then
            sleep 3
        fi
    done
}

# Function to show status
show_status() {
    echo ""
    echo "=== STATUS: $running running, $completed/$pdf_count completed ==="
    for i in "${!pids[@]}"; do
        if [ -n "${pdf_names[$i]}" ]; then
            echo "  [RUNNING] ${pdf_names[$i]} (PID: ${pids[$i]})"
        fi
    done
}

# Count already completed
already_done=0
for pdf_file in "${pdf_files[@]}"; do
    split_dir=$(dirname "$pdf_file")
    pdf_basename=$(basename "$pdf_file" .pdf)
    answer_dir="$split_dir/$pdf_basename"
    if [ -d "$answer_dir" ]; then
        md_count=$(find "$answer_dir" -maxdepth 1 -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$md_count" -gt 0 ]; then
            ((already_done++)) || true
        fi
    fi
done

echo ""
if [ "$MAX_PARALLEL" -eq 1 ]; then
    echo "=== Running SEQUENTIALLY (one at a time for reliability) ==="
else
    echo "=== Running with $MAX_PARALLEL parallel instances ==="
fi
if [ "$FORCE" = true ]; then
    echo "=== FORCE MODE: Reprocessing all $pdf_count PDFs ==="
elif [ "$already_done" -gt 0 ]; then
    echo "=== Found $already_done already completed, $((pdf_count - already_done)) remaining ==="
fi
echo "=== Monitor logs with: tail -f madina-book-*-split/*/claude_log.txt ==="
echo ""

# Process each PDF file
job_num=0
skipped=0
for pdf_file in "${pdf_files[@]}"; do
    ((job_num++)) || true

    # Get the base name without extension and the parent split directory
    split_dir=$(dirname "$pdf_file")
    pdf_basename=$(basename "$pdf_file" .pdf)

    # Create output directory inside the same split directory
    answer_dir="$split_dir/$pdf_basename"

    # Display name includes split dir for clarity
    display_name="$(basename "$split_dir")/$pdf_basename"

    # Check if already processed (has markdown files)
    if [ "$FORCE" = false ] && [ -d "$answer_dir" ]; then
        md_count=$(find "$answer_dir" -maxdepth 1 -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$md_count" -gt 0 ]; then
            ((skipped++)) || true
            echo "[$job_num/$pdf_count] SKIPPED (already done): $display_name ($md_count files)"
            ((completed++)) || true
            continue
        fi
    fi

    mkdir -p "$answer_dir"
    log_file="$answer_dir/claude_log.txt"

    # Wait for a slot if we're at max parallel
    wait_for_slot

    echo "[$job_num/$pdf_count] STARTING: $display_name"

    # Launch Claude Code in background
    # NOTE: Derive all paths inside the subshell from _pdf to avoid
    # stale variable capture when running parallel subshells
    _pdf="$pdf_file"
    (
        _split_dir=$(dirname "$_pdf")
        _base=$(basename "$_pdf" .pdf)
        _answer_dir="$_split_dir/$_base"
        _display="$(basename "$_split_dir")/$_base"
        _log="$_answer_dir/claude_log.txt"

        echo "========================================" > "$_log"
        echo "=== Processing: $_display ===" >> "$_log"
        echo "=== Started: $(date) ===" >> "$_log"
        echo "=== PDF: $_pdf ===" >> "$_log"
        echo "=== Working dir: $_answer_dir ===" >> "$_log"
        echo "========================================" >> "$_log"
        echo "" >> "$_log"

        # Check if PDF exists
        if [ -f "$_pdf" ]; then
            echo "[OK] PDF file exists" >> "$_log"
            echo "[INFO] PDF size: $(ls -lh "$_pdf" | awk '{print $5}')" >> "$_log"
        else
            echo "[ERROR] PDF file NOT found: $_pdf" >> "$_log"
        fi
        echo "" >> "$_log"

        cd "$_answer_dir"
        echo "[INFO] Changed to directory: $(pwd)" >> "$_log"
        echo "[INFO] Launching Claude..." >> "$_log"
        echo "" >> "$_log"
        echo "--- CLAUDE OUTPUT START ---" >> "$_log"

        # Run Claude and capture exit code
        set +e
        claude -p "Read the PDF file at \"$_pdf\". Produce a comprehensive summary of the content in a single markdown file called \"summary.md\".

Include:
- A heading identifying the book number and page range (from the filename)
- Key topics and themes covered in these pages
- Grammar concepts and rules explained, with Arabic examples
- Vocabulary and expressions introduced
- Cultural or contextual notes

Use both English and Arabic where appropriate - English for explanations, Arabic for examples, vocabulary, and key phrases. Format Arabic text in blockquotes or bold for readability.

Write everything to a single file called \"summary.md\"." \
            --allowedTools "Read,Write,Bash" \
            >> "$_log" 2>&1
        exit_code=$?
        set -e

        echo "--- CLAUDE OUTPUT END ---" >> "$_log"
        echo "" >> "$_log"
        echo "========================================" >> "$_log"
        echo "=== Exit code: $exit_code ===" >> "$_log"
        echo "=== Finished: $(date) ===" >> "$_log"

        # Count created files
        md_count=$(find . -maxdepth 1 -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
        echo "=== Files in directory: ===" >> "$_log"
        ls -la >> "$_log" 2>&1
        echo "" >> "$_log"
        echo "=== Created $md_count markdown files ===" >> "$_log"

        if [ "$exit_code" -ne 0 ]; then
            echo "[ERROR] Claude exited with code $exit_code" >> "$_log"
        fi
        if [ "$md_count" -eq 0 ]; then
            echo "[WARNING] No markdown files were created" >> "$_log"
        fi
        echo "========================================" >> "$_log"
    ) &

    last_pid=$!
    pids+=($last_pid)
    pdf_names+=("$display_name")
    log_files+=("$log_file")
    ((running++)) || true

    # Show status every 4 jobs
    if [ $((job_num % 4)) -eq 0 ]; then
        show_status
    fi
done

echo ""
echo "=== All $pdf_count jobs launched. Waiting for completion... ==="
echo ""

# Wait for remaining jobs
while [ $running -gt 0 ]; do
    check_jobs
    if [ $running -gt 0 ]; then
        sleep 5
        echo "... $running job(s) still running, $completed/$pdf_count completed ..."
    fi
done

echo ""
echo "=========================================="
echo "ALL PROCESSING COMPLETE!"
echo "=========================================="
echo "  Total PDFs: $pdf_count"
echo "  Skipped (already done): $skipped"
echo "  Processed this run: $((pdf_count - skipped))"
echo ""
echo "Results are in: madina-book-*-split/<pdf_name>/"
echo ""
echo "Summary of created files:"
for split_dir in "$SCRIPT_DIR"/madina-book-*-split; do
    if [ -d "$split_dir" ]; then
        for dir in "$split_dir"/*/; do
            if [ -d "$dir" ]; then
                dirname="$(basename "$(dirname "$dir")")/$(basename "$dir")"
                md_count=$(find "$dir" -name "*.md" ! -name "claude_log.txt" 2>/dev/null | wc -l | tr -d ' ')
                if [ "$md_count" -gt 0 ]; then
                    echo "  $dirname: $md_count file(s)"
                fi
            fi
        done
    fi
done
