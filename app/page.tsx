'use client';

import { useState } from 'react';
import QuizScreen from '@/components/quiz-screen';
import ResultsScreen from '@/components/results-screen';
import DifficultyScreen from '@/components/difficulty-screen';
import type { Difficulty } from '@/lib/questions';
import Link from 'next/link';

export default function Home() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const handleDifficultySelect = (selectedDifficulty: Difficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const handleQuizComplete = (quizResults: any) => {
    setResults(quizResults);
    setShowResults(true);
  };

  const handleRetry = () => {
    setShowResults(false);
    setResults(null);
  };

  const handleChangeDifficulty = () => {
    setDifficulty(null);
    setShowResults(false);
    setResults(null);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {!difficulty ? (
        <DifficultyScreen onSelectDifficulty={handleDifficultySelect} />
      ) : !showResults ? (
        <QuizScreen
          difficulty={difficulty}
          onComplete={handleQuizComplete}
          onChangeDifficulty={handleChangeDifficulty}
        />
      ) : (
        <ResultsScreen
          results={results}
          onRetry={handleRetry}
          onChangeDifficulty={handleChangeDifficulty}
        />
      )}
      <div className="absolute bottom-0 right-0 p-4">
        For Supporting❤️, Give Me
        <span className='pr-1'></span>
        <Link href={"https://github.com/ghasemizade/js-interview-qs"} className='border border-gray-400 hover:border-yellow-400 px-1.5 rounded-md'>star⭐</Link>
      </div>
    </main>
  );
}
