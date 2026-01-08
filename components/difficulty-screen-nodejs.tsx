"use client"

import { Button } from "@/components/ui/button"
import type { Difficulty } from "@/lib/nodejs-questions"
import FloatingObject from "./floating-object"

interface DifficultyScreenProps {
    onSelectDifficulty: (difficulty: Difficulty) => void
}

export default function DifficultyScreenNodeJS({ onSelectDifficulty }: DifficultyScreenProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-background via-card to-background p-4 md:p-8 flex items-center justify-center">
            <div className="max-w-3xl w-full">
                <FloatingObject floatingLogo="/nodejs-logo.png" c1="rgba(83, 158, 67, 0.4)" c2="rgba(255, 0, 0, 0.19)" />
                <div className="text-center mb-12">
                    <div className="text-6xl font-bold text-green-600 mb-4">Node.js</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Node.js Interview Quiz</h1>
                    <p className="text-muted-foreground text-lg">Choose your skill level and test your Node.js knowledge</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Junior Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Beginner
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Junior Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">Fundamentals and core concepts</p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> Basics & runtime
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> npm & packages
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> Modules & imports
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> Callbacks & events
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("junior")}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                        >
                            Start Junior Quiz
                        </Button>
                    </div>

                    {/* Mid Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-lime-100 text-lime-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Intermediate
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Mid-Level Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">Advanced patterns and techniques</p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-lime-600 mr-2">✓</span> Event loop & streams
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lime-600 mr-2">✓</span> Promises & async/await
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lime-600 mr-2">✓</span> Middleware chaining
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lime-600 mr-2">✓</span> Clustering basics
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("mid")}
                            className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold"
                        >
                            Start Mid-Level Quiz
                        </Button>
                    </div>

                    {/* Senior Level */}
                    <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Advanced
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-2">Senior Developer</h2>
                            <p className="text-muted-foreground text-sm mb-6">Performance & optimization</p>
                            <ul className="text-left text-sm text-muted-foreground space-y-2 mb-8">
                                <li className="flex items-center">
                                    <span className="text-emerald-600 mr-2">✓</span> Worker threads
                                </li>
                                <li className="flex items-center">
                                    <span className="text-emerald-600 mr-2">✓</span> Memory management
                                </li>
                                <li className="flex items-center">
                                    <span className="text-emerald-600 mr-2">✓</span> libuv & internals
                                </li>
                                <li className="flex items-center">
                                    <span className="text-emerald-600 mr-2">✓</span> C++ addons
                                </li>
                            </ul>
                        </div>
                        <Button
                            onClick={() => onSelectDifficulty("senior")}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                        >
                            Start Senior Quiz
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
