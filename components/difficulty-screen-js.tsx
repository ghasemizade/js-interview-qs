'use client';

import { Button } from '@/components/ui/button';
import type { Difficulty } from '@/lib/questions';
import Image from 'next/image';
import FloatingObject from './floating-object';

interface DifficultyScreenProps {
  onSelectDifficulty: (difficulty: Difficulty) => void;
}

export default function DifficultyScreen({
  onSelectDifficulty,
}: DifficultyScreenProps) {

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-card to-background p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <FloatingObject />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            JavaScript Interview Quiz
          </h1>
          <p className="text-muted-foreground text-lg">
            Select your experience level to get started
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => onSelectDifficulty('junior')}
            className="bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all group"
          >
            <div className="mb-4">
              <div className="text-3xl font-bold text-blue-500 mb-2">01</div>
              <h2 className="text-2xl font-semibold text-foreground">
                Junior Developer
              </h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Perfect for beginners and those starting their JavaScript journey
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Fundamentals of JavaScript</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Basic array & object methods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Variable declarations & types</span>
              </li>
            </ul>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => onSelectDifficulty('junior')}
            >
              Start Quiz
            </Button>
          </div>

          {/* Mid-Level Developer */}
          <div
            onClick={() => onSelectDifficulty('mid')}
            className="bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all group md:scale-105"
          >
            <div className="mb-4">
              <div className="text-3xl font-bold text-amber-500 mb-2">02</div>
              <h2 className="text-2xl font-semibold text-foreground">
                Mid-Level Developer
              </h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              For developers with solid JavaScript experience
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Closures and scope</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Async/await & Promises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Array methods & functional programming</span>
              </li>
            </ul>
            <Button
              className="w-full bg-amber-500 hover:bg-amber-600 text-white"
              onClick={() => onSelectDifficulty('mid')}
            >
              Start Quiz
            </Button>
          </div>

          {/* Senior Developer */}
          <div
            onClick={() => onSelectDifficulty('senior')}
            className="bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all group"
          >
            <div className="mb-4">
              <div className="text-3xl font-bold text-purple-500 mb-2">03</div>
              <h2 className="text-2xl font-semibold text-foreground">
                Senior Developer
              </h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              For experienced developers looking for advanced challenges
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Prototypal inheritance & Proxy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Event loop & memory management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">→</span>
                <span className="text-foreground">Advanced design patterns</span>
              </li>
            </ul>
            <Button
              className="w-full bg-purple-500 hover:bg-purple-600 text-white"
              onClick={() => onSelectDifficulty('senior')}
            >
              Start Quiz
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Each quiz contains some questions specific to your selected level
          </p>
        </div>
      </div>
    </div>
  );
}
