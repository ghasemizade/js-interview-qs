"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./auth-context"
import { createClient } from "@/lib/supabase/client"

export interface QuizAttempt {
    id: string
    user_id: string
    quiz_type: string
    difficulty: string
    score: number
    max_score: number
    date: string
    answers: Record<string, number>
}

interface QuizContextType {
    attempts: QuizAttempt[]
    isLoading: boolean
    addAttempt: (attempt: Omit<QuizAttempt, "id" | "user_id" | "date">) => Promise<void>
    getAttemptsByType: (quizType: string) => QuizAttempt[]
    getAttemptsByDifficulty: (difficulty: string) => QuizAttempt[]
    getAverageScore: () => number
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

let supabaseInstance: any = null

function getSupabaseClient() {
    if (!supabaseInstance) {
        supabaseInstance = createClient()
    }
    return supabaseInstance
}

export function QuizProvider({ children }: { children: ReactNode }) {
    const { user, isLoading: authLoading } = useAuth()
    const [attempts, setAttempts] = useState<QuizAttempt[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        const fetchAttempts = async () => {
            if (!user) {
                setAttempts([])
                setIsLoading(false)
                return
            }

            const { data, error } = await supabase
                .from("quiz_attempts")
                .select("*")
                .eq("user_id", user.id)
                .order("created_at", { ascending: false })

            if (error) {
                console.error("Error fetching quiz attempts:", error)
                setAttempts([])
            } else {
                const formattedData = (data || []).map((item: any) => ({
                    id: item.id,
                    user_id: item.user_id,
                    quiz_type: item.quiz_type,
                    difficulty: item.difficulty,
                    score: item.score,
                    max_score: item.max_score,
                    date: item.date,
                    answers: item.answers,
                }))
                setAttempts(formattedData)
            }

            setIsLoading(false)
        }

        if (!authLoading) {
            fetchAttempts()
        }
    }, [user, authLoading, supabase])

    const addAttempt = async (attempt: Omit<QuizAttempt, "id" | "user_id" | "date">) => {
        if (!user) return

        let retries = 3
        let success = false

        while (retries > 0 && !success) {
            const { error } = await supabase.from("quiz_attempts").insert({
                user_id: user.id,
                quiz_type: attempt.quiz_type,
                difficulty: attempt.difficulty,
                score: attempt.score,
                max_score: attempt.max_score,
                answers: attempt.answers,
            })

            if (error) {
                if (error.status === 429) {
                    // Rate limit error - retry with backoff
                    retries -= 1
                    await new Promise((resolve) => setTimeout(resolve, 1000 * (4 - retries)))
                } else {
                    throw new Error(`Failed to save quiz attempt: ${error.message}`)
                }
            } else {
                success = true
            }
        }

        if (!success) {
            throw new Error("Failed to save quiz attempt after retries")
        }

        // Refetch attempts after adding
        const { data } = await supabase
            .from("quiz_attempts")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false })

        if (data) {
            const formattedData = data.map((item: any) => ({
                id: item.id,
                user_id: item.user_id,
                quiz_type: item.quiz_type,
                difficulty: item.difficulty,
                score: item.score,
                max_score: item.max_score,
                date: item.date,
                answers: item.answers,
            }))
            setAttempts(formattedData)
        }
    }

    const getAttemptsByType = (quizType: string) => {
        return attempts.filter((a) => a.quiz_type === quizType)
    }

    const getAttemptsByDifficulty = (difficulty: string) => {
        return attempts.filter((a) => a.difficulty === difficulty)
    }

    const getAverageScore = () => {
        if (attempts.length === 0) return 0
        const total = attempts.reduce((sum, a) => sum + (a.score / a.max_score) * 100, 0)
        return Number.parseFloat((total / attempts.length).toFixed(1))
    }

    return (
        <QuizContext.Provider
            value={{ attempts, isLoading, addAttempt, getAttemptsByType, getAttemptsByDifficulty, getAverageScore }}
        >
            {children}
        </QuizContext.Provider>
    )
}

export function useQuiz() {
    const context = useContext(QuizContext)
    if (!context) {
        throw new Error("useQuiz must be used within QuizProvider")
    }
    return context
}