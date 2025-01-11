import React from 'react';
import Image from 'next/image';

const ImageBox = ({ imageUrl, title, subtitle, badgeText }) => {
    return (
        <div className='relative w-full h-[300px] overflow-hidden rounded-lg'>
            {/* 배경 이미지 */}
            <Image
                src={imageUrl}
                alt={title}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
            />

            {/* 오른쪽 위 작은 동그라미 */}
            <div className='absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs'>
                {badgeText}
            </div>

            {/* 이미지 위 글자 박스 */}
            <div className='absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 text-white p-4 rounded-lg'>
                <h3 className='text-lg font-bold line-clamp-1'>{title}</h3>
                <p className='text-sm line-clamp-2'>{subtitle}</p>
            </div>
        </div>
    );
};

export default ImageBox;
