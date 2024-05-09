"use client";
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import AOS from 'aos';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';
import "@/styles.css";
import Cookies from 'js-cookie';
import { TermsAndCondtions1, TermsAndCondtions2 } from '@/components/shared/TermsAndCondtions';
import enText from '@/public/languages/en.json';
import kaText from '@/public/languages/ka.json';
import Link from 'next/link';
import Image from "next/image";

const Page = () => {

    const [scrollOpacity, setScrollOpacity] = useState(0.2);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const remainingHeight = documentHeight - (currentScrollPos + windowHeight);

            if (remainingHeight <= 300 && remainingHeight >= 0) {
                let opacityIncrement = (300 - remainingHeight) / 300;
                opacityIncrement = Math.min(opacityIncrement, 1);
                setScrollOpacity(0.2 + opacityIncrement * 0.8);
            } else {
                setScrollOpacity(0.2);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const language = Cookies.get("selectedLanguage");

    let texts;

    if (language === "ka") {
        texts = kaText;
    } else if (language === "en") {
        texts = enText;
    }
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
    }, []);


    return (
        <div>

            <Image width={1000} height={600} alt="photo" className="fixed inset-0 w-full h-screen -z-[100] object-cover" style={{ opacity: scrollOpacity, transition: 'opacity 0.3s ease' }} src={'/assets/images/donation/img1.png'} />

            <div className='w-full px-[6%] py-[3%]'>
                <div className='w-full p-[6%] text-center text-two-2 md:text-sm sm:text-xs text-[10px] leading-relaxed md:border-4 border-seven-4 rounded-3xl'>

                    <p className='md:text-3xl sm:text-base text-sm font-bold sm:pb-6 pb-4'>{texts?.donation.slide1[0]}</p>
                    <p className='md:pb-5 pb-3'>{texts?.donation.slide1[1]}</p>
                    <p className='md:pb-5 pb-3'>{texts?.donation.slide1[2]}</p>
                    <p className='md:pb-5 pb-3'>{texts?.donation.slide1[3]}</p>
                    <p className='md:pb-5 pb-3 '>{texts?.donation.slide1[4]}</p>

                    <div className='w-full flex lg:flex-row flex-col sm:gap-5 gap-3 justify-center items-center pt-3'>

                        <a className='sm:text-lg text-sm md:w-96 w-[270px] tracking-wider rounded-full border border-seven-4 p-3 bg-seven-1 text-seven-4 transition-all duration-500 font-bold' href='https://parzivalknight.ge/ge'>{texts?.hero.text3}</a>

                        <TermsAndCondtions2 />

                    </div>

                </div>
            </div>

            <div className='w-full px-[6%] py-[3%]'>
                <div className='w-full p-[6%] text-center text-two-2 md:text-sm sm:text-xs text-[10px] leading-relaxed md:border-4 border-seven-4 rounded-3xl flex md:flex-row flex-col gap-8'>

                    <div className='md:w-1/2 w-full text-justify'>
                        <p className='sm:text-xl text-base text-start font-bold sm:pb-4 pb-3'>{texts?.donation.slide2[0]}</p>
                        <p className='sm:text-sm text-[10px] sm:pb-4 pb-2'>{texts?.donation.slide2[1]}</p>
                        <p className='sm:text-sm text-[10px]'>{texts?.donation.slide2[2]}</p>
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/jQw8fMvep5c?si=fvnJ-g2jgraZLLzk"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>


                </div>
            </div>

            <div className='w-full px-[6%] py-[3%]'>
                <div className='w-full p-[6%] text-center text-two-2 md:text-sm sm:text-xs text-[10px] leading-relaxed md:border-4 border-seven-4 rounded-3xl flex md:flex-row flex-col gap-8'>

                    <div className='md:w-1/2 w-full text-justify'>
                        <img src='/assets/images/donation/img1.jpg' className='w-full h-full object-cover' />
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <p className='sm:text-sm text-[10px] sm:pb-4 pb-2'>{texts?.donation.slide3[0]}</p>
                        <p className='sm:text-sm text-[10px]'>{texts?.donation.slide3[1]}</p>
                    </div>


                </div>
            </div>

            <div className='px-[6%] pt-[3%] lg:pb-[6%] md:pb-[18%]  pb-[25%] flex md:flex-row flex-col'>

                <img src='/assets/images/donation/img2.jpg' className='md:w-1/3 w-full aspect-square object-cover p-2' />

                <img src='/assets/images/donation/img3.jpg' className='md:w-1/3 w-full aspect-square object-cover p-2' />

                <img src='/assets/images/donation/img4.jpg' className='md:w-1/3 w-full aspect-square object-cover p-2' />

            </div>

            <>
                <div className="relative max-w-screen h-[88vh] pt-0 px-0 m-0 flex items-center justify-center">

                    <div className='w-full h-full absolute -z-10'>
                        <img src={texts?.hero.text2[0]} data-aos="fade-left" className='absolute md:w-[42vw] w-[85vw] top-[8%] md:left-[8%] left-[5vw]' />

                        <img src={texts?.hero.text2[1]} className='absolute md:w-[55vw] w-[85vw] top-[26%] md:left-[38vw] left-[5vw]' data-aos="fade-right" />

                        <img src={texts?.hero.text2[2]} className='absolute md:w-[55vw] w-[85vw] top-[50%] lg:left-[23%] md:left-[18%] left-[5vw]' data-aos="fade-left" />
                    </div>


                    <div className='w-full px-[8%] pb-[80px] flex items-end justify-center h-full'>

                        <a className='sm:text-lg text-sm md:h-[60px] h-[50px] lg:w-96 w-full tracking-wider rounded-full border-2 p-3 border-seven-4 bg-seven-2 hover:bg-seven-1 text-seven-4 transition-all duration-500 font-bold flex justify-center items-center' href='https://parzivalknight.ge/ge'>{language === "ka" ? 'გახდი პარსიფალის რაინდი' : 'Become Parzival`s Knight'}</a>


                    </div>

                    <TermsAndCondtions1 />


                </div>


            </>

        </div>
    );
};

export default Page;
