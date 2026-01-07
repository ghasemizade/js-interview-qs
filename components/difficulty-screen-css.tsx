"use client"

import { Button } from "@/components/ui/button"
import type { Difficulty } from "@/lib/css-questions"
import FloatingObject from "./floating-object"

interface DifficultyScreenProps {
    onSelectDifficulty: (difficulty: Difficulty) => void
}

export default function DifficultyScreenCSS({ onSelectDifficulty }: DifficultyScreenProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-background via-card to-background p-4 md:p-8 flex items-center justify-center">
            <div className="max-w-3xl w-full">
                <FloatingObject floatingLogo="/css-logo.png" c1="rgba(102, 51, 153, 0.8)" c2="rgba(255, 0, 0, 0.29)" />
                <div className="text-center mb-12">
                    <div className="text-6xl font-bold text-purple-500 mb-4">CSS</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">CSS Interview Quiz</h1>
                    <p className="text-muted-foreground text-lg">Choose your skill level and test your CSS knowledge</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Junior Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Beginner
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Junior Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">
                                Fundamentals like selectors, properties, and basic layout
                            </p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span> Basic selectors
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span> Box model
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span> Display properties
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span> Basic positioning
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("junior")}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                        >
                            Start Junior Quiz
                        </Button>
                    </div>

                    {/* Mid Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Intermediate
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Mid-Level Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">
                                Advanced selectors, flexbox, grid, and responsive design
                            </p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Flexbox & Grid
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Media queries
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Specificity
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">✓</span> Animations
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("mid")}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                        >
                            Start Mid-Level Quiz
                        </Button>
                    </div>

                    {/* Senior Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Advanced
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Senior Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">
                                Performance optimization, architecture, and advanced techniques
                            </p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-purple-500 mr-2">✓</span> Performance
                                </li>
                                <li className="flex items-center">
                                    <span className="text-purple-500 mr-2">✓</span> CSS-in-JS
                                </li>
                                <li className="flex items-center">
                                    <span className="text-purple-500 mr-2">✓</span> Advanced selectors
                                </li>
                                <li className="flex items-center">
                                    <span className="text-purple-500 mr-2">✓</span> Containment
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("senior")}
                            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold"
                        >
                            Start Senior Quiz
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
