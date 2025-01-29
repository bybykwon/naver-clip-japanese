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
        text: 'クリップ！私のショット動画が<br /><strong>Naverのあちこちに！</strong>',
    },
    {
        src: '/images/components/itembox1/img_info02_v5.png',
        alt: 'Media2',
        text: '総額<strong>70億！</strong>これまでにない<br /><strong>歴史的な規模</strong>だから。',
    },
    {
        src: '/images/components/itembox1/img_info03_v2.png',
        alt: 'Media3',
        text: 'なんと5,000人募集中！誰にとっても<br /><strong>見逃せないチャンス</strong>だから。',
    },
    {
        src: '/images/components/itembox1/img_info04_v2.png',
        alt: 'Media4',
        text: 'リブートプログラム新設！<br /><strong>毎月再チャレンジできる</strong>から。',
    },
];

export default function ListSwiper() {
    return (
        <div className='container'>
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
                        className='relative rounded-lg border border-gray-800'
                    >
                        {/* 글씨를 슬라이드 상단에 추가 */}
                        <div
                            className='mt-10 absolute top-0 left-0 w-full text-white text-center p-2 text-lg rounded-t-lg z-10'
                            dangerouslySetInnerHTML={{ __html: slide.text }}
                        ></div>
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1300}
                            height={1300}
                            className='bg-[#17151c] relative aspect-[1/1.5] object-cover rounded-lg '
                            priority={true}
                            style={{ zIndex: 1 }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Next, Prev 버튼 */}
            <style
                jsx
                global
            >{`
                .swiper-button-next,
                .swiper-button-prev {
                    display: none;
                }
            `}</style>
        </div>
    );
}
