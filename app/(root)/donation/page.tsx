"use client";
import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '@/LanguageContext';
import Swiper from 'swiper';
import { Pagination, Mousewheel, FreeMode, EffectCreative, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';
import "@/styles.css";
import { TermsAndCondtions2 } from '@/components/shared/TermsAndCondtions';

const Page = () => {

    //Language Changer
    const { texts } = useContext(LanguageContext);

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            direction: 'vertical',
            modules: [Pagination, Mousewheel, FreeMode, EffectCreative, Keyboard],
            mousewheel: {
                invert: false,
            },
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'creative',
            creativeEffect: {
                prev: {
                    translate: [0, 0, -1],
                },
                next: {
                    translate: [0, '100%', 0],
                }
            },
            keyboard: {
                enabled: true
            },
        });
    }, []);

    return (
        <div className="swiper h-[81vh]">
            <div className="swiper-wrapper">

                <div className="swiper-slide p-[7%]">

                    <div className='w-full h-full flex flex-col justify-center items-center text-center text-two-1'>

                        <p className='md:text-3xl leading-relaxed sm:text-base text-sm font-bold sm:pb-6 pb-4'>{texts.donation.slide1[0]}</p>
                        <p className='md:text-sm sm:text-xs text-[10px] md:pb-5 pb-3'>{texts.donation.slide1[1]}</p>
                        <p className='md:text-sm sm:text-xs text-[10px] md:pb-5 pb-3'>{texts.donation.slide1[2]}</p>
                        <p className='md:text-sm sm:text-xs text-[10px] md:pb-5 pb-3'>{texts.donation.slide1[3]}</p>
                        <p className='md:text-sm sm:text-xs text-[10px] md:pb-5 pb-3 '>{texts.donation.slide1[4]}</p>

                        <div className='w-full flex lg:flex-row flex-col sm:gap-5 gap-3 justify-center items-center pt-3'>

                            <a className='sm:text-lg text-sm md:w-96 w-[270px] tracking-wider rounded-full border-0 p-3 bg-three-3 text-four-1 transition-all duration-500 font-bold' href='https://parzivalknight.ge/ge'>{texts.hero.text3}</a>

                            <TermsAndCondtions2 />

                        </div>
                    </div>


                </div>

                <div className="swiper-slide sm:p-[4%] p-[5.5%]">

                    <div className='w-full h-full rounded-3xl bg-three-4 sm:p-9 p-5 flex lg:flex-row flex-col sm:gap-9 gap-4'>
                        <div className='lg:w-1/2 w-full text-two-1 text-justify'>
                            <p className='sm:text-xl text-base text-start font-bold sm:pb-4 pb-3'>{texts.donation.slide2[0]}</p>
                            <p className='sm:text-sm text-[10px] sm:pb-4 pb-2'>{texts.donation.slide2[1]}</p>
                            <p className='sm:text-sm text-[10px]'>{texts.donation.slide2[2]}</p>
                        </div>
                        <div className='lg:w-1/2 w-full h-full'>
                            <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/jQw8fMvep5c?si=fvnJ-g2jgraZLLzk"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>

                </div>

                <div className="swiper-slide sm:p-[4%] p-[5.5%]">
                    <div className='w-full h-full rounded-3xl bg-three-4 p-9 flex lg:flex-row flex-col gap-9'>
                        <div className='lg:w-1/2 h-full w-full'>
                            <img src='/assets/images/donation/img1.jpg' className='w-full h-full object-cover' />
                        </div>
                        <div className='lg:w-1/2 w-full text-two-1 text-justify'>
                            <p className='sm:text-sm text-[10px] sm:pb-4 pb-2'>{texts.donation.slide3[0]}</p>
                            <p className='sm:text-sm text-[10px]'>{texts.donation.slide3[1]}</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide sm:p-[4%] p-[5.5%]">
                    <div className='w-full h-full flex lg:flex-row flex-col'>

                        <div className='lg:w-1/2 w-full'></div>
                        <div className='lg:w-1/2 w-full h-full rounded-3xl bg-three-4 p-9'>
                            <img src='/assets/images/donation/img2.jpg' className='w-full h-full object-cover' />
                        </div>

                    </div>
                </div>
                <div className="swiper-slide sm:p-[4%] p-[5.5%]">
                    <div className='w-full h-full flex lg:flex-row flex-col'>

                        <div className='lg:w-1/2 w-full h-full rounded-3xl bg-three-4 p-9'>
                            <img src='/assets/images/donation/img3.jpg' className='w-full h-full object-cover object-center' />
                        </div>

                        <div className='lg:w-1/2 w-full'></div>
                    </div>
                </div>
                <div className="swiper-slide sm:p-[4%] p-[5.5%]">
                    <div className='w-full h-full flex lg:flex-row flex-col'>

                        <div className='lg:w-1/2 w-full'></div>
                        <div className='lg:w-1/2 w-full h-full rounded-3xl bg-three-4 p-9'>
                            <img src='/assets/images/donation/img4.jpg' className='w-full h-full object-cover object-center' />
                        </div>

                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-scrollbar"></div>
        </div>
    );
};

export default Page;