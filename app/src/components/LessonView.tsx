import { useState } from 'react'
import type { Lesson } from '../data/types'
import { GrammarTab } from './GrammarTab'
import { VocabularyTab } from './VocabularyTab'
import { PracticeTab } from './PracticeTab'

interface LessonViewProps {
  lesson: Lesson
  bookId: number
  masteredKeys: Record<string, boolean>
  onToggleMastered: (key: string) => void
  quizScore: number
  onQuizComplete: (score: number) => void
  isCompleted: boolean
  onMarkCompleted: () => void
  onBack: () => void
}

type Tab = 'grammar' | 'vocabulary' | 'practice'

const tabs: { id: Tab; label: string }[] = [
  { id: 'grammar', label: 'Grammar' },
  { id: 'vocabulary', label: 'Vocabulary' },
  { id: 'practice', label: 'Practice' },
]

export function LessonView({
  lesson,
  masteredKeys,
  onToggleMastered,
  quizScore,
  onQuizComplete,
  isCompleted,
  onMarkCompleted,
  onBack,
}: LessonViewProps) {
  const [activeTab, setActiveTab] = useState<Tab>('grammar')

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-ink-light hover:text-teal transition-colors mb-4"
        >
          <span>&#8592;</span> Back to lessons
        </button>

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-semibold text-teal bg-teal/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Lesson {lesson.number}
              </span>
              {isCompleted && (
                <span className="text-xs font-semibold text-emerald bg-emerald/10 px-2.5 py-0.5 rounded-full">
                  Completed
                </span>
              )}
            </div>
            <h2 className="heading-display text-2xl sm:text-3xl text-ink mt-2">{lesson.title}</h2>
            <p className="arabic text-teal-light mt-1">{lesson.arabicTitle}</p>
            {lesson.theme && (
              <p className="text-sm text-ink-light mt-2">{lesson.theme}</p>
            )}
          </div>
          {!isCompleted && (
            <button
              onClick={onMarkCompleted}
              className="shrink-0 px-4 py-2 text-sm rounded-xl border-2 border-emerald text-emerald hover:bg-emerald hover:text-white transition-all"
            >
              Mark Complete
            </button>
          )}
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-sand mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-3 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? 'text-teal'
                : 'text-ink-light hover:text-ink'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'grammar' && <GrammarTab grammar={lesson.grammar} />}
        {activeTab === 'vocabulary' && (
          <VocabularyTab
            vocabulary={lesson.vocabulary}
            masteredKeys={masteredKeys}
            onToggleMastered={onToggleMastered}
          />
        )}
        {activeTab === 'practice' && (
          <PracticeTab
            vocabulary={lesson.vocabulary}
            dialogues={lesson.dialogues}
            culturalNotes={lesson.culturalNotes}
            quizScore={quizScore}
            onQuizComplete={onQuizComplete}
          />
        )}
      </div>
    </div>
  )
}
