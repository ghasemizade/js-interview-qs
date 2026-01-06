"use client"

interface ExecutionResult {
    testCaseId: number
    passed: boolean
    output: string
    error?: string
    executionTime: number
}

interface ResultsPanelProps {
    results: ExecutionResult[]
    selectedIndex: number
}

export function ResultsPanel({ results, selectedIndex }: ResultsPanelProps) {
    const passedCount = results.filter((r) => r.passed).length
    const totalCount = results.length

    return (
        <div className="flex-1 flex flex-col bg-card rounded-lg overflow-hidden border border-border">
            <div className="border-b border-border bg-card/50 px-4 py-3">
                <h3 className="text-sm font-semibold text-foreground">Execution Results</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {results.length > 0 && (
                    <>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span
                                    className={`h-3 w-3 rounded-full ${passedCount === totalCount ? "bg-green-500" : "bg-yellow-500"}`}
                                />
                                <p className="text-sm font-medium text-foreground">
                                    {passedCount}/{totalCount} Tests Passed
                                </p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Success Rate: {((passedCount / totalCount) * 100).toFixed(1)}%
                            </p>
                        </div>

                        <div className="border-t border-border pt-4">
                            <p className="text-xs font-medium text-muted-foreground mb-3">Test Results</p>
                            <div className="space-y-2">
                                {results.map((result, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-2 p-2 rounded-lg text-xs ${result.passed ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                                            }`}
                                    >
                                        <span className={`h-2 w-2 rounded-full ${result.passed ? "bg-green-500" : "bg-red-500"}`} />
                                        <span className="flex-1">Test {result.testCaseId}</span>
                                        <span className="text-muted-foreground">{result.executionTime}ms</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {results[selectedIndex]?.error && (
                            <div className="border-t border-border pt-4">
                                <p className="text-xs font-medium text-muted-foreground mb-2">Error Details</p>
                                <pre className="bg-red-500/10 text-red-400 text-xs p-2 rounded-lg overflow-auto max-h-24">
                                    {results[selectedIndex].error}
                                </pre>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
