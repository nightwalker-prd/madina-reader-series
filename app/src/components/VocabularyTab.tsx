import type { VocabularyItem } from '../data/types'
import { FlashCard } from './FlashCard'

interface VocabularyTabProps {
  vocabulary: VocabularyItem[]
  masteredKeys: Record<string, boolean>
  onToggleMastered: (key: string) => void
}

export function VocabularyTab({ vocabulary, masteredKeys, onToggleMastered }: VocabularyTabProps) {
  if (vocabulary.length === 0) {
    return (
      <div className="text-center py-12 text-ink-light">
        No vocabulary items for this lesson.
      </div>
    )
  }

  const masteredCount = vocabulary.filter(v => masteredKeys[v.arabic]).length

  return (
    <div>
      {/* Stats bar */}
      <div className="flex items-center justify-between mb-6 px-1">
        <p className="text-sm text-ink-light">
          <span className="font-semibold text-ink">{vocabulary.length}</span> words
        </p>
        <div className="flex items-center gap-2">
          <div className="w-24 h-1.5 bg-sand rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-emerald rounded-full progress-fill"
              style={{ width: `${vocabulary.length > 0 ? (masteredCount / vocabulary.length) * 100 : 0}%` }}
            />
          </div>
          <span className="text-xs text-gold-dark font-semibold">{masteredCount}/{vocabulary.length}</span>
        </div>
      </div>

      {/* Flashcard grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vocabulary.map((item, idx) => (
          <div key={item.arabic + idx} className={`animate-fade-slide-up stagger-${Math.min(idx + 1, 8)}`}>
            <FlashCard
              item={item}
              isMastered={!!masteredKeys[item.arabic]}
              onToggleMastered={() => onToggleMastered(item.arabic)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
