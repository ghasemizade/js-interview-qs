import { QuestionList } from "@/components/challenge/question-list"
import { Header } from "@/components/challenge/header"
import { ProtectedRoute } from "@/components/protected-route"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <ProtectedRoute>
                <Header />
                <QuestionList />
            </ProtectedRoute>
        </main>
    )
}
