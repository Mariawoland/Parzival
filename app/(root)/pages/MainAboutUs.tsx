'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import enText from '@/public/languages/en.json';
import kaText from '@/public/languages/ka.json';

export default function MainAboutUs() {

    const language = Cookies.get('selectedLanguage');

    //Animate on scroll
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <div className="w-full p-[7%]">

            <div className="w-full md:border-4 border-three-1  rounded-3xl md:overflow-hidden md:p-10 p-5 md:bg-four-3 flex lg:flex-row flex-col gap-8">

                <div data-aos="fade-right" className="lg:w-[44%] w-full text-two-1 text-[13px] text-justify p-2 leading-relaxed lg:hidden block">
                    <h1 className='font-semibold text-3xl mb-7 text-start'>{language === "en" ? enText.about_us_main[0] : kaText.about_us_main[0]}</h1>
                    <p className='mb-4'>{language === "en" ? enText.about_us_main[1] : kaText.about_us_main[1]}</p>
                    <p className='mb-4'>{language === "en" ? enText.about_us_main[2] : kaText.about_us_main[2]}</p>
                    <p className='mb-4'>{language === "en" ? enText.about_us_main[3] : kaText.about_us_main[3]}</p>
                    <p>{language === "en" ? enText.about_us_main[4] : kaText.about_us_main[4]}</p>
                    <Link href="/about_us" className='flex items-center justify-center lg:w-1/3 md:w-1/2 w-full border-4 border-three-1  rounded-full text-three-1  font-semibold py-3 text-lg bg-four-3 hover:bg-four-2 transition-all duration-300 mt-4'>{language === "en" ? enText.about_us_main[5] : kaText.about_us_main[5]}</Link>
                </div>

                <div data-aos="fade-right" className="lg:w-[56%] w-full relative">

                    <img
                        src="/assets/images/main/img9.JPG" alt="About Us Photo"
                        className="w-full h-full rounded-3xl  object-cover"
                    />

                    <img
                        src="/assets/images/main/img2.JPG" alt="About Us Photo"
                        className="w-full h-full rounded-3xl absolute inset-0 object-cover hover:opacity-0 transition-all duration-300"
                    />

                </div>

                <div data-aos="fade-right" className="lg:w-[44%] w-full text-two-1 text-[13px] text-justify p-2 leading-relaxed  lg:block hidden">
                    <h1 className='font-semibold text-3xl mb-7 text-start'>{language === "en" ? enText.about_us_main[0] : kaText.about_us_main[0]}</h1>
                    <p className='mb-4'>{language === "en" ? enText.about_us_main[1] : kaText.about_us_main[1]}</p>
                    <p className='mb-4'>{language === "en" ? enText.about_us_main[2] : kaText.about_us_main[2]}</p>
                    <p className='mb-4'>{language === "en" ? enText.about_us_main[3] : kaText.about_us_main[3]}</p>
                    <p>{language === "en" ? enText.about_us_main[4] : kaText.about_us_main[4]}</p>
                    <Link href="/about_us" className='flex items-center justify-center w-full border-4 border-three-1  rounded-full text-three-1  font-semibold py-3 text-lg bg-four-3 hover:bg-four-2 transition-all duration-300 mt-4'>{language === "en" ? enText.about_us_main[5] : kaText.about_us_main[5]}</Link>
                </div>


            </div>


        </div>
    );
}
