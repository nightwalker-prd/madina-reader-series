import { useState, useCallback, useMemo } from 'react'
import { books } from './data'
import { useProgress } from './hooks/useProgress'
import { BookSelector } from './components/BookSelector'
import { LessonList } from './components/LessonList'
import { LessonView } from './components/LessonView'

type View =
  | { page: 'home' }
  | { page: 'book'; bookId: number }
  | { page: 'lesson'; bookId: number; lessonNum: number }

export default function App() {
  const {
    progress,
    toggleVocabMastered,
    markLessonCompleted,
    saveQuizScore,
    setLastVisited,
    isLessonCompleted,
    getQuizScore,
    getBookProgress,
    totalVocabMastered,
  } = useProgress()

  const [view, setView] = useState<View>(() => {
    if (progress.lastVisited) {
      return {
        page: 'lesson',
        bookId: progress.lastVisited.bookId,
        lessonNum: progress.lastVisited.lessonNumber,
      }
    }
    return { page: 'home' }
  })

  const currentBook = useMemo(() => {
    if (view.page === 'book' || view.page === 'lesson') {
      return books.find(b => b.id === view.bookId)
    }
    return undefined
  }, [view])

  const currentLesson = useMemo(() => {
    if (view.page === 'lesson' && currentBook) {
      return currentBook.lessons.find(l => l.number === view.lessonNum)
    }
    return undefined
  }, [view, currentBook])

  const navigateHome = useCallback(() => setView({ page: 'home' }), [])
  const navigateBook = useCallback((bookId: number) => setView({ page: 'book', bookId }), [])
  const navigateLesson = useCallback((bookId: number, lessonNum: number) => {
    setView({ page: 'lesson', bookId, lessonNum })
    setLastVisited(bookId, lessonNum)
  }, [setLastVisited])

  return (
    <div className="min-h-screen pattern-bg">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-parchment/90 backdrop-blur-md border-b border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={navigateHome}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center star-pattern">
              <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>م</span>
            </div>
            <span className="heading-display text-lg text-ink hidden sm:block">Madinah Reader</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-ink-light">
              <span className="font-semibold text-gold">{totalVocabMastered}</span> words mastered
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {view.page === 'home' && (
          <BookSelector
            books={books}
            onSelectBook={navigateBook}
            getBookProgress={getBookProgress}
            totalVocabMastered={totalVocabMastered}
          />
        )}

        {view.page === 'book' && currentBook && (
          <LessonList
            book={currentBook}
            onSelectLesson={(num) => navigateLesson(currentBook.id, num)}
            isLessonCompleted={isLessonCompleted}
            getQuizScore={getQuizScore}
            onBack={navigateHome}
          />
        )}

        {view.page === 'lesson' && currentBook && currentLesson && (
          <LessonView
            lesson={currentLesson}
            bookId={currentBook.id}
            masteredKeys={progress.vocabMastered}
            onToggleMastered={toggleVocabMastered}
            quizScore={getQuizScore(currentBook.id, currentLesson.number)}
            onQuizComplete={(score) => saveQuizScore(currentBook.id, currentLesson.number, score)}
            isCompleted={isLessonCompleted(currentBook.id, currentLesson.number)}
            onMarkCompleted={() => markLessonCompleted(currentBook.id, currentLesson.number)}
            onBack={() => navigateBook(currentBook.id)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-sand mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-ink-light/50">
            Based on "Madinah Arabic Reader" by Dr. V. Abdur Rahim
          </p>
        </div>
      </footer>
    </div>
  )
}
