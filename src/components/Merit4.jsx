import Image from 'next/image';

const Merit4 = () => {
    const items = [
        {
            src: '/images/components/itembox2/icon_pr1.png',
            alt: 'naverboost1',
            title: 'NaverPay ポイント',
            subtitle: '10万ウォン',
        },
        {
            src: '/images/components/itembox2/icon_pr2.png',
            alt: 'naverboost2',
            title: 'NaverPay ポイント',
            subtitle: '5万ウォン X 2',
        },
        {
            src: '/images/components/itembox2/icon_pr3.png',
            title: 'NaverPay ポイント',
            alt: 'naverboost3',
            subtitle: '5万ウォン X 2',
        },
    ];

    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-naver-green via-blue-500 to-purple-600 rounded-lg'>
                <div className='flex flex-col gap-6 bg-black rounded-lg p-4'>
                    {' '}
                    <span className='text-4xl text-naver-green to-blue-500 font-bold px-4 py-2 rounded-lg mt-2 text-center'>
                        広告インセンティブ
                    </span>
                    <p className='text-center'>
                        頑張った分だけ成長する収益
                        <br />
                        クリップの再生数が増えれば増えるほど<strong>より多くの報酬</strong>を得ることができます。
                    </p>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-6 bg-gray-900 p-4 rounded-lg'
                        >
                            {/* 이미지 섹션: 왼쪽 */}
                            <div className='flex-shrink-0'>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={150}
                                    height={150}
                                    className='rounded-lg'
                                />
                            </div>

                            {/* 텍스트 섹션: 오른쪽 */}
                            <div className='text-left text-white'>
                                <h2 className='text-2xl font-bold'>{item.title}</h2>
                                <p className='mt-2'>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Merit4;
