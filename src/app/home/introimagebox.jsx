import Image from 'next/image';
import React from 'react';

const Introimagebox = () => {
    return (
        <div className='flex justify-center items-center'>
            <Image
                src='/images/components/sc01_title_mo1.png'
                alt='Title'
                width={500}
                height={300}
            />{' '}
        </div>
    );
};

export default Introimagebox;
