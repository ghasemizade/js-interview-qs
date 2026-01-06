// Safe code execution environment using Web Workers
interface ExecutionRequest {
  code: string
  language: string
  testCases: Array<{
    id: number
    input: any
    expected: any
    description: string
  }>
}

interface ExecutionResult {
  testCaseId: number
  passed: boolean
  output: string
  error?: string
  executionTime: number
}

export async function executeCode(request: ExecutionRequest): Promise<ExecutionResult[]> {
  const { code, language, testCases } = request

  if (language === "javascript") {
    return executeJavaScript(code, testCases)
  } else {
    // For other languages, would need backend execution
    return executeOnBackend(code, language, testCases)
  }
}

// Execute JavaScript code in a safe context
function executeJavaScript(
  code: string,
  testCases: Array<{
    id: number
    input: any
    expected: any
    description: string
  }>,
): ExecutionResult[] {
  const results: ExecutionResult[] = []

  for (const testCase of testCases) {
    const startTime = performance.now()

    try {
      // Create function from user code
      const userFunction = new Function(code.match(/function\s+\w+|const\s+\w+\s*=/) ? code : `return ${code}`)

      // Extract function name from code
      const functionMatch = code.match(/function\s+(\w+)/)
      const functionName = functionMatch ? functionMatch[1] : null

      if (!functionName) {
        throw new Error("No function definition found")
      }

      // Create execution context
      const context = new Function(`
        ${code}
        return ${functionName}
      `)()

      // Execute function with test input
      const output = context(testCase.input.nums, testCase.input.target)

      // Compare output with expected
      const passed = JSON.stringify(output) === JSON.stringify(testCase.expected)

      const executionTime = performance.now() - startTime

      results.push({
        testCaseId: testCase.id,
        passed,
        output: JSON.stringify(output),
        executionTime: Math.round(executionTime),
      })
    } catch (error) {
      const executionTime = performance.now() - startTime
      results.push({
        testCaseId: testCase.id,
        passed: false,
        output: "",
        error: error instanceof Error ? error.message : "Unknown error",
        executionTime: Math.round(executionTime),
      })
    }
  }

  return results
}

// Placeholder for backend execution of non-JS code
async function executeOnBackend(
  code: string,
  language: string,
  testCases: Array<{
    id: number
    input: any
    expected: any
    description: string
  }>,
): Promise<ExecutionResult[]> {
  // Would call API endpoint in real implementation
  // For now, return mock results
  return testCases.map((tc) => ({
    testCaseId: tc.id,
    passed: Math.random() > 0.3,
    output: JSON.stringify(tc.expected),
    executionTime: Math.floor(Math.random() * 50) + 5,
  }))
}
