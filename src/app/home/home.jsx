import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';
import Hero2 from './hero2';
import ListSwiper from '@/components/list/ListSwiper';
import MeritSec from './meritSector';

const Home = () => {
    return (
        <div className='flex flex-col gap-40'>
            <Hero2 />
            <ListSwiper />
            <MeritSec />
            <IntroSwiper />
            <News
                mockNews={mockNews}
                title='뉴스'
            />
        </div>
    );
};

export default Home;
