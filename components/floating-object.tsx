'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export interface FloatingObjectProps {
    floatingLogo: string
    c1: string
    c2: string
}

export default function FloatingObject({ floatingLogo, c1, c2 }: FloatingObjectProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const objectRef = useRef<HTMLImageElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Get container dimensions
        const getContainerDimensions = () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        }

        // Random initial position
        const dims = getContainerDimensions()
        const objectSize = 80
        setPosition({
            x: Math.random() * (dims.width - objectSize),
            y: Math.random() * (dims.height - objectSize),
        })

        // Random velocity (angle and speed)
        let vx = (Math.random() - 0.5) * 4
        let vy = (Math.random() - 0.5) * 4

        // Ensure minimum speed
        const speed = Math.sqrt(vx * vx + vy * vy)
        if (speed < 1) {
            vx = (Math.random() - 0.5) * 3
            vy = (Math.random() - 0.5) * 3
        }

        let currentX = position.x
        let currentY = position.y

        const animate = () => {
            const dims = getContainerDimensions()
            const objectSize = 80

            // Update position
            currentX += vx
            currentY += vy

            // Wraparound logic
            if (currentX > dims.width) {
                currentX = -objectSize
            } else if (currentX + objectSize < 0) {
                currentX = dims.width
            }

            if (currentY > dims.height) {
                currentY = -objectSize
            } else if (currentY + objectSize < 0) {
                currentY = dims.height
            }

            setPosition({
                x: currentX,
                y: currentY,
            })

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)

        // Handle window resize
        const handleResize = () => {
            // Animation continues seamlessly
        }

        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden pointer-events-none opacity-35"
        >
            <Image
                src={floatingLogo}
                width={150}
                height={150}
                alt='JS Logo Floating'
                ref={objectRef}
                className="fixed w-20 h-20 rounded-2xl"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    background: 'transparent',
                    boxShadow: `0 20px 40px ${c1}, 0 0 20px ${c2}`,
                    transition: 'none',
                }}
            />

            {/* Floating trail effect */}
            <div
                className="fixed w-20 h-20 rounded-2xl opacity-20 blur-xl"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                }}
            />
        </div>
    )
}
