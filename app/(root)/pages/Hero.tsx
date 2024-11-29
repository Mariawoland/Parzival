'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';
import Link from 'next/link';
import { TermsAndCondtions1 } from '@/components/shared/TermsAndCondtions';
import Cookies from 'js-cookie';
import kaText from '@/public/languages/ka.json';
import enText from '@/public/languages/en.json';
import Image from "next/image";
export default function Hero() {
    const selectedLanguage = Cookies.get('selectedLanguage');
    //Animate on scroll
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
    }, []);
    return (
        <>
            <div className="relative max-w-screen h-[88vh] pt-0 px-0 m-0 flex items-center justify-center">
                <Image width={1000} height={700} src='/assets/images/donation/img1.png' className="absolute inset-0 w-full h-[88vh] object-cover -z-10 md:flex hidden" alt={'background image'} />
                <Image width={600} height={1000} alt={"Background image"} src={selectedLanguage === "en" ? enText.hero.background : kaText.hero.background} className="absolute inset-0 w-full h-[86vh] -z-10 md:hidden flex" />
                <div className='w-full h-full absolute md:flex hidden -z-10'>
                    <Image width={600} height={200} alt='text' src={selectedLanguage === "en" ? enText.hero.text2[0] : kaText.hero.text2[0]} data-aos="fade-left" className='absolute lg:w-[42vw] w-[52vw] top-[8%] left-[8%]' />
                    <Image width={600} height={200} alt='text' src={selectedLanguage === "en" ? enText.hero.text2[1] : kaText.hero.text2[1]} className='absolute lg:w-[55vw] w-[65vw] top-[26%] lg:right-[5%] right-[8%]' data-aos="fade-right" />
                    <Image width={600} height={200} alt='text' src={selectedLanguage === "en" ? enText.hero.text2[2] : kaText.hero.text2[2]} className='absolute lg:w-[55vw] w-[65vw] top-[50%] lg:left-[23%] left-[18%]' data-aos="fade-left" />
                </div>
                <div className='w-full px-[8%] h-full pb-[80px] flex lg:flex-row flex-col lg:gap-0 gap-3 lg:justify-between items-end justify-end'>
                    <a target='_blank' className='sm:text-lg text-sm md:h-[60px] h-[50px] lg:w-96 w-full tracking-wider rounded-full border-2 p-3 border-seven-4 bg-seven-2 hover:bg-seven-1 text-seven-4 transition-all duration-500 font-bold flex justify-center items-center' href='https://parzivalknight.ge/ge'>{selectedLanguage === "en" ? 'Become Parzival`s Knight' : 'გახდი პარსიფალის რაინდი'}</a>
                    <Link className='sm:text-lg text-sm md:h-[60px] h-[50px] lg:w-96 w-full tracking-wider rounded-full border-2 p-3 border-seven-4 bg-seven-2 hover:bg-seven-1 text-seven-4 transition-all duration-500 font-bold flex justify-center items-center' href='/donation'>{selectedLanguage === "en" ? 'Learn More' : 'გაიგე მეტი'}</Link>
                </div>
                <TermsAndCondtions1 />
            </div>
        </>
    )
}
