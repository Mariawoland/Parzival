'use client';

import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '@/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';
import Link from 'next/link';
import { TermsAndCondtions1 } from '@/components/shared/TermsAndCondtions';

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
            <div className="relative max-w-screen h-[88vh] pt-0 px-0 m-0 flex items-center justify-center">

                <img src='/assets/images/main/img1.png' className="absolute inset-0 w-full h-[88vh] object-cover -z-10 brightness-50" />

                <div data-aos="fade-right" className="sm:p-[8%] py-[15%] px-[10%] z-10 min-h-full flex flex-col justify-between items-center text-center text-white">

                    <div>
                        <h1 className='md:text-4xl sm:text-2xl text-xl md:leading-loose leading-relaxed tracking-widest pb-2'>{texts.hero.text1}</h1>

                        <h1 className='md:text-base sm:text-sm text-xs leading-relaxed tracking-wider pb-4'>{texts.hero.text2}</h1>
                    </div>

                    <div className='flex md:flex-row flex-col sm:gap-5 gap-3'>

                        <a className='sm:text-lg text-sm h-[55px] md:w-96 w-[270px] tracking-wider rounded-full border-2 p-3 border-three-1 hover:border-four-1 bg-four-2 hover:bg-three-2 text-three-1 hover:text-four-1 transition-all duration-500 font-bold' href='https://parzivalknight.ge/ge'>{texts.hero.text3}</a>

                        <Link className='sm:text-lg text-sm h-[55px] md:w-96 w-[270px] tracking-wider rounded-full border-2 p-3 border-three-1 hover:border-four-1 bg-four-2 hover:bg-three-2 text-three-1 hover:text-four-1 transition-all duration-500 font-bold' href='/donation'>{texts.hero.text4}</Link>

                        <TermsAndCondtions1 />
                    </div>



                </div>
            </div>

        </>
    )
}