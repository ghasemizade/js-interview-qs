'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AbsorptionAnimation } from '@/components/think-animation';


export default function Home() {

  return (
    <>
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-1000 ease-out"
      >
        <AbsorptionAnimation shape="circle" />
      </div>
      <main className="min-h-screen bg-transparent text-foreground container mx-auto p-4 z-10">
        <section className='flex justify-center items-center flex-col gap-10 text-center my-10'>
          <h1 className='text-3xl font-bold tracking-widest sm:text-4xl md:text-5xl lg:text-6xl'>
            Master JavaScript, HTML & CSS — One Level at a Time
          </h1>
          <p className='max-w-md'>
            Practice real interview questions and JavaScript algorithms, carefully categorized from beginner to advanced. Built to help you think, not memorize.
          </p>
        </section>
        <section className="flex justify-center items-center gap-10 flex-wrap p-10">
          <Link href={"/javascript"} className="min-w-md flex justify-between items-start gap-5 border-2 hover:border-amber-300 p-2 pr-2 rounded-2xl duration-75">
            <div>
              <h2 className='text-4xl font-black text-amber-300'>Javascript</h2>
              <h3 className='font-bold pt-10'>Javascript Interview Quiz</h3>
              <p className='max-w-80 text-lg font-medium text-muted-foreground'>Test your JavaScript knowledge with 30 questions across three difficulty levels</p>
            </div>
            <Image src={"Javascript-logo.jpg"} width={50} height={50} alt='js-logo' className='rounded-lg' />
          </Link>
          <Link href={"/html"} className="min-w-xs flex justify-between items-start gap-5 border-2 hover:border-orange-500 p-2 pr-2 rounded-2xl duration-75">
            <div>
              <h2 className='text-4xl font-black text-orange-500'>HTML</h2>
              <h3 className='font-bold pt-10'>HTML Interview Quiz</h3>
              <p className='max-w-80 text-lg font-medium text-muted-foreground'>Master HTML fundamentals and accessibility with 30 questions across three difficulty levels</p>
            </div>
            <Image src={"HTML5-logo.png"} width={50} height={50} alt='js-logo' className='rounded-lg' />
          </Link>
          <Link href={"/css"} className="min-w-xs flex justify-between items-start gap-5 border-2 hover:border-purple-500 p-2 pr-2 rounded-2xl duration-75">
            <div>
              <h2 className='text-4xl font-black text-purple-500'>CSS</h2>
              <h3 className='font-bold pt-10'>CSS Interview Quiz</h3>
              <p className='max-w-80 text-lg font-medium text-muted-foreground'>Master CSS layout, positioning, and performance with 30 questions across three difficulty levels</p>
            </div>
            <Image src={"css-logo.png"} width={50} height={50} alt='js-logo' className='rounded-lg' />
          </Link>
        </section>
      </main>
    </>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}

