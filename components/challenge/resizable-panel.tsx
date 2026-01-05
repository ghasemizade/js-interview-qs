"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"

interface ResizablePanelsProps {
    leftPanel: ReactNode
    middlePanel: ReactNode
    rightPanel: ReactNode
    defaultLeftWidth?: number
    defaultRightWidth?: number
}

export function ResizablePanels({
    leftPanel,
    middlePanel,
    rightPanel,
    defaultLeftWidth = 33,
    defaultRightWidth = 33,
}: ResizablePanelsProps) {
    const [leftWidth, setLeftWidth] = useState(defaultLeftWidth)
    const [rightWidth, setRightWidth] = useState(defaultRightWidth)
    const containerRef = useRef<HTMLDivElement>(null)
    const isResizingRef = useRef<"left" | "right" | null>(null)

    const handleMouseDown = (divider: "left" | "right") => (e: React.MouseEvent) => {
        e.preventDefault()
        isResizingRef.current = divider
    }

    const handleMouseUp = () => {
        isResizingRef.current = null
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isResizingRef.current || !containerRef.current) return

        const container = containerRef.current
        const containerRect = container.getBoundingClientRect()
        const mouseX = e.clientX - containerRect.left
        const containerWidth = containerRect.width

        if (isResizingRef.current === "left") {
            const newLeftWidth = Math.max(20, Math.min(50, (mouseX / containerWidth) * 100))
            setLeftWidth(newLeftWidth)
        } else if (isResizingRef.current === "right") {
            const rightX = containerWidth - mouseX
            const newRightWidth = Math.max(20, Math.min(50, (rightX / containerWidth) * 100))
            setRightWidth(newRightWidth)
        }
    }

    const middleWidth = 100 - leftWidth - rightWidth

    return (
        <div
            ref={containerRef}
            className="flex h-full w-full"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* Left Panel */}
            <div style={{ width: `${leftWidth}%` }} className="overflow-hidden flex flex-col">
                {leftPanel}
            </div>

            {/* Left Divider */}
            <div
                onMouseDown={handleMouseDown("left")}
                className="w-1 bg-border hover:bg-primary/50 cursor-col-resize transition-colors active:bg-primary/70"
            />

            {/* Middle Panel */}
            <div style={{ width: `${middleWidth}%` }} className="overflow-hidden flex flex-col">
                {middlePanel}
            </div>

            {/* Right Divider */}
            <div
                onMouseDown={handleMouseDown("right")}
                className="w-1 bg-border hover:bg-primary/50 cursor-col-resize transition-colors active:bg-primary/70"
            />

            {/* Right Panel */}
            <div style={{ width: `${rightWidth}%` }} className="overflow-hidden flex flex-col">
                {rightPanel}
            </div>
        </div>
    )
}
