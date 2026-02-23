#!/usr/bin/env python3
"""Split Madina Arabic Reader PDFs into 20-page chunks."""

from pathlib import Path
from pypdf import PdfReader, PdfWriter

PROJECT_ROOT = Path(__file__).parent
PDF_DIR = PROJECT_ROOT / "pdfs"
CHUNK_SIZE = 20

for book_num in range(1, 9):
    pdf_path = PDF_DIR / f"Madinah-Arabic-Reader-{book_num}.pdf"
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)

    out_dir = PROJECT_ROOT / f"madina-book-{book_num}-split"
    out_dir.mkdir(exist_ok=True)

    for start in range(0, total_pages, CHUNK_SIZE):
        end = min(start + CHUNK_SIZE, total_pages)
        writer = PdfWriter()
        for i in range(start, end):
            writer.add_page(reader.pages[i])

        filename = f"book-{book_num}-pages-{start+1:03d}-{end:03d}.pdf"
        writer.write(out_dir / filename)

    num_files = (total_pages + CHUNK_SIZE - 1) // CHUNK_SIZE
    print(f"Book {book_num}: {total_pages} pages -> {num_files} files in {out_dir.name}/")
