"use client"

import Link from "next/link"

interface Question {
    id: string
    title: string
    difficulty: string
    description: string
    category: string
    acceptanceRate: number
    solvedBy: number
    yourScore: number | null
}

const difficultyStyles = {
    Easy: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Hard: "bg-red-500/20 text-red-400",
}

export function QuestionCard({ question }: { question: Question }) {
    return (
        <Link href={`/challenge/${question.id}`}>
            <div className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:bg-card/80">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {question.title}
                            </h3>
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${difficultyStyles[question.difficulty as keyof typeof difficultyStyles]
                                    }`}
                            >
                                {question.difficulty}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{question.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            <span>
                                Category: <span className="text-foreground font-medium">{question.category}</span>
                            </span>
                            <span>
                                Acceptance: <span className="text-foreground font-medium">{question.acceptanceRate.toFixed(1)}%</span>
                            </span>
                            <span>
                                Solved: <span className="text-foreground font-medium">{(question.solvedBy / 1000000).toFixed(1)}M</span>
                            </span>
                        </div>
                    </div>

                    {question.yourScore !== null && (
                        <div className="flex flex-col items-center gap-1 rounded-lg bg-primary/10 px-4 py-3">
                            <p className="text-xs text-muted-foreground">Your Score</p>
                            <p className="text-2xl font-bold text-primary">{question.yourScore}</p>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}
