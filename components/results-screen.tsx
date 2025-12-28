"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ResultsScreenProps {
  results: any
  onRetry: () => void
  onChangeDifficulty: () => void
  quizType?: "javascript" | "html" | "css"
}

export default function ResultsScreen({
  results,
  onRetry,
  onChangeDifficulty,
  quizType = "javascript",
}: ResultsScreenProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({})

  const { selectedAnswers, questions, difficulty } = results

  const correctCount = questions.reduce((count: number, q: any, index: number) => {
    return selectedAnswers[index] === q.correct ? count + 1 : count
  }, 0)

  const score = Math.round((correctCount / questions.length) * 100)

  const toggleQuestion = (index: number) => {
    setExpandedQuestions({
      ...expandedQuestions,
      [index]: !expandedQuestions[index],
    })
  }

  const difficultyLabel =
    difficulty === "junior" ? "Junior Developer" : difficulty === "mid" ? "Mid-Level Developer" : "Senior Developer"

  const difficultyColor =
    difficulty === "junior" ? "bg-blue-500" : difficulty === "mid" ? "bg-amber-500" : "bg-purple-500"

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        {/* Score Summary */}
        <div className="bg-card border border-border rounded-lg shadow-sm p-8 mb-8 text-center">
          <div className="mb-4">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-white ${difficultyColor}`}>
              {difficultyLabel}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quiz Complete!</h1>

          <div className="mb-6">
            <div className="inline-block">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-primary/20 flex items-center justify-center bg-primary/5">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary">{score}%</p>
                  <p className="text-sm text-muted-foreground mt-1">Score</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-background rounded-lg p-4">
              <p className="text-2xl font-bold text-green-500">{correctCount}</p>
              <p className="text-sm text-muted-foreground">Correct</p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <p className="text-2xl font-bold text-red-500">{questions.length - correctCount}</p>
              <p className="text-sm text-muted-foreground">Incorrect</p>
            </div>
          </div>

          <Button onClick={onRetry} className="w-full bg-primary hover:bg-primary/90">
            Retry This Level
          </Button>
        </div>

        {/* Answer Review */}
        <div className="bg-card border border-border rounded-lg shadow-sm p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Answer Review & Explanations</h2>

          <div className="space-y-3">
            {questions.map((q: any, index: number) => {
              const isCorrect = selectedAnswers[index] === q.correct
              const isExpanded = expandedQuestions[index]

              return (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all ${isCorrect ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"
                    }`}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white ${isCorrect ? "bg-green-500" : "bg-red-500"
                          }`}
                      >
                        {isCorrect ? "✓" : "✗"}
                      </span>
                      <span className="font-medium text-foreground">Question {index + 1}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{isExpanded ? "−" : "+"}</span>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-border/30">
                      <p className="text-sm md:text-base text-foreground mb-4 mt-4 font-bold">{q.question}</p>

                      <div className="space-y-2 mb-4">
                        {q.options.map((option: string, optionIndex: number) => {
                          const isUserAnswer = selectedAnswers[index] === optionIndex
                          const isCorrectAnswer = q.correct === optionIndex

                          return (
                            <div
                              key={optionIndex}
                              className={`p-2 rounded text-sm ${isCorrectAnswer
                                ? "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/30"
                                : isUserAnswer && !isCorrect
                                  ? "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/30"
                                  : "text-muted-foreground"
                                }`}
                            >
                              <span className="font-medium">{["A", "B", "C", "D"][optionIndex]}.</span> {option}
                              {isCorrectAnswer && <span className="ml-2 font-semibold">✓ Correct</span>}
                              {isUserAnswer && !isCorrect && <span className="ml-2 font-semibold">✗ Your answer</span>}
                            </div>
                          )
                        })}
                      </div>

                      <div className="bg-background/50 rounded p-3 mt-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Explanation</p>
                        <p className="text-sm text-foreground leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3">
          <Button onClick={onChangeDifficulty} variant="outline" className="flex-1 bg-transparent">
            Try Different Level
          </Button>
          <Button onClick={onRetry} className="flex-1 bg-primary hover:bg-primary/90">
            Retry This Level
          </Button>
        </div>
      </div>
    </div>
  )
}
