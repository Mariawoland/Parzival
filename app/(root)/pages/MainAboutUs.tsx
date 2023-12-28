'use client';

import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function MainAboutUs() {

    //Language Changer
    const { texts } = useContext(LanguageContext);

    //Animate on scroll
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <div className="w-full p-[8%]">

            <div className="w-full md:border-4 border-three-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                <div data-aos="fade-right" className="lg:w-[64%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                    <img
                        src="/assets/images/main/img2.JPG" alt="About Us Photo"
                        className="w-full rounded-3xl"
                    />

                </div>

                <div data-aos="fade-right" className="text-two-1 text-sm text-justify p-2 leading-relaxed">
                    <h1 className='font-semibold text-3xl mb-7 text-start'>{texts.about_us_main.text1}</h1>
                    <p className='mb-4'>{texts.about_us_main.text2}</p>
                    <p className='mb-4'>{texts.about_us_main.text3}</p>
                    <p className='mb-4'>{texts.about_us_main.text4}</p>
                    <p>{texts.about_us_main.text5}</p>
                </div>

                <div data-aos="fade-right" className="lg:w-[64%] w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                    <img
                        src="/assets/images/main/img2.JPG" alt="About Us Photo"
                        className="w-full rounded-3xl"
                    />

                </div>

            </div>

            <Link href="/about_us" className='ms-auto flex items-center justify-center lg:w-1/3 md:w-1/2 w-full border-4 border-three-1 rounded-full text-three-1 font-semibold md:py-4 py-3 text-lg bg-four-3 hover:bg-four-2 transition-all duration-300'>{texts.about_us_main.text6}</Link>

        </div>
    );
}
