'use client';

import { useState } from 'react';
import QuizScreen from '@/components/quiz-screen';
import ResultsScreen from '@/components/results-screen';
import DifficultyScreen from '@/components/difficulty-screen';
import type { Difficulty } from '@/lib/questions';
import Link from 'next/link';
import Image from 'next/image';


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
    <main className="min-h-screen bg-background text-foreground ">
      <section className="flex justify-center items-center gap-10 flex-wrap p-10">
        <Link href={"/javascript"} className="min-w-xs flex justify-center items-center gap-5 border-2 hover:border-amber-300 p-2 rounded-2xl duration-75">
          <Image src={"Javascript-logo.jpg"} width={50} height={50} alt='js-logo' className='rounded-lg' />
          <h2>Javascript Problemset</h2>
        </Link>
        <Link href={"/javascript"} className="min-w-xs flex justify-center items-center gap-5 border-2 hover:border-orange-400 p-2 rounded-2xl duration-75">
          <Image src={"HTML5-logo.png"} width={50} height={50} alt='js-logo' className='rounded-lg' />
          <h2>HTML Problemset</h2>
        </Link>
        <Link href={"/javascript"} className="min-w-xs flex justify-center items-center gap-5 border-2 hover:border-purple-500 p-2 rounded-2xl duration-75">
          <Image src={"css-logo.png"} width={50} height={50} alt='js-logo' className='rounded-lg' />
          <h2>CSS Problemset</h2>
        </Link>
      </section>
    </main>
  );
}
