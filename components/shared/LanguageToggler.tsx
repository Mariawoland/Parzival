'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LanguageToggler: React.FC = () => {
    const router = useRouter();

    const handleLanguageSelection = (language: string) => {
        Cookies.set('selectedLanguage', language);
        window.location.reload();
    };

    useEffect(() => {
        const selectedLanguage = Cookies.get('selectedLanguage');

        if (!selectedLanguage) {
            Cookies.set('selectedLanguage', 'ka');
        }

    }, []);

    const selectedLanguage = Cookies.get('selectedLanguage');

    return (
        <button className="h-8 w-8" onClick={() =>
            handleLanguageSelection(selectedLanguage === "en" ? "ka" : "en")

        }>
            <img src={selectedLanguage === "en" ? "/assets/icons/english.png" : "/assets/icons/georgian.png"} className='h-full w-full' />
        </button>

    );
};

export default LanguageToggler;
