"use client";

import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';
import Cookies from 'js-cookie';
import enText from '@/public/languages/en.json';
import kaText from '@/public/languages/ka.json';
import { Footer } from '@/components/shared/Footer';
import Image from "next/image";

export default function Aboutus() {

    const language = Cookies.get("selectedLanguage");

    let lang;

    if (language === "ka") {
        lang = kaText;
    } else if (language === "en") {
        lang = enText;
    }

    const memberMap = lang?.about.members;

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <>

            <div id='one' className={`relative lg:min-h-[80vh] md:min-h-screen`}>

                <img src="/assets/images/about/img1.png" alt="About Us Photo"
                    className="md:absolute top-0 relative inset-0 lg:w-1/2 w-full object-cover -z-10 md:p-0" />

                <div className='relative lg:w-1/2 md:w-10/12 md:top-8 lg:me-[8%] m-auto lg:float-right w-full md:bg-four-1 z-10 shadow-about rounded-3xl p-7 text-justify text-[13px] leading-relaxed'>

                    <h1 className='text-start lg:text-3xl md:text-2xl text-xl pb-3 font-black'>{lang?.about.text[0]}</h1>

                    <p className='mb-3'>{lang?.about.text[1]}</p>
                    <p className='mb-3'>{lang?.about.text[2]}</p>
                    <p>{lang?.about.text[3]}</p>
                </div>


            </div>

            <div id='two' className={`p-[7%]`}>

                <div className={`md:bg-four-3 md:p-7 rounded-3xl border-three-1 md:border-4 w-full flex md:flex-row flex-col justify-between gap-7 text-one transition-all origin-top duration-300`}>

                    <iframe src={lang?.about.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='border-0 md:w-1/2 w-full h-80 rounded-3xl overflow-hidden object-cover'></iframe>

                    <div className="md:p-2 text-one text-justify text-sm md:w-1/2 w-full">
                        <h1 className='lg:text-3xl md:text-2xl text-xl text-end font-black pb-8'>{lang?.about.text[4]}</h1>
                        <p className='mb-3'>{lang?.about.text[5]}</p>
                        <p className='mb-3'>{lang?.about.text[6]}</p>
                        <p>{lang?.about.text[7]}</p>
                    </div>
                </div>


            </div>

            <div id='three' className={`p-[7%] w-full`}>

                <div className={`text-one text-center w-full text-sm`}>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-black pb-5'>{memberMap?.title}</h1>
                    <p>{memberMap?.description}</p>
                </div>

                <div className={`scale-y-100 opacity-100  transition-all origin-top duration-300`}>



                    <div className='w-full flex flex-wrap gap-[3.5%]'>

                        {memberMap?.member.map((item, index) => {
                            return (

                                <div key={index} className='lg:w-[31%] md:w-[46.5%] w-[100%] py-5'>

                                    <div className='w-full relative rounded-3xl overflow-hidden aspect-square bg-white flex items-center'>

                                        <img className='w-full hover:opacity-50 hover:blur-xl absolute top-0 left-0 transition-all duration-300' src={item.image} />

                                        <p className='text-[14.6px] text-one font-semibold text-justify px-5'>{item.description}</p>

                                    </div>
                                    <h2 className='text-one font-semibold text-xl text-center py-3'>{item.name}</h2>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>


            <Footer />

        </>
    )
}
