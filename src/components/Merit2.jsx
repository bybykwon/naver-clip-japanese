import React from 'react';
import Image from 'next/image';
import CustomAccordion from './CustomAccordion'; // 경로를 프로젝트 구조에 맞게 조정하세요.

const items = [
    {
        value: 'a',
        title: '月間アワード',
        text: '各チャンネル別のトップ10クリップを再生数に基づいて選定! 2位と3位は、5つのカテゴリからそれぞれ１名または2名ずつ選出されます。',
    },
    {
        value: 'b',
        title: 'ライジングアワード',
        text: '今月アップロードされたクリップの再生数が前月比で最も高い成長率のランキング順に、前月の活動基準を満たしたクリエイターを対象に支給を予定しています。',
    },
    {
        value: 'c',
        title: '決算アワード',
        text: '全活動期間終了後に選定します。各チャンネル別トップ10クリップの総再生数',
    },
];

const Merit2 = () => {
    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-naver-green via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 h-full'>
                    <div>
                        <span className='text-4xl font-bold px-4 py-2 rounded-lg mt-2 bg-gradient-to-r from-naver-green to-blue-500 text-transparent bg-clip-text'>
                            アワード
                        </span>
                        <p className='mt-3 text-xl'>
                            優秀な活動者はもちろん
                            <br />
                            新人活動者まで、
                            <br />
                            全員に受賞のチャンス!
                        </p>
                        <CustomAccordion
                            items={items}
                            defaultIndex={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Merit2;
