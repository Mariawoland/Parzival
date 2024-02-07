"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

interface SwiperProps {
    photos: string[];
}

const Gallery: React.FC<SwiperProps> = ({ photos }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index: number) => setCurrentSlide(index),
    };

    return (
        <div className='w-full sm:overflow-visible overflow-hidden'>
            <Slider {...settings}>
                {photos.map((image, index) => (
                    <div key={index}>
                        <Image width={1000} height={600} src={image}
                            className='w-full aspect-video object-cover rounded-3xl' alt={`slide-${index}`} />
                    </div>
                ))}
            </Slider>

            <div className='flex flex-nowrap overflow-hidden' style={{ textAlign: 'center' }}>
                {photos.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexShrink: 0,
                            padding: '0 5px',
                            cursor: 'pointer',
                            width: "25%",
                            opacity: index === currentSlide ? 1 : 0.6,
                        }}
                        onClick={() => setCurrentSlide(index)}
                    >
                        <img
                            src={image}
                            alt={`thumbnail-${index}`}
                            className='w-full aspect-video object-cover rounded-2xl'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
