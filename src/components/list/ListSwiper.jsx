import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const slidesData = [
    {
        src: '/images/components/itembox1/img_info01_v3.gif',
        alt: 'Media1',
        text: '私のクリップコンテンツがネイバーのあちこちに！',
    },
    {
        src: '/images/components/itembox1/img_info02_v5.png',
        alt: 'Media2',
        text: '総額70億！歴史的な規模の補償だから。',
    },
    {
        src: '/images/components/itembox1/img_info03_v2.png',
        alt: 'Media3',
        text: '募集人数なんと5,000人！誰にとっても見逃せないチャンスだから。',
    },
    {
        src: '/images/components/itembox1/img_info04_v2.png',
        alt: 'Media4',
        text: 'リブートプログラム新設！毎月再チャレンジできるから。',
    },
];

export default function ListSwiper() {
    return (
        <div className='container'>
            <div className='bg-black text-white text-center text-3xl'>
                <span></span>
            </div>
            <Swiper
                slidesPerView={1.2}
                spaceBetween={20}
                loop={true}
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
                modules={[Navigation]}
                className='mySwiper'
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className='relative'
                    >
                        {/* 글씨를 슬라이드 상단에 추가 */}
                        <div className='absolute top-0 left-0 w-full bg-black/70 text-white text-center p-2 text-sm rounded-t-lg'>
                            {slide.text}
                        </div>
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
