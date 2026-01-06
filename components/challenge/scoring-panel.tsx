"use client"

import { getGradeColor } from "@/lib/scoring"

interface ScorePanelProps {
    scoreData: {
        score: number
        grade: string
        breakdown: {
            testsPassed: number
            timeBonus: number
            difficultyBonus: number
        }
    }
}

export function ScoringPanel({ scoreData }: ScorePanelProps) {
    return (
        <div className="bg-card rounded-lg overflow-hidden border border-border">
            <div className="border-b border-border bg-card/50 px-4 py-3">
                <h3 className="text-sm font-semibold text-foreground">Your Score</h3>
            </div>

            <div className="p-4 space-y-4">
                <div className="flex items-end gap-4">
                    <div className="flex-1">
                        <p className="text-xs font-medium text-muted-foreground mb-2">Total Score</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-foreground">{scoreData.score}</span>
                            <span className="text-sm text-muted-foreground">/100</span>
                        </div>
                    </div>

                    <div className={`text-center px-4 py-3 rounded-lg font-semibold text-lg ${getGradeColor(scoreData.grade)}`}>
                        {scoreData.grade}
                    </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground mb-3">Score Breakdown</p>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Tests Passed</span>
                            <span className="font-medium text-green-400">{scoreData.breakdown.testsPassed} pts</span>
                        </div>

                        <div className="w-full bg-input rounded-full h-1.5">
                            <div
                                className="bg-green-500 h-1.5 rounded-full"
                                style={{ width: `${(scoreData.breakdown.testsPassed / 60) * 100}%` }}
                            />
                        </div>
                    </div>

                    <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Time Bonus</span>
                            <span className="font-medium text-blue-400">{scoreData.breakdown.timeBonus} pts</span>
                        </div>

                        <div className="w-full bg-input rounded-full h-1.5">
                            <div
                                className="bg-blue-500 h-1.5 rounded-full"
                                style={{ width: `${(scoreData.breakdown.timeBonus / 20) * 100}%` }}
                            />
                        </div>
                    </div>

                    <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Difficulty Bonus</span>
                            <span className="font-medium text-purple-400">{scoreData.breakdown.difficultyBonus} pts</span>
                        </div>

                        <div className="w-full bg-input rounded-full h-1.5">
                            <div
                                className="bg-purple-500 h-1.5 rounded-full"
                                style={{ width: `${(scoreData.breakdown.difficultyBonus / 20) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                <button className="w-full mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                    Submit Solution
                </button>
            </div>
        </div>
    )
}
