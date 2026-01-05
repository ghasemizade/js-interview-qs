"use client"

import { useEffect, useRef } from "react"

interface CodeEditorProps {
    code: string
    onChange: (code: string) => void
    language: string
}

export function CodeEditor({ code, onChange, language }: CodeEditorProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const textarea = textareaRef.current
        if (!textarea) return

        // Auto-resize height
        textarea.style.height = "auto"
        textarea.style.height = Math.max(textarea.scrollHeight, 200) + "px"
    }, [code])

    return (
        <div className="flex-1 overflow-hidden flex">
            {/* Line numbers */}
            <div className="bg-input/30 border-r border-border px-4 py-4 text-right text-muted-foreground text-xs font-mono select-none">
                {code.split("\n").map((_, i) => (
                    <div key={i + 1} className="h-6">
                        {i + 1}
                    </div>
                ))}
            </div>

            {/* Editor */}
            <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-input text-foreground font-mono text-sm p-4 focus:outline-none resize-none overflow-hidden"
                spellCheck="false"
                style={{
                    minHeight: "400px",
                }}
            />
        </div>
    )
}
