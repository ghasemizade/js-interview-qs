import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, challengeId, code, language, testResults } = body

    // Validate input
    if (!userId || !challengeId || !code || !language) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, this would:
    // 1. Save submission to database
    // 2. Execute code
    // 3. Calculate score
    // 4. Update user statistics

    const submission = {
      id: Math.random().toString(36),
      userId,
      challengeId,
      language,
      status: "accepted",
      score: 100,
      grade: "A",
      testsPassed: testResults?.passed || 0,
      totalTests: testResults?.total || 0,
      executionTime: testResults?.time || 0,
      submittedAt: new Date().toISOString(),
    }

    return NextResponse.json(submission, { status: 201 })
  } catch (error) {
    console.error("Error creating submission:", error)
    return NextResponse.json({ error: "Failed to create submission" }, { status: 500 })
  }
}
