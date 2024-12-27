import Link from 'next/link';
import React from 'react';

const LongButton = () => {
    return (
        <div className='w-full h-[85px] bg-green-600 text-black text-center'>
            <Link
                href='#'
                className=''
            >
                応募する
            </Link>
        </div>
    );
};

export default LongButton;
