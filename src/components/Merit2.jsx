import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import Image from 'next/image';

const items = [
    { value: 'a', title: '월간 어워드', text: 'Some value 1...' },
    { value: 'b', title: '라이징 어워드', text: 'Some value 2...' },
    { value: 'c', title: '결산 어워드', text: 'Some value 3...' },
];

const Merit2 = () => {
    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 h-full'>
                    <div>
                        <span className='text-4xl text-green-400 to-blue-500 font-bold px-4 py-2 rounded-lg mt-2'>
                            アワード
                        </span>
                        <p>
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
