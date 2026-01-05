import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In a real app, this would query the database
    // For now, return sample data
    const challenges = [
      {
        id: "1",
        title: "Two Sum",
        difficulty: "Easy",
        description:
          "Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.",
        category: "Array",
        acceptanceRate: 47.2,
        solvedBy: 2840000,
        yourScore: null,
      },
      {
        id: "2",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        category: "String",
        acceptanceRate: 33.8,
        solvedBy: 1620000,
        yourScore: 85,
      },
      {
        id: "3",
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        description: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
        category: "Array",
        acceptanceRate: 28.4,
        solvedBy: 720000,
        yourScore: null,
      },
    ]

    return NextResponse.json(challenges)
  } catch (error) {
    console.error("Error fetching challenges:", error)
    return NextResponse.json({ error: "Failed to fetch challenges" }, { status: 500 })
  }
}
