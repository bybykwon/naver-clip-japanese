import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import Image from 'next/image';

const items = [
    {
        value: 'a',
        title: '月間アワード',
        text: '各チャンネル別のトップ10クリップを再生数に基づいて選定、2位と3位は、5つのカテゴリからそれぞれ１名または2名ずつ選出されます。',
    },
    { value: 'b', title: 'ライジングアワード', text: 'Some value 2...' },
    { value: 'c', title: '決算アワード', text: 'Some value 3...' },
];

const Merit2 = () => {
    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-naver-green via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 h-full '>
                    <div>
                        <span className='text-4xl text-naver-green to-blue-500 font-bold px-4 py-2 rounded-lg mt-2'>
                            アワード
                        </span>
                        <p className=' mt-3 text-xl'>
                            優秀な活動者はもちろん
                            <br />
                            新人活動者まで、
                            <br />
                            全員に受賞のチャンス!
                        </p>
                        <Accordion
                            allowMultiple
                            defaultIndex={[1]}
                        >
                            {items.map((item, index) => (
                                <AccordionItem key={item.value}>
                                    <h2>
                                        <AccordionButton>
                                            <span className='flex-1 text-left font-bold'>{item.title}</span>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>{item.text}</AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Merit2;
