"use client";

import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "@/LanguageContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles.css';

export default function Aboutus() {

    //Language Changer 
    const { texts } = useContext(LanguageContext);

    const memberMap = texts.about.members;

    //Animate on scroll
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <>

        </>
    )
}