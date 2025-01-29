import Image from 'next/image';
import React from 'react';

const Imagebox1 = () => {
    return (
        <div className='flex justify-center items-center'>
            <Image
                src='/images/components/sc02_title_mo.png'
                alt='Title'
                width={500}
                height={300}
            />{' '}
        </div>
    );
};

export default Imagebox1;
