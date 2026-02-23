import type { GrammarConcept } from '../data/types'

interface GrammarTabProps {
  grammar: GrammarConcept[]
}

export function GrammarTab({ grammar }: GrammarTabProps) {
  if (grammar.length === 0) {
    return (
      <div className="text-center py-12 text-ink-light">
        No grammar concepts for this lesson.
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {grammar.map((concept, idx) => (
        <div
          key={idx}
          className={`card-manuscript rounded-2xl p-6 animate-fade-slide-up stagger-${Math.min(idx + 1, 8)}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="heading-display text-xl text-ink">{concept.title}</h3>
              {concept.arabicTitle && (
                <span className="arabic text-teal text-lg">{concept.arabicTitle}</span>
              )}
            </div>
            <span className="shrink-0 w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center text-sm font-semibold">
              {idx + 1}
            </span>
          </div>

          <div className="divider-gold w-full my-4" />

          {/* Explanation */}
          <p className="text-ink-light leading-relaxed mb-5">{concept.explanation}</p>

          {/* Rules */}
          {concept.rules && concept.rules.length > 0 && (
            <div className="mb-5 bg-gold/5 border border-gold/15 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gold-dark uppercase tracking-wider mb-3">
                Key Rules
              </h4>
              <ul className="space-y-2">
                {concept.rules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2 text-sm text-ink-light">
                    <span className="text-gold mt-0.5 shrink-0">&#9670;</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples */}
          {concept.examples.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-ink-light uppercase tracking-wider mb-3">
                Examples
              </h4>
              <div className="space-y-3">
                {concept.examples.map((ex, eIdx) => (
                  <div
                    key={eIdx}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 bg-parchment-dark/50 rounded-xl px-4 py-3"
                  >
                    <span className="arabic text-teal flex-1 text-right">{ex.arabic}</span>
                    <span className="hidden sm:block text-gold mx-2">&#8594;</span>
                    <span className="text-ink-light flex-1">{ex.english}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
