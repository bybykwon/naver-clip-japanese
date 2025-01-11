import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';

const slidesData = [
    { src: '/images/components/itembox1/img_info01_v3.gif', alt: 'Media1' },
    { src: '/images/components/itembox1/img_info02_v5.png', alt: 'Media2' },
    { src: '/images/components/itembox1/img_info03_v2.png', alt: 'Media3' },
    { src: '/images/components/itembox1/img_info04_v2.png', alt: 'Media4' },
];

export default function ListSwiper() {
    return (
        <div className='container'>
            <div className='bg-black text-white text-center text-3xl'>
                <span>
                    登る時、
                    <br />
                    まさに今です。
                </span>
            </div>
            <Swiper
                slidesPerView={1.2}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 1.5,
                        autoplay: true,
                    },
                    // md
                    768: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                        },
                    },
                    // lg
                    1024: {
                        slidesPerView: 3,
                    },
                    // xl
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
                className='mySwiper'
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1300}
                            height={1300}
                            className='aspect-[1/1.5] object-cover rounded-lg'
                            priority={true}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Next, Prev 버튼 */}
            <style
                jsx
                global
            >{`
                /* 기본적으로 숨김 */
                .swiper-button-next,
                .swiper-button-prev {
                    display: none;
                }

                /* lg 이상에서만 표시 */
                @media (min-width: 1024px) {
                    .swiper-button-next,
                    .swiper-button-prev {
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
}
