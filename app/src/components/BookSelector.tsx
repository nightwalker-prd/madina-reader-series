import type { Book } from '../data/types'

interface BookSelectorProps {
  books: Book[]
  onSelectBook: (bookId: number) => void
  getBookProgress: (bookId: number, totalLessons: number) => number
  totalVocabMastered: number
}

const levelColors: Record<string, string> = {
  beginner: 'text-emerald bg-emerald/10',
  elementary: 'text-teal bg-teal/10',
  intermediate: 'text-gold-dark bg-gold/10',
  advanced: 'text-ruby bg-ruby/10',
}

export function BookSelector({ books, onSelectBook, getBookProgress, totalVocabMastered }: BookSelectorProps) {
  const totalLessons = books.reduce((sum, b) => sum + b.totalLessons, 0)
  const completedLessons = books.reduce((sum, b) => {
    const pct = getBookProgress(b.id, b.totalLessons)
    return sum + Math.round((pct / 100) * b.totalLessons)
  }, 0)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="text-center mb-12 pt-8">
        <div className="inline-block mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center star-pattern shadow-lg">
            <span className="text-3xl text-white" style={{ fontFamily: 'var(--font-arabic)' }}>م</span>
          </div>
        </div>
        <h1 className="heading-display text-4xl sm:text-5xl text-ink mb-3">
          Madinah Arabic Reader
        </h1>
        <p className="arabic text-teal text-xl mb-4">سلسلة القراءة العربية بالمدينة</p>
        <p className="text-ink-light max-w-md mx-auto leading-relaxed">
          A comprehensive Arabic language course by Dr. V. Abdur Rahim.
          Master reading, grammar, and vocabulary through 8 progressive books.
        </p>

        {/* Global stats */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-teal heading-display">{completedLessons}</div>
            <div className="text-xs text-ink-light uppercase tracking-wider mt-1">Lessons Done</div>
          </div>
          <div className="w-px bg-sand" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gold heading-display">{totalVocabMastered}</div>
            <div className="text-xs text-ink-light uppercase tracking-wider mt-1">Words Mastered</div>
          </div>
          <div className="w-px bg-sand" />
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald heading-display">{totalLessons}</div>
            <div className="text-xs text-ink-light uppercase tracking-wider mt-1">Total Lessons</div>
          </div>
        </div>
      </div>

      {/* Book grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {books.map((book, idx) => {
          const progress = getBookProgress(book.id, book.totalLessons)
          return (
            <button
              key={book.id}
              onClick={() => onSelectBook(book.id)}
              className={`card-manuscript rounded-2xl p-5 text-left transition-all hover:scale-[1.02] active:scale-[0.98] animate-fade-slide-up stagger-${Math.min(idx + 1, 8)}`}
            >
              {/* Book number badge */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center star-pattern">
                  <span className="text-white font-bold text-lg heading-display">{book.id}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[book.level] ?? ''}`}>
                  {book.level}
                </span>
              </div>

              <h3 className="heading-display text-lg text-ink mb-0.5">{book.title}</h3>
              <p className="arabic text-teal text-sm mb-2">{book.arabicTitle}</p>
              <p className="text-sm text-ink-light line-clamp-2 mb-4">{book.description}</p>

              {/* Progress bar */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-sand rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal to-emerald rounded-full progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs text-ink-light font-semibold">{progress}%</span>
              </div>
              <p className="text-xs text-ink-light/60 mt-2">{book.totalLessons} lessons</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
