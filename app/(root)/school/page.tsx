"use client";

import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "@/LanguageContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';

export default function School() {

    //Language Changer 
    const { texts } = useContext(LanguageContext);

    const memberMap = texts.about.members;

    //Animate on scroll
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <>

            <></>

            <div id='one' className={`relative min-h-screen md:p-0 p-[8%]`}>

                <img src="/assets/images/school/img1.webp" alt="School Photo"
                    className="md:absolute relative inset-0 h-full w-full object-cover -z-10 md:p-0 p-2 md:flex hidden lg:brightness-50" />

                <div className='md:absolute relative lg:w-1/2 md:w-10/12 md:top-16 md:right-12 w-full md:bg-four-1 z-10 shadow-school rounded-3xl md:p-7 p-2 text-justify text-sm leading-relaxed'>

                    <h1 className='text-start md:text-2xl text-xl pb-3 font-black'>{texts.school.text1[0]}</h1>

                    <p className='mb-3'>{texts.school.text1[1]}</p>
                    <p>{texts.school.text1[2]}</p>
                    <a href='' className='flex justify-center border-2 font-black transition-all duration-300 tracking-wider border-six-1 hover:border-six-2 text-six-1 hover:text-four-1 bg-four-4 hover:bg-six-2 w-full rounded-full mt-4 py-3 text-base'>{texts.school.text1[3]}</a>
                </div>

                <img src="/assets/images/school/img1.webp" alt="School Photo"
                    className="relative h-full w-full object-cover -z-10 p-2 md:hidden flex" />


            </div>

            <div className='md:pt-[8%] px-[8%]' id="two">
                <div className="w-full md:border-4 border-six-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[60%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <img
                            src="/assets/images/school/img2.webp" alt="School Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts.school.text2[0]}</h1>
                        <p className='mb-4'>{texts.school.text2[1]}</p>
                        <p className='mb-4'>{texts.school.text2[2]}</p>
                        <p>{texts.school.text2[3]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <img
                            src="/assets/images/school/img2.webp" alt="School Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <div className='p-[8%]' id="three">
                <div className="w-full md:border-4 border-six-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[45%] w-full float-left relative top-0 right-0 lg:pe-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <img
                            src="/assets/images/school/img3.webp" alt="School Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts.school.text3[0]}</h1>
                        <p className='mb-4 pb-2'>{texts.school.text3[1]}</p>
                        <a href='' className='md:inline flex justify-center border-2 font-black transition-all duration-300 tracking-wide border-six-1 hover:border-six-2 text-six-1 hover:text-four-1 bg-four-4 hover:bg-six-2 py-3 px-5 w-full rounded-full'>{texts.school.text3[3]}</a>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <img
                            src="/assets/images/school/img3.webp" alt="School Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <div className='px-[8%]' id="three">
                <div className="w-full md:border-4 border-six-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[64%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <img
                            src="/assets/images/school/img4.webp" alt="School Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts.school.text4[0]}</h1>
                        <p className='pb-4'>{texts.school.text4[1]}</p>
                        <p className='mb-4 pb-2'>{texts.school.text4[2]}</p>
                        <a href='' className='flex justify-center border-2 font-black transition-all duration-300 tracking-wide border-six-1 hover:border-six-2 text-six-1 hover:text-four-1 bg-four-4 hover:bg-six-2 py-3 px-5 w-full rounded-full'>{texts.school.text4[3]}</a>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <img
                            src="/assets/images/school/img4.webp" alt="School Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

        </>
    )
}