import { createMetadata } from "@/lib/metadata";
import CssQuizClient from "./cssQuizClient";

export const metadata = createMetadata({
    title: "CSS Questions | Interview Pro",
    description: "Test your CSS knowledge with interactive interview questions",
    path: "/css",
});

export default function CssPage() {
    return <CssQuizClient />;
}
