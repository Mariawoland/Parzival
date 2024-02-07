"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import kaText from '@/public/languages/ka.json';
import enText from '@/public/languages/en.json';
import 'swiper/css';
import '@/styles.css';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Cookies from 'js-cookie';


const ProjectsNavWorkshop = () => {
    const swiperConfig = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        modules: [Autoplay]
    };

    let texts;
    const language = Cookies.get("selectedLanguage");

    if (language === "ka") {
        texts = kaText;
    } else if (language === "en") {
        texts = enText;
    }

    return (
        <>

            <div className='w-full md:flex hidden gap-[10px] justify-center h-[65px] lg:text-base text-sm px-3 text-two-1 hover:text-two-2 font-black'>

                <Link className='bg-workshop-1 p-3 grow rounded-b-2xl h-[50px] hover:h-[65px]  transition-all duration-500 flex justify-center items-end' href='#one'>{texts?.projectNav.workshop[0]}</Link>
                <Link className='bg-workshop-1 p-3 grow rounded-b-2xl h-[50px] hover:h-[65px]  transition-all duration-500 flex justify-center items-end' href='#two'>{texts?.projectNav.workshop[1]}</Link>
                <Link className='bg-workshop-1 p-3 grow rounded-b-2xl h-[50px] hover:h-[65px]  transition-all duration-500 flex justify-center items-end' href='#three'>{texts?.projectNav.workshop[2]}</Link>
                <Link className='bg-workshop-1 p-3 grow rounded-b-2xl h-[50px] hover:h-[65px]  transition-all duration-500 flex justify-center items-end' href='#four'>{texts?.projectNav.workshop[3]}</Link>
                <Link className='bg-workshop-1 p-3 grow rounded-b-2xl h-[50px] hover:h-[65px]  transition-all duration-500 flex justify-center items-end' href='#five'>{texts?.projectNav.workshop[4]}</Link>

            </div>

            <div className='px-3 pb-5 md:hidden flex'>

                <Swiper {...swiperConfig} className="mySwiper text-two-1 text-lg font-bold">
                    <SwiperSlide>
                        <Link className='p-3 w-full bg-workshop-1 rounded-3xl flex justify-center' href='#one'>{texts?.projectNav.workshop[0]}</Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='p-3 w-full bg-workshop-1 rounded-3xl flex justify-center' href='#two'>{texts?.projectNav.workshop[1]}</Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='p-3 w-full bg-workshop-1 rounded-3xl flex justify-center' href='#three'>{texts?.projectNav.workshop[2]}</Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='p-3 w-full bg-workshop-1 rounded-3xl flex justify-center' href='#four'>{texts?.projectNav.workshop[3]}</Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className='p-3 w-full bg-workshop-1 rounded-3xl flex justify-center' href='#five'>{texts?.projectNav.workshop[4]}</Link>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default ProjectsNavWorkshop;
