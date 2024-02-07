"use client";
import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';
import Cookies from 'js-cookie';
import { Footer } from '@/components/shared/Footer';

export default function Contact() {

    const language = Cookies.get("selectedLanguage");

    //Animate on scroll
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="w-full px-[8%] sm:py-[4%] py-[8%] flex sm:gap-0 gap-8 items-center sm:flex-row flex-col">

                <div className='md:w-[25%] lg:px-10'>
                    <img src="/assets/logos/logo3.webp" className='w-full' data-aos="fade-right" />
                </div>

                <div className='md:w-[15%] sm:w-[20%] flex sm:flex-col flex-row justify-center items-center gap-8'>
                    <a target='_blank' href='https://www.instagram.com/youth.society.parzival/'>
                        <img src='/assets/icons/instagram.png' className='w-10 opacity-70' />
                    </a>
                    <a target='_blank' href='https://www.facebook.com/YouthSocietyParzival'>
                        <img src='/assets/icons/facebook.png' className='w-10 opacity-70' />
                    </a>
                    <a target='_blank' href='https://www.tiktok.com/@parzival_society'>
                        <img src='/assets/icons/tiktok.png' className='w-10 opacity-70' />
                    </a>
                    <a target='_blank' href='https://www.youtube.com/@youthsocietyparzival'>
                        <img src='/assets/icons/youtube.png' className='w-10 opacity-70' />
                    </a>

                </div>

                <div className='md:w-[50%] sm:w-[45%] flex flex-col md:px-10 sm-px-5 md:gap-10 gap-5 justify-center text-two-1 md:text-[16px] text-[13px] font-semibold' data-aos="fade-right">
                    <a target='_blank' href='https://maps.app.goo.gl/Ny719NUEmJCe1YTp7' >{language === "en" ? "Address: Georgia, Tetritskaro, Matsevani" : "მისამართი: საქართველო, თეთრიწყარო, მაწევანი"}</a>
                    <a target='_blank' href="mailto:parzivalsociety@gmail.com" >{language === "en" ? "Email: parzivalsociety@gmail.com" : "ფოსტა: parzivalsociety@gmail.com"}</a>
                    <a target='_blank' href=''>{language === "en" ? "Number: +995 595 023 737" : "ნომერი: +995 595 023 737"}</a>
                </div>

                <div className='md:w-[10%] flex justify-center'>
                    <button onClick={scrollToTop} className='w-[50px] h-[50px] border-2 border-gray-400 overflow-hidden rounded-xl p-1'>
                        <img src="/assets/icons/to top.png" className='w-full grayscale' />
                    </button>
                </div>



            </div>

            <Footer />

        </>
    )
}