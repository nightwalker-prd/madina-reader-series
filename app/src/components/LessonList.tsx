import type { Book } from '../data/types'

interface LessonListProps {
  book: Book
  onSelectLesson: (lessonNum: number) => void
  isLessonCompleted: (bookId: number, lessonNum: number) => boolean
  getQuizScore: (bookId: number, lessonNum: number) => number
  onBack: () => void
}

export function LessonList({ book, onSelectLesson, isLessonCompleted, getQuizScore, onBack }: LessonListProps) {
  const completedCount = book.lessons.filter(l => isLessonCompleted(book.id, l.number)).length

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-ink-light hover:text-teal transition-colors mb-6"
      >
        <span>&#8592;</span> All Books
      </button>

      <div className="flex items-start gap-5 mb-8">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center star-pattern shadow-md shrink-0">
          <span className="text-white font-bold text-2xl heading-display">{book.id}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="heading-display text-2xl sm:text-3xl text-ink">{book.title}</h2>
          <p className="arabic text-teal mt-0.5">{book.arabicTitle}</p>
          <p className="text-sm text-ink-light mt-2">{book.description}</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-xs text-ink-light">
              <span className="font-semibold text-teal">{completedCount}</span> / {book.totalLessons} completed
            </span>
            <div className="w-32 h-1.5 bg-sand rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal to-emerald rounded-full progress-fill"
                style={{ width: `${book.totalLessons > 0 ? (completedCount / book.totalLessons) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="divider-gold w-full mb-6" />

      {/* Lesson cards */}
      <div className="space-y-3">
        {book.lessons.map((lesson, idx) => {
          const completed = isLessonCompleted(book.id, lesson.number)
          const score = getQuizScore(book.id, lesson.number)

          return (
            <button
              key={lesson.number}
              onClick={() => onSelectLesson(lesson.number)}
              className={`w-full text-left card-manuscript rounded-xl p-4 flex items-center gap-4 transition-all hover:scale-[1.01] active:scale-[0.99] animate-fade-slide-up stagger-${Math.min(idx + 1, 8)}`}
            >
              {/* Lesson number */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
                completed
                  ? 'bg-emerald text-white'
                  : 'bg-teal/10 text-teal'
              }`}>
                {completed ? '✓' : lesson.number}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="heading-display text-lg text-ink truncate">{lesson.title}</h3>
                <p className="arabic text-sm text-teal-light truncate">{lesson.arabicTitle}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-ink-light/60">
                    {lesson.vocabulary.length} words
                  </span>
                  <span className="text-xs text-ink-light/60">
                    {lesson.grammar.length} concepts
                  </span>
                  {lesson.dialogues.length > 0 && (
                    <span className="text-xs text-ink-light/60">
                      {lesson.dialogues.length} dialogues
                    </span>
                  )}
                </div>
              </div>

              {/* Score badge */}
              {score > 0 && (
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
                  score >= 70 ? 'text-emerald bg-emerald/10' : 'text-gold-dark bg-gold/10'
                }`}>
                  {score}%
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
