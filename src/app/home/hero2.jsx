import { Image } from '@chakra-ui/next-js';
import { AspectRatio, Heading } from '@chakra-ui/react';
import React from 'react';
import MainGif from './maingif';
import LongButton from './longbutton';

const Hero2 = () => {
    return (
        <div>
            <AspectRatio ratio={2 / 1}>
                <MainGif />
            </AspectRatio>
            <LongButton />
        </div>
    );
};

export default Hero2;
