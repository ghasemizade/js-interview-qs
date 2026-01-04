"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import QuizScreen from "@/components/quiz-screen"
import ResultsScreen from "@/components/results-screen"
import DifficultyScreenTypeScript from "@/components/difficulty-screen-ts"
import type { Difficulty } from "@/lib/typescript-questions"

function TypeScriptQuizContent() {
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
                <DifficultyScreenTypeScript onSelectDifficulty={handleDifficultySelect} />
            ) : !showResults ? (
                <QuizScreen
                    difficulty={difficulty}
                    onComplete={handleQuizComplete}
                    onChangeDifficulty={handleChangeDifficulty}
                    quizType="typescript"
                />
            ) : (
                <ResultsScreen
                    results={results}
                    onRetry={handleRetry}
                    onChangeDifficulty={handleChangeDifficulty}
                    quizType="typescript"
                />
            )}
        </main>
    )
}

export default function TypeScriptQuiz() {
    return (
        <ProtectedRoute>
            <TypeScriptQuizContent />
        </ProtectedRoute>
    )
}
