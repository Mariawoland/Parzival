'use client';

import React, { createContext, useState } from 'react';
import enTexts from '@/constants/en.json';
import kaTexts from '@/constants/ka.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('ka');
    const [texts, setTexts] = useState(kaTexts);

    const changeLanguage = (newLanguage) => {
        setCurrentLanguage(newLanguage);
        if (newLanguage === 'ka') {
            setTexts(kaTexts);
        } else if (newLanguage === 'en') {
            setTexts(enTexts);
        }
    };

    // Ensure to provide correct values through context
    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    );
};