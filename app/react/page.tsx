import { createMetadata } from "@/lib/metadata";
import ReactQuiz from "./reactQuizClient";

export const metadata = createMetadata({
    title: "React JS Interview Questions & Quiz | Interview Pro",
    description: "Test your React JS knowledge with interactive interview questions and quizzes. Cover components, hooks, state management, and modern React patterns.",
    path: "/react",
});

export default function CssPage() {
    return <ReactQuiz />;
}
