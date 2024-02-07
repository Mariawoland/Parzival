'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import '@/styles.css';
import Cookies from 'js-cookie';

export default function MainProjects() {

    const language = Cookies.get('selectedLanguage');

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (

        <>

            <div className="relative w-full px-[8%] pb-[10%] lg:gap-[4%] gap-x-[10%] lg:flex hidden flex-wrap grow-0 text-two-2">

                <div className={`pClass1 w-[15%] h-[230px] top-0 md:mb-0 mb-[7%] relative bg-projects-1 rounded-3xl cursor-pointer`}>

                    <img
                        src="/assets/images/main/img3.jpg"
                        className={`pImage1 opacity-0 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival School"
                    />
                    <Link href='/school'
                        className={`pLink1 top-12 -left-8 text-one text-3xl  absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'School' : 'სკოლა'}</Link>
                </div>

                <div className={`pClass2 w-[15%] h-[210px] top-[110px] md:w-[45%]'} relative bg-projects-2 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img4.webp"
                        className={`pImage2 opacity-0 hover:opacity-60 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Seminar"
                    />
                    <Link
                        href='/seminar'
                        className={`pLink2 top-32 -right-12 text-one text-3xl absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Seminar' : 'სემინარი'}</Link>
                </div>

                <div className={`pClass3 w-[19%] h-[160px] top-0 relative bg-projects-3 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img5.jpg"
                        className={`pImage3 opacity-0 hover:opacity-60 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Garden"
                    />
                    <Link
                        href='/garden'
                        className={`pLink3 top-8 -left-8 text-one text-3xl  absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Garden' : 'ბაღი'}</Link>
                </div>

                <div className={`pClass4 w-[19%] h-[160px] top-[160px] relative bg-projects-4 rounded-3xl cursor-pointer`}>
                    <img src="/assets/images/main/img6.png"
                        className={`pImage4 opacity-0 hover:opacity-60 object-cover object-left absolute inset-0 rounded-3xl h-full w-full  transition-all duration-500`}
                        alt="Pazival workshop"
                    />
                    <Link
                        href='/workshop'
                        className={`pLink4 top-20 -right-8 text-one text-3xl absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Workshop' : 'სახელოსნო'}</Link>
                </div>

                <div className={`pClass5 w-[16%] h-[220px] top-0 relative bg-projects-5 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img7.jpg"
                        className={`pImage5 opacity-0 hover:opacity-60 absolute inset-0 rounded-3xl h-full w-full object-cover object-left transition-all duration-500`}
                        alt="Pazival barn"
                    />
                    <Link
                        href='/ridetherapy'
                        className={`pLink5 top-12 -left-16 text-one text-3xl absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Ride Therapy' : 'რაიდთერაპია'}</Link>
                </div>

            </div>

            <div className="relative w-full px-[8%] pb-[10%] lg:gap-[4%] gap-x-[10%] lg:hidden flex flex-wrap grow-0">

                <div className={`md:w-[45%] md:mb-0 mb-[7%] w-full h-[180px] relative bg-projects-1 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img3.jpg"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival School"
                    />
                    <Link href='/school'
                        className={`top-[60px] w-full text-center text-one text-3xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'School' : 'სკოლა'}</Link>
                </div>

                <div className={`md:w-[45%] w-full h-[180px] relative bg-projects-2 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img4.webp"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Seminar"
                    />
                    <Link
                        href='/seminar'
                        className={`top-[60px] w-full text-center text-one text-3xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Seminar' : 'სემინარი'}</Link>
                </div>

                <div className={`w-full h-[180px] my-[7%] relative bg-projects-3 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img5.jpg"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Garden"
                    />
                    <Link
                        href='/garden'
                        className={`top-[60px] w-full text-center text-one text-3xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Garden' : 'ბაღი'}</Link>
                </div>

                <div className={`w-full h-[180px] my-[7%] relative bg-projects-4 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img6.png"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover object-left transition-all duration-500`}
                        alt="Pazival workshop"
                    />
                    <Link
                        href='/workshop'
                        className={`top-[60px] w-full text-center text-one text-3xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Workshop' : 'სახელოსნო'}</Link>
                </div>

                <div className={`w-full h-[180px] my-[7%] relative bg-projects-5 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img7.jpg"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover object-left transition-all duration-500`}
                        alt="Pazival barn"
                    />
                    <Link
                        href='/ridetherapy'
                        className={`top-[60px] w-full text-center text-one text-3xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >{language === "en" ? 'Ride Therapy' : 'რაიდთერაპია'}</Link>
                </div>

            </div>
        </>

    )
}