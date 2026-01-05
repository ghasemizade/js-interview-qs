"use client"

import { useState } from "react"
import { CodeEditor } from "./code-editor"
import { TestCasePanel } from "./test-case-panel"
import { ResultsPanel } from "./results-panel"
import { ScoringPanel } from "./scoring-panel"
import { ResizablePanels } from "./resizable-panel"
import { executeCode } from "@/lib/code-executor"
import { calculateScore } from "@/lib/scoring"

interface ChallengeEditorProps {
  challengeId: string
}

interface ExecutionResult {
  testCaseId: number
  passed: boolean
  output: string
  error?: string
  executionTime: number
}

export function ChallengeEditor({ challengeId }: ChallengeEditorProps) {
  const [code, setCode] = useState(`function twoSum(nums, target) {
  // Write your solution here
  
}`)
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [showResults, setShowResults] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [executionResults, setExecutionResults] = useState<ExecutionResult[]>([])
  const [selectedTestIndex, setSelectedTestIndex] = useState(0)
  const [scoreData, setScoreData] = useState<any>(null)

  const handleRun = async () => {
    setIsRunning(true)
    setShowResults(true)

    try {
      const results = await executeCode({
        code,
        language: selectedLanguage,
        testCases: SAMPLE_TEST_CASES,
      })
      setExecutionResults(results)

      // Calculate score
      const passedTests = results.filter((r) => r.passed).length
      const totalTime = results.reduce((sum, r) => sum + r.executionTime, 0)

      const score = calculateScore({
        totalTests: results.length,
        passedTests,
        executionTime: totalTime,
        difficulty: "Easy",
      })

      setScoreData(score)
    } catch (error) {
      console.error("Execution error:", error)
      setExecutionResults([
        {
          testCaseId: 1,
          passed: false,
          output: "",
          error: "Failed to execute code",
          executionTime: 0,
        },
      ])
    }

    setIsRunning(false)
  }

  const problemPanel = (
    <div className="overflow-y-auto border-r border-border bg-card/30">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Problem Description</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Given an array of integers <code className="bg-input px-2 py-1 rounded text-foreground">nums</code> and an
              integer <code className="bg-input px-2 py-1 rounded text-foreground">target</code>, return the indices of
              the two numbers such that they add up to{" "}
              <code className="bg-input px-2 py-1 rounded text-foreground">target</code>.
            </p>
            <p>You may assume each input has exactly one solution, and you may not use the same element twice.</p>

            <div className="bg-input/50 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground mb-2">Example:</p>
              <code className="text-xs">
                Input: nums = [2, 7, 11, 15], target = 9<br />
                Output: [0, 1]
                <br />
                Explanation: nums[0] + nums[1] == 9
              </code>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">Constraints:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>2 &lt;= nums.length &lt;= 10^4</li>
                <li>-10^9 &lt;= nums[i] &lt;= 10^9</li>
                <li>-10^9 &lt;= target &lt;= 10^9</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Topic Tags</h3>
          <div className="flex flex-wrap gap-2">
            {["Array", "Hash Table"].map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const editorPanel = (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="bg-card/50 border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-foreground">Language:</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-input text-foreground rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {isRunning ? "Running..." : "Run Code"}
        </button>
      </div>
      <CodeEditor code={code} onChange={setCode} language={selectedLanguage} />
    </div>
  )

  const resultsPanel = (
    <div className="overflow-y-auto flex flex-col h-full">
      {showResults ? (
        <div className="flex flex-col gap-4 p-4 h-full">
          <TestCasePanel
            results={executionResults}
            selectedIndex={selectedTestIndex}
            onSelectTest={setSelectedTestIndex}
          />
          <ResultsPanel results={executionResults} selectedIndex={selectedTestIndex} />
          {scoreData && <ScoringPanel scoreData={scoreData} />}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <p className="text-center">Click "Run Code" to see results</p>
        </div>
      )}
    </div>
  )

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Two Sum</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Given an array of integers, return the indices of two numbers that add up to target
              </p>
            </div>
            <a href="/" className="text-sm text-primary hover:text-primary/80 transition-colors">
              ← Back to Challenges
            </a>
          </div>
        </div>
      </div>

      <ResizablePanels
        leftPanel={problemPanel}
        middlePanel={editorPanel}
        rightPanel={resultsPanel}
        defaultLeftWidth={33}
        defaultRightWidth={33}
      />
    </div>
  )
}

const SAMPLE_TEST_CASES = [
  {
    id: 1,
    input: { nums: [2, 7, 11, 15], target: 9 },
    expected: [0, 1],
    description: "nums = [2, 7, 11, 15], target = 9",
  },
  {
    id: 2,
    input: { nums: [3, 2, 4], target: 6 },
    expected: [1, 2],
    description: "nums = [3, 2, 4], target = 6",
  },
  {
    id: 3,
    input: { nums: [3, 3], target: 6 },
    expected: [0, 1],
    description: "nums = [3, 3], target = 6",
  },
]
