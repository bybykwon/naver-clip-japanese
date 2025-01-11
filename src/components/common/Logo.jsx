import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

const Logo = ({ size = 10 }) => {
    return (
        <Image
            alt='Your Company'
            src='/images/pattern/common/logo.png'
            width={120}
            height={120}
            className={classNames('mx-auto w-auto', `h-${size}`, `ml-10`)}
        />
    );
};

export default Logo;
