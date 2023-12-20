"use client";

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Hero from '@/app/(root)/pages/Hero';
import MainAboutUs from '@/app/(root)/pages/MainAboutUs';
import MainProjects from '@/app/(root)/pages/MainProjects';
import MainNews from '@/app/(root)/pages/MainNews';

export default function Home() {

  return (
    <main>
      <Hero />
      <MainAboutUs />
      <MainProjects />
      <MainNews />

      <section id="test">
        <h1 className='text-4xl'>I Love You</h1>
      </section>

    </main>
  )
}
