'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { AbsorptionAnimation } from '@/components/think-animation';


export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.push("/dashboard")
      } else {
        router.push("/auth")
      }
    }
  }, [user, isLoading, router])


  return (
    <>
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-1000 ease-out"
      >
        <AbsorptionAnimation shape="circle" />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    </>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}

