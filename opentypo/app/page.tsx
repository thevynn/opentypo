'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { motion } from "framer-motion"

import Image from "next/image";
import { NavigationBar } from '@/components/navigation-bar';
import { HeroSection } from "@/components/hero-section";
import Link from "next/link"

import { signIn, signOut, useSession } from 'next-auth/react';


export default function Home() {
  const { data: session } = useSession();

  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-neutral-900">
          {!session ? (
            <>
              <NavigationBar />
              <HeroSection />
            </>
          ) : (
            <>
              <NavigationBar />
              <HeroSection />
              <p>Welcome, {session.user?.name}!</p>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          )}
        </main>
        <ProgressBar
          height="2px"
          color="#ffffff"
          options={{ showSpinner: false }}
          shallowRouting
        />
    </>


  );
}
