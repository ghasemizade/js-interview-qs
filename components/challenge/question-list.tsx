"use client"

import { useState } from "react"
import { QuestionCard } from "./question-card"

const SAMPLE_QUESTIONS = [
    {
        id: "1",
        title: "Two Sum",
        difficulty: "Easy",
        description:
            "Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.",
        category: "Array",
        acceptanceRate: 47.2,
        solvedBy: 2840000,
        yourScore: null,
    },
    {
        id: "2",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        category: "String",
        acceptanceRate: 33.8,
        solvedBy: 1620000,
        yourScore: 85,
    },
    {
        id: "3",
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        description: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
        category: "Array",
        acceptanceRate: 28.4,
        solvedBy: 720000,
        yourScore: null,
    },
    {
        id: "4",
        title: "Palindrome Number",
        difficulty: "Easy",
        description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
        category: "Math",
        acceptanceRate: 51.9,
        solvedBy: 1420000,
        yourScore: 100,
    },
    {
        id: "5",
        title: "Regular Expression Matching",
        difficulty: "Hard",
        description:
            "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
        category: "Dynamic Programming",
        acceptanceRate: 25.1,
        solvedBy: 580000,
        yourScore: null,
    },
]

export function QuestionList() {
    const [filter, setFilter] = useState<"all" | "easy" | "medium" | "hard">("all")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredQuestions = SAMPLE_QUESTIONS.filter((q) => {
        const matchesDifficulty = filter === "all" || q.difficulty.toLowerCase() === filter
        const matchesSearch =
            q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.category.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesDifficulty && matchesSearch
    })

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Coding Challenges</h2>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <input
                        type="text"
                        placeholder="Search challenges by title or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="rounded-lg bg-input px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <div className="flex gap-2">
                        {["all", "easy", "medium", "hard"].map((difficulty) => (
                            <button
                                key={difficulty}
                                onClick={() => setFilter(difficulty as any)}
                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === difficulty
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid gap-4">
                {filteredQuestions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                ))}
            </div>

            {filteredQuestions.length === 0 && (
                <div className="flex items-center justify-center py-12">
                    <p className="text-muted-foreground">No challenges found matching your criteria.</p>
                </div>
            )}
        </div>
    )
}
