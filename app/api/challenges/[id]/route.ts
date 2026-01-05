import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    // Sample challenge data - would come from database in real app
    const challengeData: Record<string, any> = {
      "1": {
        id: "1",
        title: "Two Sum",
        difficulty: "Easy",
        description:
          "Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.",
        category: "Array",
        acceptanceRate: 47.2,
        solvedBy: 2840000,
        initialCode: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
        functionSignature: "function twoSum(nums: number[], target: number): number[]",
        testCases: [
          {
            id: 1,
            input: { nums: [2, 7, 11, 15], target: 9 },
            expected: [0, 1],
            isExample: true,
            displayInput: "nums = [2, 7, 11, 15], target = 9",
            displayOutput: "[0, 1]",
          },
          {
            id: 2,
            input: { nums: [3, 2, 4], target: 6 },
            expected: [1, 2],
            isExample: true,
            displayInput: "nums = [3, 2, 4], target = 6",
            displayOutput: "[1, 2]",
          },
          {
            id: 3,
            input: { nums: [3, 3], target: 6 },
            expected: [0, 1],
            isExample: false,
            displayInput: "nums = [3, 3], target = 6",
            displayOutput: "[0, 1]",
          },
        ],
      },
    }

    const challenge = challengeData[id]

    if (!challenge) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 })
    }

    return NextResponse.json(challenge)
  } catch (error) {
    console.error("Error fetching challenge:", error)
    return NextResponse.json({ error: "Failed to fetch challenge" }, { status: 500 })
  }
}
