import Hero from '@/app/(root)/pages/Hero';
import MainAboutUs from '@/app/(root)/pages/MainAboutUs';
import MainProjects from '@/app/(root)/pages/MainProjects';
import MainNews from '@/app/(root)/pages/MainNews';
import Contact from './pages/contact';

import { SignedIn, SignedOut } from "@clerk/nextjs";
import ProductForm from '@/components/shared/ProductForm';
import PostForm from '@/components/shared/PostForm';


export default function Home() {

  return (
    <main>
      <div>
        <SignedIn>
          <div className='w-full flex lg:flex-row flex-col'>
            <ProductForm userId={''} />
            <PostForm />
          </div>
        </SignedIn>

        <SignedOut>
          <Hero />
          <MainAboutUs />
          <MainProjects />
          <div className='pt-[4%]'>
            <Contact />
          </div>
        </SignedOut>
      </div>

    </main>
  )
}
