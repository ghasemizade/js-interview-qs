import { AuthForm } from "@/components/auth-pages/auth-form"

export default function AuthPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <AuthForm />
            </div>
        </main>
    )
}
