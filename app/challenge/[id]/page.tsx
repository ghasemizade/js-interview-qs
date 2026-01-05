import { ChallengeEditor } from "@/components/challenge/challenge-editor"

interface ChallengePageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ChallengePageProps) {
    const { id } = await params
    return {
        title: `Challenge ${id} - CodeChallenge`,
    }
}

export default async function ChallengePage({ params }: ChallengePageProps) {
    const { id } = await params

    return (
        <main className="min-h-screen bg-background">
            <ChallengeEditor challengeId={id} />
        </main>
    )
}
