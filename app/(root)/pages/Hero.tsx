'use client';

import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '@/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';
import Link from 'next/link';

export default function Hero() {

    //Language Changer
    const { texts } = useContext(LanguageContext);

    //Animate on scroll
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
    }, []);

    return (
        <>
            <div className="relative max-w-screen min-h-screen pt-0 px-0 pb-4 m-0 flex items-center justify-center">

                <img src='/assets/images/main/img1.webp' className="absolute inset-0 w-full h-full object-cover -z-10" />

                <div data-aos="fade-right" className="z-10 flex flex-col justify-center items-center md:gap-12 gap-8 text-center text-white">

                    <h1 className='md:text-2xl text-lg tracking-wider'>{texts.hero.text1}</h1>

                    <h1 className='md:text-5xl text-4xl md:leading-loose leading-relaxed md:pb-5 tracking-widest'>{texts.hero.text2}</h1>

                    <h1 className='md:text-2xl text-lg leading-relaxed tracking-wider pb-4'>{texts.hero.text3}</h1>

                    <Link className='md:text-xl text-xl md:w-96 w-[270px] tracking-wider rounded-full border-2 py-3 border-five-1 hover:border-four-1 bg-four-2 hover:bg-five-2 text-five-1 hover:text-four-1 transition-all duration-500' href='/seminar'>{texts.hero.text4}</Link>

                </div>
            </div>

        </>
    )
}