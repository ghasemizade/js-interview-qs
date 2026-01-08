"use client"

import { Button } from "@/components/ui/button"
import type { Difficulty } from "@/lib/typescript-questions"
import FloatingObject from "./floating-object"

interface DifficultyScreenProps {
    onSelectDifficulty: (difficulty: Difficulty) => void
}

export default function DifficultyScreenTypeScript({ onSelectDifficulty }: DifficultyScreenProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-background via-card to-background p-4 md:p-8 flex items-center justify-center">
            <div className="max-w-3xl w-full">
                <FloatingObject floatingLogo="/typescript-logo.png" c1="rgba(49, 120, 198, 0.4)" c2="rgba(255, 0, 0, 0.19)" />
                <div className="text-center mb-12">
                    <div className="text-6xl font-bold text-blue-500 mb-4">TypeScript</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">TypeScript Interview Quiz</h1>
                    <p className="text-muted-foreground text-lg">Choose your skill level and test your TypeScript knowledge</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Junior Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Beginner
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Junior Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">Basic types, interfaces, and fundamental concepts</p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Basic types
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Interfaces & types
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Functions
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Union & optional types
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("junior")}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                        >
                            Start Junior Quiz
                        </Button>
                    </div>

                    {/* Mid Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Intermediate
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Mid-Level Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">Generics, type narrowing, and utility types</p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-cyan-500 mr-2">✓</span> Generics
                                </li>
                                <li className="flex items-center">
                                    <span className="text-cyan-500 mr-2">✓</span> Type narrowing
                                </li>
                                <li className="flex items-center">
                                    <span className="text-cyan-500 mr-2">✓</span> Advanced types
                                </li>
                                <li className="flex items-center">
                                    <span className="text-cyan-500 mr-2">✓</span> Utility types
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("mid")}
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
                        >
                            Start Mid-Level Quiz
                        </Button>
                    </div>

                    {/* Senior Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Advanced
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Senior Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">Advanced patterns, variance, and metaprogramming</p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-indigo-500 mr-2">✓</span> Conditional types
                                </li>
                                <li className="flex items-center">
                                    <span className="text-indigo-500 mr-2">✓</span> Template literal types
                                </li>
                                <li className="flex items-center">
                                    <span className="text-indigo-500 mr-2">✓</span> Type variance
                                </li>
                                <li className="flex items-center">
                                    <span className="text-indigo-500 mr-2">✓</span> Module augmentation
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("senior")}
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold"
                        >
                            Start Senior Quiz
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
