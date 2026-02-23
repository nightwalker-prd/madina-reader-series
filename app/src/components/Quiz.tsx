import { useState, useMemo, useCallback } from 'react'
import type { VocabularyItem } from '../data/types'

interface QuizProps {
  vocabulary: VocabularyItem[]
  onComplete: (score: number) => void
}

interface QuizQuestion {
  item: VocabularyItem
  options: string[]
  correctIndex: number
}

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function generateQuestions(vocab: VocabularyItem[], count: number): QuizQuestion[] {
  const shuffled = shuffle(vocab)
  const questions: QuizQuestion[] = []

  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    const item = shuffled[i]
    const wrongOptions = shuffle(
      vocab.filter(v => v.english !== item.english).map(v => v.english)
    ).slice(0, 3)
    const allOptions = shuffle([item.english, ...wrongOptions])
    questions.push({
      item,
      options: allOptions,
      correctIndex: allOptions.indexOf(item.english),
    })
  }

  return questions
}

export function Quiz({ vocabulary, onComplete }: QuizProps) {
  const questions = useMemo(() => generateQuestions(vocabulary, 10), [vocabulary])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const current = questions[currentIndex]

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(optionIndex)
    const isCorrect = optionIndex === current.correctIndex
    if (isCorrect) setScore(s => s + 1)

    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        const finalScore = isCorrect ? score + 1 : score
        setIsFinished(true)
        setShowResult(true)
        onComplete(Math.round((finalScore / questions.length) * 100))
      } else {
        setCurrentIndex(i => i + 1)
        setSelectedAnswer(null)
      }
    }, 1200)
  }, [selectedAnswer, current, currentIndex, questions.length, score, onComplete])

  if (vocabulary.length < 4) {
    return (
      <div className="text-center py-12 text-ink-light">
        Need at least 4 vocabulary items for a quiz.
      </div>
    )
  }

  if (isFinished && showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="animate-scale-in text-center py-12">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full mb-6"
          style={{
            background: percentage >= 70
              ? 'linear-gradient(135deg, var(--color-emerald), var(--color-teal))'
              : percentage >= 40
                ? 'linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))'
                : 'linear-gradient(135deg, var(--color-ruby), #c0392b)'
          }}
        >
          <span className="text-3xl font-bold text-white">{percentage}%</span>
        </div>
        <h3 className="heading-display text-2xl text-ink mb-2">
          {percentage >= 70 ? 'Excellent!' : percentage >= 40 ? 'Keep Practicing' : 'Try Again'}
        </h3>
        <p className="text-ink-light mb-1">
          {score} out of {questions.length} correct
        </p>
        <p className="text-ink-light/60 text-sm mb-8">
          {percentage >= 70
            ? 'You have a strong grasp of this vocabulary.'
            : 'Review the flashcards and try again.'}
        </p>
        <button
          onClick={() => {
            setCurrentIndex(0)
            setScore(0)
            setSelectedAnswer(null)
            setShowResult(false)
            setIsFinished(false)
          }}
          className="px-8 py-3 bg-teal text-white rounded-xl hover:bg-teal-light transition-colors heading-display text-lg"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-sm text-ink-light whitespace-nowrap">
          {currentIndex + 1}/{questions.length}
        </span>
        <div className="flex-1 h-2 bg-sand rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal to-emerald rounded-full progress-fill"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-gold font-semibold">{score}pts</span>
      </div>

      {/* Question */}
      <div className="text-center mb-8 animate-fade-in" key={currentIndex}>
        <p className="text-sm text-ink-light mb-3 uppercase tracking-wider">
          What does this word mean?
        </p>
        <div className="arabic-xl text-teal py-4">{current.item.arabic}</div>
      </div>

      {/* Options */}
      <div className="grid gap-3" key={`opts-${currentIndex}`}>
        {current.options.map((option, i) => {
          const isSelected = selectedAnswer === i
          const isCorrect = i === current.correctIndex
          const showFeedback = selectedAnswer !== null

          let classes = 'w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-lg '
          if (showFeedback && isCorrect) {
            classes += 'border-emerald bg-emerald/10 text-emerald quiz-correct'
          } else if (showFeedback && isSelected && !isCorrect) {
            classes += 'border-ruby bg-ruby/10 text-ruby quiz-incorrect'
          } else if (!showFeedback) {
            classes += 'border-sand hover:border-gold hover:bg-gold/5 text-ink cursor-pointer'
          } else {
            classes += 'border-sand/50 text-ink-light/50'
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selectedAnswer !== null}
              className={classes}
            >
              <span className="inline-flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
