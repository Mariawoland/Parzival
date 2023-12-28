'use client';

import React, { useState, useEffect, useContext } from 'react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { NavItems } from "./NavItems";
import MobileNav from "./MobileNav";
import { LanguageContext } from '@/LanguageContext';


export const Header = () => {

    //Language
    const { currentLanguage, changeLanguage, texts } = useContext(LanguageContext);

    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === 'ka' ? 'en' : 'ka';
        changeLanguage(newLanguage);
    };

    //Navbar hiding while scrolling down and increasing bg opacity while scrolling to the bottom
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolledUp = currentScrollPos < prevScrollPos;

            setVisible(isScrolledUp || currentScrollPos < 100);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`z-[100] fixed inset-0 flex items-center transition-all duration-500 md:px-12 px-4 bg-one-1 h-[80px] ${!visible ? 'translate-y-[-100%]' : 'translate-y-0'}`}>

            <div className="flex items-center justify-between w-full">

                <Link href='/'>
                    <Image src='/assets/logos/Logo1.webp' className='sm:block hidden' width={220} height={60} alt="Parzival Logo" />
                    <Image src='/assets/logos/MLogo1.webp' className='sm:hidden block' width={45} height={50} alt="Parzival Logo" />
                </Link>

                <SignedOut>

                    <nav className={`lg:hidden flex lg:gap-8 gap-5`}>
                        <MobileNav />
                        <button onClick={handleLanguageChange}>
                            <img
                                src={currentLanguage === 'en' ? '/assets/icons/english.png' : '/assets/icons/georgian.png'}
                                width={30}
                                alt={currentLanguage === 'en' ? 'Georgian Flag' : 'English Flag'} />

                        </button>
                    </nav>

                    <nav className="lg:flex hidden lg:gap-8 gap-5">
                        <NavItems />
                        <button onClick={handleLanguageChange}>
                            <img
                                src={currentLanguage === 'en' ? '/assets/icons/english.png' : '/assets/icons/georgian.png'}
                                width={30}
                                alt={currentLanguage === 'en' ? 'Georgian Flag' : 'English Flag'} />

                        </button>
                    </nav>

                </SignedOut>

                <SignedIn>
                    <div className="w-32 flex justify-end gap-3">

                        <UserButton afterSignOutUrl="/" />

                    </div>
                </SignedIn>

            </div>

        </header>
    )
}
