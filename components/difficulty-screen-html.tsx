"use client"

import { Button } from "@/components/ui/button"
import type { Difficulty } from "@/lib/html-questions"

interface DifficultyScreenProps {
    onSelectDifficulty: (difficulty: Difficulty) => void
}

export default function DifficultyScreenHTML({ onSelectDifficulty }: DifficultyScreenProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-card to-background p-4 md:p-8 flex items-center justify-center">
            <div className="max-w-3xl w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">HTML Interview Quiz</h1>
                    <p className="text-muted-foreground text-lg">Select your experience level to get started</p>
                </div>

                {/* Difficulty Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Junior Developer */}
                    <div
                        onClick={() => onSelectDifficulty("junior")}
                        className="bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                        <div className="mb-4">
                            <div className="text-3xl font-bold text-orange-500 mb-2">01</div>
                            <h2 className="text-2xl font-semibold text-foreground">Junior Developer</h2>
                        </div>
                        <p className="text-muted-foreground text-sm mb-6">
                            Perfect for beginners and those starting their HTML journey
                        </p>
                        <ul className="space-y-2 mb-8 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-orange-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">HTML fundamentals</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">Common HTML elements</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">Basic forms & attributes</span>
                            </li>
                        </ul>
                        <Button
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                            onClick={() => onSelectDifficulty("junior")}
                        >
                            Start Quiz
                        </Button>
                    </div>

                    {/* Mid-Level Developer */}
                    <div
                        onClick={() => onSelectDifficulty("mid")}
                        className="bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all group md:scale-105"
                    >
                        <div className="mb-4">
                            <div className="text-3xl font-bold text-green-500 mb-2">02</div>
                            <h2 className="text-2xl font-semibold text-foreground">Mid-Level Developer</h2>
                        </div>
                        <p className="text-muted-foreground text-sm mb-6">For developers with solid HTML and markup experience</p>
                        <ul className="space-y-2 mb-8 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">Semantic HTML</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">Advanced forms & inputs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">Accessibility basics</span>
                            </li>
                        </ul>
                        <Button
                            className="w-full bg-green-500 hover:bg-green-600 text-white"
                            onClick={() => onSelectDifficulty("mid")}
                        >
                            Start Quiz
                        </Button>
                    </div>

                    {/* Senior Developer */}
                    <div
                        onClick={() => onSelectDifficulty("senior")}
                        className="bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                        <div className="mb-4">
                            <div className="text-3xl font-bold text-red-500 mb-2">03</div>
                            <h2 className="text-2xl font-semibold text-foreground">Senior Developer</h2>
                        </div>
                        <p className="text-muted-foreground text-sm mb-6">
                            For experienced developers looking for advanced challenges
                        </p>
                        <ul className="space-y-2 mb-8 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">WCAG & accessibility standards</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">ARIA & semantic patterns</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold mt-0.5">→</span>
                                <span className="text-foreground">Performance & meta optimization</span>
                            </li>
                        </ul>
                        <Button
                            className="w-full bg-red-500 hover:bg-red-600 text-white"
                            onClick={() => onSelectDifficulty("senior")}
                        >
                            Start Quiz
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground text-sm">
                        Each quiz contains 10 questions specific to your selected level
                    </p>
                </div>
            </div>
        </div>
    )
}
