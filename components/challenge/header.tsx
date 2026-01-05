import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                            {"<>"}
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">Interview Pro</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={"/"} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
