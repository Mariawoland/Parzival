'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import kaText from '@/public/languages/ka.json';
import enText from '@/public/languages/en.json';
import Image from "next/image";

export default function Hero() {

    const selectedLanguage = Cookies.get('selectedLanguage');


    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
    }, []);

    return (
        <>
            <div className="relative w-full h-[90vh] pt-0 px-0 m-0 flex items-center justify-center overflow-x-hidden">

                <Image width={1000} height={700} src='/assets/images/main/img1.png' className="absolute inset-0 w-full h-[90vh] object-cover -z-10" alt={'background image'} />

                <div className='w-full h-full absolute flex -z-10'>

                    <Image width={600} height={200} alt='text' src={selectedLanguage === "en" ? enText.hero.text2[0] : kaText.hero.text2[0]} data-aos="fade-left" className={`absolute ${selectedLanguage === "en" ? "md:w-[30vw] md:left-[35vw] sm:w-[50vw] sm:left-[25vw]" : "md:w-[50vw] md:left-[25vw] sm:w-[60vw] sm:left-[20vw]"} w-[96vw] left-[2vw] top-[4%]`} />

                    <Image width={600} height={200} alt='text' src={selectedLanguage === "en" ? enText.hero.text2[1] : kaText.hero.text2[1]}
                        className={`absolute md:w-[30vw] md:left-[25vw]  sm:w-[50vw] sm:left-[20vw] w-[96vw] left-[2vw] md:top-[22%] top-[18%]`} data-aos="fade-right" />

                    <Image width={600} height={200} alt='text' src={selectedLanguage === "en" ? enText.hero.text2[2] : kaText.hero.text2[2]} className='absolute md:w-[18vw]  sm:w-[30vw] w-[70vw] md:top-[63%] sm:top-[60%] top-[32%] pt-10 md:left-[67vw] sm:left-[65vw] left-[27vw]' data-aos="fade-left" />



                </div>

                <div className='absolute md:w-[30vw] md:left-[35vw] sm:left-[15vw] md:px-[8%] h-full max-w-screen pb-[4%] flex flex-col sm:gap-6 gap-4 md:justify-end justify-end items-center z-50 sm:mb-0 mb-8'>

                    <a target='_blank' className="text-xl sm:h-[70px] h-[55px] w-80 tracking-wider rounded-full border-2 border-konf-1 bg-konf-2 hover:bg-konf-1 text-konf-1 hover:text-konf-2 transition-all duration-500 font-bold flex justify-center items-center" href='https://docs.google.com/forms/d/e/1FAIpQLSdygWtC4UmLEYemZIfUx9bUWFkYv_1otMT7ZAmrFV3okAJsng/viewform'>{selectedLanguage === "en" ? 'Registrate' : 'დარეგისტრირდი'}</a>

                    <a target='_blank' className='text-xl sm:h-[70px] h-[55px] w-80 tracking-wider rounded-full border-2 border-konf-1 bg-konf-2 hover:bg-konf-1 text-konf-1 hover:text-konf-2 transition-all duration-500 font-bold flex justify-center items-center' href='https://drive.google.com/file/d/1PLSoKlcnTmCx2OY32o7d0MzR_jX6E7Yb/view?fbclid=IwZXh0bgNhZW0CMTAAAR3FF8lClhzyZnDct7EtDdPDOb2LGGQyI9XALAdkppgVJDtNIYavU_3l9fQ_aem_AdQgfXg5_sMcgo9Y0LYZUMKFSNBM4egq-wglJgiEWqj6XUIdgXoVnVokzTWejh6c1S1V-TSxuaffYbaDceMYpUXU'>{selectedLanguage === "en" ? 'Learn More Details Here' : 'გაიგე დეტალები აქ'}</a>

                </div>


            </div>

        </>
    )
}