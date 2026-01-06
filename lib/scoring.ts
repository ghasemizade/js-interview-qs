// Scoring algorithm based on test case pass rate and execution efficiency

interface ScoringInput {
  totalTests: number
  passedTests: number
  executionTime: number
  difficulty: "Easy" | "Medium" | "Hard"
}

export function calculateScore(input: ScoringInput): {
  score: number
  grade: string
  breakdown: {
    testsPassed: number
    timeBonus: number
    difficultyBonus: number
  }
} {
  const { totalTests, passedTests, executionTime, difficulty } = input

  // Base score from test cases (0-60 points)
  const testScore = (passedTests / totalTests) * 60

  // Time efficiency bonus (0-20 points) - reward fast execution
  const timeBonus = Math.max(0, Math.min(20, 20 - executionTime / 10))

  // Difficulty multiplier (0-20 bonus points)
  const difficultyMultiplier = {
    Easy: 1,
    Medium: 1.5,
    Hard: 2,
  }[difficulty]

  const difficultyBonus = difficultyMultiplier * 10

  // Total score
  const totalScore = Math.round(testScore + timeBonus + difficultyBonus)

  // Grade assignment
  let grade: string
  if (totalScore >= 90) grade = "S"
  else if (totalScore >= 80) grade = "A"
  else if (totalScore >= 70) grade = "B"
  else if (totalScore >= 60) grade = "C"
  else if (totalScore >= 50) grade = "D"
  else grade = "F"

  return {
    score: Math.min(100, totalScore),
    grade,
    breakdown: {
      testsPassed: Math.round(testScore),
      timeBonus: Math.round(timeBonus),
      difficultyBonus: Math.round(difficultyBonus),
    },
  }
}

export function getGradeColor(grade: string): string {
  const colors: Record<string, string> = {
    S: "text-green-500 bg-green-500/10",
    A: "text-green-400 bg-green-500/10",
    B: "text-blue-400 bg-blue-500/10",
    C: "text-yellow-400 bg-yellow-500/10",
    D: "text-orange-400 bg-orange-500/10",
    F: "text-red-500 bg-red-500/10",
  }
  return colors[grade] || colors.F
}
