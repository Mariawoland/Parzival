"use client"

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import enText from '@/public/languages/en.json';
import kaText from '@/public/languages/ka.json';


export function NavItems() {

    const language = Cookies.get("selectedLanguage");

    let lang;

    if (language === "en") {
        lang = enText;
    } else if (language === "ka") {
        lang = kaText;
    }

    const [is1Hovered, setIs1Hovered] = useState(false);
    const [is2Hovered, setIs2Hovered] = useState(false);

    const handle1MouseEnter = () => {
        setIs1Hovered(true);
    };

    const handle1MouseLeave = () => {
        setIs1Hovered(false);
    };

    const handle2MouseEnter = () => {
        setIs2Hovered(true);
    };

    const handle2MouseLeave = () => {
        setIs2Hovered(false);
    };

    return (

        <>

            <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-10 gap-5 lg:p-0 p-4 tracking-wide text-two-1 font-black text-sm">

                <Link
                    className="hover:text-three-1 transition-all duration-300"
                    href={language === "en" ? enText.navbar.navbarListMain[0].href : kaText.navbar.navbarListMain[0].href}
                >
                    {language === "en" ? enText.navbar.navbarListMain[0].title : kaText.navbar.navbarListMain[0].title}
                </Link>

                <div className={`relative text-left`} onMouseEnter={handle1MouseEnter} onMouseLeave={handle1MouseLeave}>

                    <Link
                        className="hover:text-three-1 transition-all duration-300"
                        href={language === "en" ? enText.navbar.navbarListMain[1].href : kaText.navbar.navbarListMain[1].href}
                    >
                        {language === "en" ? enText.navbar.navbarListMain[1].title : kaText.navbar.navbarListMain[1].title}
                    </Link>

                    <ul className={`lg:bg-one-2 rounded-2xl lg:absolute lg:-left-2 relative flex flex-col lg:px-5 lg:py-2 px-0 py-0 lg:my-2 my-0 transition-all  origin-top duration-300 transform shrink-0 items-start ${is1Hovered ? 'scale-y-100 opacity-1 lg:h-[130px] h-[100px]' : 'scale-y-0 h-0 opacity-0'}`}>
                        {lang?.navbar.navbarListOne.map((item) => (
                            <li key={item.id} className="py-2">
                                <Link
                                    className="hover:text-three-1 transition-all duration-300  whitespace-nowrap"
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className={`relative text-left`} onMouseEnter={handle2MouseEnter} onMouseLeave={handle2MouseLeave}>

                    <Link
                        className="hover:text-three-1 transition-all duration-300"
                        href={language === "en" ? enText.navbar.navbarListMain[2].href : kaText.navbar.navbarListMain[2].href}
                    >
                        {language === "en" ? enText.navbar.navbarListMain[2].title : kaText.navbar.navbarListMain[2].title}
                    </Link>

                    <ul className={`lg:bg-one-2 rounded-2xl lg:absolute lg:-left-2 relative flex flex-col lg:px-5 lg:py-2 px-0 py-0 lg:my-2 my-0 transition-all  origin-top duration-300 transform shrink-0 items-start ${is2Hovered ? 'scale-y-100 opacity-1 lg:h-[210px] h-[170px]' : 'scale-y-0 h-0 opacity-0'}`}>
                        {lang?.navbar.navbarListTwo.map((item) => (
                            <li key={item.id} className="py-2">
                                <Link
                                    className="hover:text-three-1 transition-all duration-300  whitespace-nowrap"
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link
                    className="hover:text-three-1 transition-all duration-300"
                    href={language === "en" ? enText.navbar.navbarListMain[3].href : kaText.navbar.navbarListMain[3].href}
                >
                    {language === "en" ? enText.navbar.navbarListMain[3].title : kaText.navbar.navbarListMain[3].title}
                </Link>

                <Link
                    className="hover:text-three-1 transition-all duration-300"
                    href={language === "en" ? enText.navbar.navbarListMain[4].href : kaText.navbar.navbarListMain[4].href}
                >
                    {language === "en" ? enText.navbar.navbarListMain[4].title : kaText.navbar.navbarListMain[4].title}
                </Link>

            </div>
        </>

    )
}