"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import QuestionCard from "./question-card"
import { questions } from "@/lib/questions"
import type { Difficulty } from "@/lib/questions"

interface QuizScreenProps {
  difficulty: Difficulty
  onComplete: (results: any) => void
  onChangeDifficulty: () => void
  quizType?: "javascript" | "html"
}

export default function QuizScreen({
  difficulty,
  onComplete,
  onChangeDifficulty,
  quizType = "javascript",
}: QuizScreenProps) {
  const allQuestions = quizType === "html" ? require("@/lib/html-questions").htmlQuestions : questions
  const filteredQuestions = allQuestions.filter((q: any) => q.difficulty === difficulty)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})

  const handleSelectAnswer = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    })
  }

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const results = {
      selectedAnswers,
      totalQuestions: filteredQuestions.length,
      questions: filteredQuestions,
      difficulty,
      quizType,
    }
    onComplete(results)
  }

  const isLastQuestion = currentQuestion === filteredQuestions.length - 1
  const isAnswered = currentQuestion in selectedAnswers

  const difficultyLabel =
    difficulty === "junior" ? "Junior Developer" : difficulty === "mid" ? "Mid-Level Developer" : "Senior Developer"

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        {/* Header with difficulty badge */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {quizType === "html" ? "HTML Interview Quiz" : "JavaScript Interview Quiz"}
            </h1>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${difficulty === "junior" ? "bg-blue-500" : difficulty === "mid" ? "bg-amber-500" : "bg-purple-500"
                  }`}
              >
                {difficultyLabel}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            Test your {difficultyLabel.toLowerCase()} {quizType === "html" ? "HTML" : "JavaScript"} skills
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(((currentQuestion + 1) / filteredQuestions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-input rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="mb-8">
          <QuestionCard
            question={filteredQuestions[currentQuestion]}
            selectedAnswer={selectedAnswers[currentQuestion]}
            onSelectAnswer={handleSelectAnswer}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-between mb-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="flex-1 bg-transparent"
          >
            ← Previous
          </Button>

          {!isLastQuestion ? (
            <Button onClick={handleNext} className="flex-1">
              Next →
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Submit Quiz
            </Button>
          )}
        </div>

        {/* Question Status and Change Difficulty */}
        <div className="flex gap-3 items-center justify-between">
          <p className="text-xs md:text-sm text-muted-foreground">
            {Object.keys(selectedAnswers).length} of {filteredQuestions.length} questions answered
          </p>
          <Button onClick={onChangeDifficulty} variant="outline" size="sm" className="text-xs bg-transparent">
            Change Level
          </Button>
        </div>
      </div>
    </div>
  )
}
