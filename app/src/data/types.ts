export interface VocabularyItem {
  arabic: string
  english: string
  category?: string
}

export interface GrammarExample {
  arabic: string
  english: string
}

export interface GrammarConcept {
  title: string
  arabicTitle?: string
  explanation: string
  examples: GrammarExample[]
  rules?: string[]
}

export interface DialogueLine {
  speaker: string
  arabic: string
  english: string
}

export interface Lesson {
  number: number
  title: string
  arabicTitle: string
  theme?: string
  grammar: GrammarConcept[]
  vocabulary: VocabularyItem[]
  dialogues: DialogueLine[]
  culturalNotes: string[]
}

export interface Book {
  id: number
  title: string
  arabicTitle: string
  description: string
  level: 'beginner' | 'elementary' | 'intermediate' | 'advanced'
  totalLessons: number
  lessons: Lesson[]
}

export interface UserProgress {
  vocabMastered: Record<string, boolean>
  lessonsCompleted: Record<string, boolean>
  quizScores: Record<string, number>
  lastVisited?: { bookId: number; lessonNumber: number }
}
