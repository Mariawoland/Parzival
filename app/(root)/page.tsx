"use client";

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Hero from '@/app/(root)/pages/Hero';
import MainAboutUs from '@/app/(root)/pages/MainAboutUs';
import MainProjects from '@/app/(root)/pages/MainProjects';
import MainNews from '@/app/(root)/pages/MainNews';

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ProductForm from '@/components/shared/ProductForm';
import ProductFormEn from '@/components/shared/ProductFormEn';
import PostForm from '@/components/shared/PostForm';
import PostFormEn from '@/components/shared/PostFormEn';

export default function Home() {

  return (
    <main>

      <SignedIn>
        <div className='w-full flex lg:flex-row flex-col'>

          <ProductForm userId={''} />
          <ProductFormEn userId={''} />
        </div>
        <div className='w-full flex lg:flex-row flex-col'>

          <PostForm userId={''} />
          <PostFormEn userId={''} />
        </div>
      </SignedIn>

      <SignedOut>
        <Hero />
        <MainAboutUs />
        <MainProjects />
        <MainNews />
      </SignedOut>

    </main>
  )
}
