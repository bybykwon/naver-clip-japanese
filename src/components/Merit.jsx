import Image from 'next/image';

const Merit1 = () => {
    const items = [
        {
            src: '/images/components/itembox2/ticket1.png',
            alt: 'ticket1',
            title: 'NaverPay ポイント',
            subtitle: '10万ウォン',
        },
        {
            src: '/images/components/itembox2/ticket2.png',
            alt: 'ticket2',
            title: 'NaverPay ポイント',
            subtitle: '5万ウォン X 2',
        },
    ];

    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-naver-green via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 items-center'>
                    {/* 상단 텍스트 영역 */}
                    <div>
                        <span className='text-4xl font-bold px-4 py-2 rounded-lg mt-2 bg-gradient-to-r from-naver-green to-blue-500 text-transparent bg-clip-text'>
                            活動費
                        </span>
                        <p className='mt-3 text-xl'>
                            全体の活動基準を満たした場合
                            <br />
                            最後の月に<strong className='text-naver-green'>20万ウォン</strong>まで!
                        </p>
                    </div>

                    {/*
                        이미지(티켓)들을 감싸는 컨테이너를
                        grid로 만들고, 1280px 이상에서 2열로 전환
                    */}
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className='relative w-full max-w-[300px] mx-auto'
                                // mx-auto: 가운데 정렬(여백)
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={300}
                                    height={200}
                                    className='rounded-lg object-cover'
                                />
                                <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                                    <h2 className='text-2xl text-white font-bold px-4 py-2 rounded-lg'>{item.title}</h2>
                                    <em className='text-4xl text-white font-bold px-4 py-2 rounded-lg mt-2'>
                                        {item.subtitle}
                                    </em>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 하단 텍스트 영역 */}
                    <p className='mt-3 text-xl'>
                        活動基準を満たした
                        <br />
                        <strong className='text-naver-green'>全員に毎月</strong>お支払い!
                    </p>
                    <ul>
                        <li className='text-naver-green'>* 3ヶ月連続基準達成時、その月に5万ウォン追加</li>
                        <li className='text-naver-green'>* 5ヶ月連続基準を満たした場合、最後の月に10万ウォン追加</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Merit1;
