import Link from 'next/link';
import React from 'react';

const LongButton = () => {
    return (
        <div className='mt-20 w-full h-[85px] bg-naver-green text-black flex items-center justify-center'>
            <Link
                href='#'
                className='text-black text-2xl font-bold'
            >
                応募する
            </Link>
        </div>
    );
};

export default LongButton;
