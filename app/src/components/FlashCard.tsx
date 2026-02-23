import { useState } from 'react'
import type { VocabularyItem } from '../data/types'

interface FlashCardProps {
  item: VocabularyItem
  isMastered: boolean
  onToggleMastered: () => void
}

export function FlashCard({ item, isMastered, onToggleMastered }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="flashcard-container cursor-pointer select-none"
      style={{ height: 220 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front - Arabic */}
        <div className="flashcard-front rounded-2xl overflow-hidden">
          <div className="h-full bg-gradient-to-br from-teal to-teal-dark p-6 flex flex-col items-center justify-center relative star-pattern">
            <div className="absolute top-3 right-3">
              <button
                onClick={e => { e.stopPropagation(); onToggleMastered() }}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  isMastered
                    ? 'bg-gold text-white'
                    : 'bg-white/10 text-white/40 hover:bg-white/20'
                }`}
              >
                {isMastered ? '✓' : '○'}
              </button>
            </div>
            <span className="arabic-xl text-white drop-shadow-sm">{item.arabic}</span>
            {item.category && (
              <span className="mt-3 text-gold-light text-xs uppercase tracking-widest font-body">
                {item.category}
              </span>
            )}
            <span className="mt-4 text-white/40 text-xs">tap to reveal</span>
          </div>
        </div>

        {/* Back - English */}
        <div className="flashcard-back rounded-2xl overflow-hidden">
          <div className="h-full bg-gradient-to-br from-parchment to-parchment-dark p-6 flex flex-col items-center justify-center border border-gold/20">
            <span className="arabic-large text-teal mb-2">{item.arabic}</span>
            <div className="divider-gold w-16 my-3" />
            <span className="text-xl text-ink font-body">{item.english}</span>
            {item.category && (
              <span className="mt-3 text-ink-light/50 text-xs uppercase tracking-widest">
                {item.category}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
