"use client"

interface ExecutionResult {
    testCaseId: number
    passed: boolean
    output: string
    error?: string
    executionTime: number
}

interface TestCasePanelProps {
    results: ExecutionResult[]
    selectedIndex: number
    onSelectTest: (index: number) => void
}

const SAMPLE_TEST_CASES = [
    {
        id: 1,
        input: "nums = [2, 7, 11, 15], target = 9",
        expected: "[0, 1]",
    },
    {
        id: 2,
        input: "nums = [3, 2, 4], target = 6",
        expected: "[1, 2]",
    },
    {
        id: 3,
        input: "nums = [3, 3], target = 6",
        expected: "[0, 1]",
    },
]

export function TestCasePanel({ results, selectedIndex, onSelectTest }: TestCasePanelProps) {
    const testCase = SAMPLE_TEST_CASES[selectedIndex]
    const result = results[selectedIndex]

    return (
        <div className="flex-1 flex flex-col bg-card rounded-lg overflow-hidden border border-border">
            <div className="border-b border-border bg-card/50 px-4 py-3">
                <h3 className="text-sm font-semibold text-foreground">Test Cases</h3>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-2">
                    {SAMPLE_TEST_CASES.map((_, idx) => {
                        const res = results[idx]
                        return (
                            <button
                                key={idx}
                                onClick={() => onSelectTest(idx)}
                                className={`w-full text-left p-3 rounded-lg transition-colors ${selectedIndex === idx
                                        ? "bg-primary/20 border border-primary text-foreground"
                                        : "bg-input/30 border border-border text-muted-foreground hover:bg-input/40"
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    {res && <span className={`h-2 w-2 rounded-full ${res.passed ? "bg-green-500" : "bg-red-500"}`} />}
                                    <span className="text-sm font-medium">Test Case {idx + 1}</span>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {testCase && result && (
                <div className="border-t border-border bg-card/50 p-4 space-y-3">
                    <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">Input</p>
                        <pre className="bg-input text-foreground text-xs p-2 rounded-lg overflow-x-auto">{testCase.input}</pre>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">Expected Output</p>
                        <pre className="bg-input text-foreground text-xs p-2 rounded-lg overflow-x-auto">{testCase.expected}</pre>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">Your Output</p>
                        <pre className="bg-input text-foreground text-xs p-2 rounded-lg overflow-x-auto">
                            {result.output || (result.error ? "Error: " + result.error : "No output")}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    )
}
