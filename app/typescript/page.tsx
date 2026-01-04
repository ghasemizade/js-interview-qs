import { createMetadata } from "@/lib/metadata";
import TypeScriptQuiz from "./typescriptQuizClient";

export const metadata = createMetadata({
    title: "TypeScript Interview Questions & Quiz | Interview Pro",
    description: "Test your TypeScript skills with interactive interview questions and quizzes. Practice types, interfaces, generics, enums, and advanced TypeScript concepts.",
    path: "/typescript",
});

export default function CssPage() {
    return <TypeScriptQuiz />;
}
