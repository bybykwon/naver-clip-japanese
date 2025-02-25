import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';
import Hero2 from './hero2';
import ListSwiper from '@/components/list/ListSwiper';
import MeritSec from './meritSector';
import Introimagebox from './introimagebox';
import Imagebox1 from './imagebox1';

const Home = () => {
    return (
        <div className='flex flex-col gap-40'>
            <Hero2 />
            <Introimagebox />
            <ListSwiper />
            <Imagebox1 />
            <MeritSec />
            <IntroSwiper />
            {/* <News
                mockNews={mockNews}
                title='뉴스'
            /> */}
        </div>
    );
};

export default Home;
