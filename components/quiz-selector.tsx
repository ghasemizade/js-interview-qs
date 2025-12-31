"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QuizSelector() {
    return (
        <>

            <div className="min-h-screen via-card to-background p-4 md:p-8 flex items-center justify-center z-10 relative">
                <div className="max-w-3xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Interview Quiz Platform</h1>
                        <p className="text-muted-foreground text-lg">Choose a quiz category to get started</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* JavaScript Quiz */}
                        <Link href="/javascript">
                            <div className="bg-card border-2 border-border rounded-lg p-8 cursor-pointer hover:border-yellow-500 hover:shadow-lg transition-all h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-5xl font-bold text-yellow-500 mb-4">JS</div>
                                    <h2 className="text-2xl font-semibold text-foreground mb-2">JavaScript Interview Quiz</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Test your JavaScript knowledge with 30 questions across three difficulty levels
                                    </p>
                                </div>
                                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Start JavaScript Quiz</Button>
                            </div>
                        </Link>

                        {/* HTML Quiz */}
                        <Link href="/html">
                            <div className="bg-card border-2 border-border rounded-lg p-8 cursor-pointer hover:border-orange-500 hover:shadow-lg transition-all h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-5xl font-bold text-orange-500 mb-4">HTML</div>
                                    <h2 className="text-2xl font-semibold text-foreground mb-2">HTML Interview Quiz</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Master HTML fundamentals and accessibility with 30 questions across three difficulty levels
                                    </p>
                                </div>
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Start HTML Quiz</Button>
                            </div>
                        </Link>

                        {/* CSS Quiz */}
                        <Link href="/css">
                            <div className="bg-card border-2 border-border rounded-lg p-8 cursor-pointer hover:border-purple-500 hover:shadow-lg transition-all h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-5xl font-bold text-purple-500 mb-4">CSS</div>
                                    <h2 className="text-2xl font-semibold text-foreground mb-2">CSS Interview Quiz</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Master CSS layout, positioning, and performance with 30 questions across three difficulty levels
                                    </p>
                                </div>
                                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Start CSS Quiz</Button>
                            </div>
                        </Link>

                        {/* React Quiz */}
                        <Link href="/react">
                            <div className="bg-card border-2 border-border rounded-lg p-8 cursor-pointer hover:border-cyan-500 hover:shadow-lg transition-all h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-5xl font-bold text-cyan-500 mb-4">React</div>
                                    <h2 className="text-2xl font-semibold text-foreground mb-2">React Interview Quiz</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Test your React knowledge with 30 questions across three difficulty levels
                                    </p>
                                </div>
                                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">Start React Quiz</Button>
                            </div>
                        </Link>

                        {/* TypeScript Quiz */}
                        <Link href="/typescript">
                            <div className="bg-card border-2 border-border rounded-lg p-8 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-5xl font-bold text-blue-500 mb-4">TS</div>
                                    <h2 className="text-2xl font-semibold text-foreground mb-2">TypeScript Interview Quiz</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Master TypeScript basics and advanced concepts with 30 questions across three difficulty levels
                                    </p>
                                </div>
                                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Start TypeScript Quiz</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
