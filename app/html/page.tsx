import { createMetadata } from "@/lib/metadata";
import HTMLQuiz from "./htmlQuizClient";

export const metadata = createMetadata({
    title: "HTML Interview Questions & Quiz | Interview Pro",
    description: "Prepare for HTML interviews with interactive quizzes. Learn semantic HTML, accessibility, SEO basics, and best practices.",
    path: "/css",
});

export default function CssPage() {
    return <HTMLQuiz />;
}
