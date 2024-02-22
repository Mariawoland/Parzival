"use client";
import React, { useRef, useState, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '@/styles/carousel.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface CarouselProp {
    Images: string[];
}

const Carousel: FC<CarouselProp> = ({ Images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {Images.map((image, index) =>
                    <SwiperSlide key={index}>
                        <img src={image} />
                    </SwiperSlide>
                )}

            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {Images.map((image, index) =>
                    <SwiperSlide key={index}>
                        <img src={image} />
                    </SwiperSlide>
                )}

            </Swiper>
        </>
    );
}

export default Carousel;