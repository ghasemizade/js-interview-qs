"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { BookOpen, Code2, Zap } from "lucide-react"
import { AbsorptionAnimation } from "@/components/think-animation"

export default function Home() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/dashboard")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-out"
        >
          <AbsorptionAnimation shape="circle" />
        </div>
        {/* Navigation */}
        <div className="z-10 relative">
          <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">InterviewPro</span>
            </div>
            <div className="flex gap-4">
              <Link href="/auth?mode=login" className="px-6 py-2 text-muted-foreground hover:text-gray-300 transition">
                Sign In
              </Link>
              <Link
                href="/auth?mode=signup"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Sign Up
              </Link>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Master Web Development Interviews</h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Practice with comprehensive quizzes for JavaScript, HTML, and CSS. Track your progress and ace your next
              interview.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/auth?mode=signup"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Get Started Free
              </Link>
              <Link
                href="/auth?mode=login"
                className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition"
              >
                Sign In
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose InterviewPro?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
                <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comprehensive Content</h3>
                <p className="text-gray-400">
                  30+ questions for each of JavaScript, HTML, and CSS covering junior, mid-level, and senior topics.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
                <Zap className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
                <p className="text-gray-400">
                  Monitor your performance with detailed statistics and historical data on your profile dashboard.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
                <Code2 className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Explanations</h3>
                <p className="text-gray-400">
                  Learn from detailed explanations for each question to deepen your understanding of key concepts.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-700">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-500">90+</p>
                <p className="text-gray-400">Interview Questions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500">3</p>
                <p className="text-gray-400">Technology Tracks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500">3</p>
                <p className="text-gray-400">Difficulty Levels</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500">∞</p>
                <p className="text-gray-400">Free Practice</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to ace your interview?</h2>
            <Link
              href="/auth?mode=signup"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition inline-block"
            >
              Start Practicing Now
            </Link>
          </section>
          {/* Footer */}
          <footer className="border-t border-slate-700 py-8 text-center text-gray-400 flex justify-around">
            <p>&copy; 2025 InterviewPro. All rights reserved.</p>
            <div>
              For Supporting💙, Give Me
              <span className='pr-1'></span>
              <Link href={"https://github.com/ghasemizade/interview-qs"} className='border border-gray-400 hover:border-yellow-400 px-1.5 rounded-md'>star⭐</Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
