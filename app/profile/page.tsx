"use client"

import { useAuth } from "@/lib/auth-context"
import { useQuiz } from "@/lib/quiz-context"
import { ProtectedRoute } from "@/components/protected-route"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function ProfileContent() {
    const { user } = useAuth()
    const { attempts, isLoading, getAverageScore } = useQuiz()

    const calculateStats = () => {
        const byType: Record<string, { count: number; totalScore: number; maxScore: number }> = {}

        attempts.forEach((attempt) => {
            if (!byType[attempt.quiz_type]) {
                byType[attempt.quiz_type] = { count: 0, totalScore: 0, maxScore: 0 }
            }
            byType[attempt.quiz_type].count += 1
            byType[attempt.quiz_type].totalScore += attempt.score
            byType[attempt.quiz_type].maxScore += attempt.max_score
        })

        return byType
    }

    const stats = calculateStats()
    const averageScore = getAverageScore()

    if (isLoading) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-background via-card to-background p-4 md:p-8 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-card to-background p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
                        <p className="text-muted-foreground">View your quiz history and progress</p>
                    </div>
                    <Link href="/dashboard">
                        <Button variant="outline">Back to Dashboard</Button>
                    </Link>
                </div>

                {/* User Info Card */}
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">User Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-lg font-medium text-foreground">{user?.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">User ID</p>
                            <p className="text-lg font-medium text-foreground font-mono text-sm">{user?.id}</p>
                        </div>
                    </div>
                </div>

                {/* Stats Card */}
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Your Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-1">Total Quizzes</p>
                            <p className="text-3xl font-bold text-blue-500">{attempts.length}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                            <p className="text-3xl font-bold text-green-500">{averageScore}%</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-1">Total Points</p>
                            <p className="text-3xl font-bold text-purple-500">
                                {attempts.reduce((sum, a) => sum + a.score, 0)} / {attempts.reduce((sum, a) => sum + a.max_score, 0)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quiz Type Stats */}
                {Object.keys(stats).length > 0 && (
                    <div className="bg-card border border-border rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold text-foreground mb-4">Performance by Category</h2>
                        <div className="space-y-3">
                            {Object.entries(stats).map(([type, data]) => (
                                <div
                                    key={type}
                                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                                >
                                    <div>
                                        <p className="font-medium text-foreground capitalize">{type.replace(/_/g, " ")} Quiz</p>
                                        <p className="text-sm text-muted-foreground">{data.count} attempts</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-foreground">
                                            {data.totalScore}/{data.maxScore}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {((data.totalScore / data.maxScore) * 100).toFixed(0)}%
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quiz History */}
                <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Quiz History</h2>
                    <div className="space-y-4">
                        {attempts.length > 0 ? (
                            attempts
                                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                .map((attempt) => (
                                    <div
                                        key={attempt.id}
                                        className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                                    >
                                        <div className="flex-1">
                                            <p className="font-medium text-foreground capitalize">
                                                {attempt.quiz_type.replace(/_/g, " ")} - {attempt.difficulty} Level
                                            </p>
                                            <p className="text-sm text-muted-foreground">{attempt.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-foreground">
                                                {attempt.score}/{attempt.max_score}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {((attempt.score / attempt.max_score) * 100).toFixed(0)}%
                                            </p>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <p className="text-center text-muted-foreground py-8">
                                No quiz attempts yet. Start a quiz to see your history!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default function Profile() {
    return (
        <ProtectedRoute>
            <ProfileContent />
        </ProtectedRoute>
    )
}
