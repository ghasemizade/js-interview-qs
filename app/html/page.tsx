"use client"

import { useState } from "react"
import QuizScreen from "@/components/quiz-screen"
import ResultsScreen from "@/components/results-screen"
import DifficultyScreen from "@/components/difficulty-screen-html"
import type { Difficulty } from "@/lib/html-questions"

export default function HTMLQuiz() {
    const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
    const [showResults, setShowResults] = useState(false)
    const [results, setResults] = useState(null)

    const handleDifficultySelect = (selectedDifficulty: Difficulty) => {
        setDifficulty(selectedDifficulty)
    }

    const handleQuizComplete = (quizResults: any) => {
        setResults(quizResults)
        setShowResults(true)
    }

    const handleRetry = () => {
        setShowResults(false)
        setResults(null)
    }

    const handleChangeDifficulty = () => {
        setDifficulty(null)
        setShowResults(false)
        setResults(null)
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {!difficulty ? (
                <DifficultyScreen onSelectDifficulty={handleDifficultySelect} />
            ) : !showResults ? (
                <QuizScreen
                    difficulty={difficulty}
                    onComplete={handleQuizComplete}
                    onChangeDifficulty={handleChangeDifficulty}
                    quizType="html"
                />
            ) : (
                <ResultsScreen
                    results={results}
                    onRetry={handleRetry}
                    onChangeDifficulty={handleChangeDifficulty}
                    quizType="html"
                />
            )}
        </main>
    )
}