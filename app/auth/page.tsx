import { AuthForm } from "@/components/auth-pages/auth-form"

export default function AuthPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <AuthForm />
            </div>
        </main>
    )
}
