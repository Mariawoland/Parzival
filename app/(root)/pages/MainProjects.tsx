import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import '@/styles.css';

export default function MainProjects() {

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

        <>

            <div className="relative w-full px-[8%] pb-[10%] lg:gap-[4%] gap-x-[10%] lg:flex hidden flex-wrap grow-0">

                <div className={`pClass1 w-[15%] h-[230px] top-0 md:mb-0 mb-[7%] relative bg-projects-1 rounded-3xl cursor-pointer`}>

                    <img
                        src="/assets/images/main/img3.jpg"
                        className={`pImage1 opacity-0 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival School"
                    />
                    <Link href={texts.navbar.navbarListTwo[0].href}
                        className={`pLink1 top-12 -left-8 text-one text-3xl  absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[0].title}
                    </Link>
                </div>

                <div className={`pClass2 w-[15%] h-[210px] top-[110px] md:w-[45%]'} relative bg-projects-2 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img4.webp"
                        className={`pImage2 opacity-0 hover:opacity-60 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Seminar"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[1].href}
                        className={`pLink2 top-32 -right-12 text-one text-3xl absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[1].title}
                    </Link>
                </div>

                <div className={`pClass3 w-[19%] h-[160px] top-0 relative bg-projects-3 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img5.jpg"
                        className={`pImage3 opacity-0 hover:opacity-60 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Garden"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[2].href}
                        className={`pLink3 top-8 -left-8 text-one text-3xl  absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[2].title}
                    </Link>
                </div>

                <div className={`pClass4 w-[19%] h-[160px] top-[160px] relative bg-projects-4 rounded-3xl cursor-pointer`}>
                    <img src="/assets/images/main/img6.webp"
                        className={`pImage4 opacity-0 hover:opacity-60 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival workshop"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[3].href}
                        className={`pLink4 top-20 -right-8 text-one text-3xl absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[3].title}
                    </Link>
                </div>

                <div className={`pClass5 w-[16%] h-[220px] top-0 relative bg-projects-5 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img7.jpg"
                        className={`pImage5 opacity-0 hover:opacity-60 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival barn"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[4].href}
                        className={`pLink5 top-12 -left-16 text-one text-3xl absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[4].title}
                    </Link>
                </div>

            </div>

            <div className="relative w-full px-[8%] pb-[10%] lg:gap-[4%] gap-x-[10%] lg:hidden flex flex-wrap grow-0">

                <div className={`md:w-[45%] md:mb-0 mb-[7%] w-full h-[180px] relative bg-projects-1 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img3.jpg"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival School"
                    />
                    <Link href={texts.navbar.navbarListTwo[0].href}
                        className={`top-[60px] w-full text-center text-one text-4xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[0].title}
                    </Link>
                </div>

                <div className={`md:w-[45%] w-full h-[180px] relative bg-projects-2 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img4.webp"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Seminar"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[1].href}
                        className={`top-[60px] w-full text-center text-one text-4xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[1].title}
                    </Link>
                </div>

                <div className={`w-full h-[180px] my-[7%] relative bg-projects-3 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img5.jpg"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival Garden"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[2].href}
                        className={`top-[60px] w-full text-center text-one text-4xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[2].title}
                    </Link>
                </div>

                <div className={`w-full h-[180px] my-[7%] relative bg-projects-4 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img6.webp"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival workshop"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[3].href}
                        className={`top-[60px] w-full text-center text-one text-4xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[3].title}
                    </Link>
                </div>

                <div className={`w-full h-[180px] my-[7%] relative bg-projects-5 rounded-3xl cursor-pointer`}>
                    <img
                        src="/assets/images/main/img7.jpg"
                        className={`opacity-40 absolute inset-0 rounded-3xl h-full w-full object-cover transition-all duration-500`}
                        alt="Pazival barn"
                    />
                    <Link
                        href={texts.navbar.navbarListTwo[4].href}
                        className={`top-[60px] w-full text-center text-one text-4xl hover:scale-125 absolute font-semibold tracking-wider transition-all duration-500 z-50`}
                    >
                        {texts.navbar.navbarListTwo[4].title}
                    </Link>
                </div>

            </div>
        </>

    )
}