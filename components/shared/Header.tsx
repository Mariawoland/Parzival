'use client';

import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { NavItems } from "./NavItems";
import MobileNav from "./MobileNav";
import LanguageToggler from './LanguageToggler';
import MyCart from './MyCart';


export const Header = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
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
        <header className={`z-[100] fixed inset-0 flex items-center transition-all duration-500 md:px-12 px-4 h-[80px]
        ${window.location.pathname === "/shop" || "/products/:id" ? 'bg-one-7' : 'bg-one-1'}
         ${!visible ? 'translate-y-[-100%]' : 'translate-y-0'}`}>

            <div className="flex items-center justify-between w-full">

                <Link href='/'>
                    <img
                        src={window.location.pathname === "/shop" ? '/assets/logos/logo2.png' : '/assets/logos/Logo1.webp'}
                        className={`${window.location.pathname === "/shop" ? 'h-[60px] w-[180px] opacity-75' : 'h-[60px] w-64'} sm:block hidden`}
                        alt="Parzival Logo"
                    />

                    <img src={window.location.pathname === "/shop" ? '/assets/logos/MLogo2.png' : '/assets/logos/MLogo1.webp'}
                        className={`${window.location.pathname === "/shop" ? 'opacity-75 h-14 w-14' : 'h-14 w-12'} sm:hidden block`} alt="Parzival Logo" />

                </Link>

                <SignedOut>

                    <nav className={`lg:hidden flex justify-end items-center gap-5`}>
                        <MobileNav />
                        {window.location.pathname === "/shop" ? <MyCart /> : ''}
                        <LanguageToggler />

                    </nav>

                    <nav className="lg:flex justify-between items-center hidden gap-7">
                        <NavItems />
                        <div className='flex items-center gap-5'>
                            <LanguageToggler />
                            {window.location.pathname === "/shop" ? <MyCart /> : ''}
                        </div>
                    </nav>

                </SignedOut>

                <SignedIn>
                    <div className="w-32 flex justify-end gap-3">

                        <UserButton afterSignOutUrl="/" />

                        <LanguageToggler />

                    </div>
                </SignedIn>

            </div>

        </header>
    )
}
