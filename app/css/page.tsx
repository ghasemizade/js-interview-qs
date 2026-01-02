import { createMetadata } from "@/lib/metadata";
import CssQuizClient from "./cssQuizClient";

export const metadata = createMetadata({
    title: "CSS Interview Questions & Quiz | Interview Pro",
    description: "Test your CSS knowledge with interactive interview questions and quizzes. Practice layouts, Flexbox, Grid, and modern CSS concepts.",
    path: "/css",
});

export default function CssPage() {
    return <CssQuizClient />;
}
