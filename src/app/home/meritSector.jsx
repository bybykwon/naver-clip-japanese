import Merit1 from '@/components/Merit';
import Merit from '@/components/Merit';
import Merit2 from '@/components/Merit2';
import Merit3 from '@/components/Merit3';
import Merit4 from '@/components/Merit4';
import { Stack } from '@chakra-ui/react';
import React from 'react';

const cards = [
    {
        imageUrl: '/images/components/itembox2/ticket1.png',
        title: 'Image 1',
    },
    {
        imageUrl: '/images/components/itembox2/ticket2.png',
        title: 'Image 2',
    },
    {
        imageUrl: '/images/components/itembox2/awards_ticket1.png',
        title: 'Image 1',
    },
    {
        imageUrl: '/images/components/itembox2/awards_ticket2.png',
        title: 'Image 2',
    },
    {
        imageUrl: '/images/components/itembox2/awards_ticket3.png',
        title: 'Image 3',
    },
    {
        imageUrl: '/images/components/itembox2/img_insentive.png',
        title: 'Image 3',
    },
    {
        imageUrl: '/images/components/itembox2/icon_pr1.png',
        title: 'Image 1',
    },
    {
        imageUrl: '/images/components/itembox2/icon_pr2.png',
        title: 'Image 2',
    },
    {
        imageUrl: '/images/components/itembox2/icon_pr3.png',
        title: 'Image 3',
    },
];

const MeritSec = () => {
    return (
        <div>
            {' '}
            <Stack>
                <Merit1 h='20' />
                <Merit2 h='20' />
                <Merit3 h='20' />
                <Merit4 h='20' />
            </Stack>
        </div>
    );
};

export default MeritSec;
