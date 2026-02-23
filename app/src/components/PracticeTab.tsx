import { useState } from 'react'
import type { VocabularyItem, DialogueLine } from '../data/types'
import { Quiz } from './Quiz'

interface PracticeTabProps {
  vocabulary: VocabularyItem[]
  dialogues: DialogueLine[]
  culturalNotes: string[]
  quizScore: number
  onQuizComplete: (score: number) => void
}

export function PracticeTab({ vocabulary, dialogues, culturalNotes, quizScore, onQuizComplete }: PracticeTabProps) {
  const [activeSection, setActiveSection] = useState<'quiz' | 'dialogue' | 'notes'>('quiz')

  const sections = [
    { id: 'quiz' as const, label: 'Quiz', icon: '?' , enabled: vocabulary.length >= 4 },
    { id: 'dialogue' as const, label: 'Dialogue', icon: '\u2630', enabled: dialogues.length > 0 },
    { id: 'notes' as const, label: 'Notes', icon: '\u2606', enabled: culturalNotes.length > 0 },
  ].filter(s => s.enabled)

  if (sections.length === 0) {
    return (
      <div className="text-center py-12 text-ink-light">
        No practice materials available for this lesson.
      </div>
    )
  }

  return (
    <div>
      {/* Section switcher */}
      {sections.length > 1 && (
        <div className="flex gap-2 mb-6">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeSection === s.id
                  ? 'bg-teal text-white shadow-sm'
                  : 'bg-sand/50 text-ink-light hover:bg-sand'
              }`}
            >
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Quiz section */}
      {activeSection === 'quiz' && vocabulary.length >= 4 && (
        <div>
          {quizScore > 0 && (
            <div className="mb-4 text-center">
              <span className="inline-flex items-center gap-1 text-sm text-gold-dark bg-gold/10 px-3 py-1 rounded-full">
                Best score: {quizScore}%
              </span>
            </div>
          )}
          <Quiz vocabulary={vocabulary} onComplete={onQuizComplete} />
        </div>
      )}

      {/* Dialogue section */}
      {activeSection === 'dialogue' && dialogues.length > 0 && (
        <div className="max-w-lg mx-auto space-y-4 animate-fade-in">
          <h3 className="heading-display text-xl text-ink text-center mb-6">Dialogue Practice</h3>
          {dialogues.map((line, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    isEven
                      ? 'bg-teal/10 border border-teal/20 rounded-tl-sm'
                      : 'bg-gold/10 border border-gold/20 rounded-tr-sm'
                  }`}
                >
                  <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${
                    isEven ? 'text-teal' : 'text-gold-dark'
                  }`}>
                    {line.speaker}
                  </span>
                  <p className="arabic text-ink mb-1">{line.arabic}</p>
                  <p className="text-sm text-ink-light">{line.english}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Cultural notes section */}
      {activeSection === 'notes' && culturalNotes.length > 0 && (
        <div className="max-w-lg mx-auto animate-fade-in">
          <h3 className="heading-display text-xl text-ink text-center mb-6">Cultural Notes</h3>
          <div className="space-y-4">
            {culturalNotes.map((note, idx) => (
              <div
                key={idx}
                className="card-manuscript rounded-xl p-5 flex items-start gap-3"
              >
                <span className="text-gold text-lg shrink-0 mt-0.5">&#9733;</span>
                <p className="text-ink-light leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
