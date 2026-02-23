import { useState, useCallback, useEffect } from 'react'
import type { UserProgress } from '../data/types'

const STORAGE_KEY = 'madina-reader-progress'

const defaultProgress: UserProgress = {
  vocabMastered: {},
  lessonsCompleted: {},
  quizScores: {},
}

function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    // ignore
  }
  return defaultProgress
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const markVocabMastered = useCallback((key: string) => {
    setProgress(prev => ({
      ...prev,
      vocabMastered: { ...prev.vocabMastered, [key]: true },
    }))
  }, [])

  const toggleVocabMastered = useCallback((key: string) => {
    setProgress(prev => ({
      ...prev,
      vocabMastered: {
        ...prev.vocabMastered,
        [key]: !prev.vocabMastered[key],
      },
    }))
  }, [])

  const markLessonCompleted = useCallback((bookId: number, lessonNum: number) => {
    const key = `${bookId}-${lessonNum}`
    setProgress(prev => ({
      ...prev,
      lessonsCompleted: { ...prev.lessonsCompleted, [key]: true },
    }))
  }, [])

  const saveQuizScore = useCallback((bookId: number, lessonNum: number, score: number) => {
    const key = `${bookId}-${lessonNum}`
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [key]: Math.max(prev.quizScores[key] ?? 0, score),
      },
    }))
  }, [])

  const setLastVisited = useCallback((bookId: number, lessonNumber: number) => {
    setProgress(prev => ({
      ...prev,
      lastVisited: { bookId, lessonNumber },
    }))
  }, [])

  const isLessonCompleted = useCallback((bookId: number, lessonNum: number) => {
    return progress.lessonsCompleted[`${bookId}-${lessonNum}`] ?? false
  }, [progress.lessonsCompleted])

  const getQuizScore = useCallback((bookId: number, lessonNum: number) => {
    return progress.quizScores[`${bookId}-${lessonNum}`] ?? 0
  }, [progress.quizScores])

  const getBookProgress = useCallback((bookId: number, totalLessons: number) => {
    let completed = 0
    for (let i = 1; i <= totalLessons; i++) {
      if (progress.lessonsCompleted[`${bookId}-${i}`]) completed++
    }
    return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0
  }, [progress.lessonsCompleted])

  const totalVocabMastered = Object.values(progress.vocabMastered).filter(Boolean).length

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress)
  }, [])

  return {
    progress,
    markVocabMastered,
    toggleVocabMastered,
    markLessonCompleted,
    saveQuizScore,
    setLastVisited,
    isLessonCompleted,
    getQuizScore,
    getBookProgress,
    totalVocabMastered,
    resetProgress,
  }
}
