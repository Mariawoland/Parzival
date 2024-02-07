"use client";
import React, { useEffect, useState } from 'react';
import '@/styles.css';

export default function ForeverBackground() {

    const [scrollOpacity, setScrollOpacity] = useState(0.5);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const remainingHeight = documentHeight - (currentScrollPos + windowHeight);

            if (remainingHeight <= 200 && remainingHeight >= 0) {
                let opacityIncrement = (200 - remainingHeight) / 200;
                opacityIncrement = Math.min(opacityIncrement, 1);
                setScrollOpacity(0.5 + opacityIncrement * 0.5);
            } else {
                setScrollOpacity(0.5);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`forverbackground ${window.location.pathname === '/donation' ? "hidden" : ""}`} style={{ opacity: scrollOpacity, transition: 'opacity 0.3s ease' }}></div>
    )
};