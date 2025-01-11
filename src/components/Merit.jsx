import Image from 'next/image';

const Merit1 = () => {
    const items = [
        {
            src: '/images/components/itembox2/ticket1.png',
            title: 'NaverPay ポイント',
            subtitle: '10万ウォン',
        },
        {
            src: '/images/components/itembox2/ticket2.png',
            title: 'NaverPay ポイント',
            subtitle: '5万ウォン X 2',
        },
    ];

    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 items-center'>
                    <div>
                        <span className='text-4xl text-green-400 to-blue-500 font-bold px-4 py-2 rounded-lg mt-2'>
                            活動費
                        </span>
                        <p>
                            全体の活動基準を満たした場合
                            <br />
                            最後の月に<strong>20万ウォン</strong>まで!
                        </p>
                    </div>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='relative w-full max-w-[600px]'
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={600}
                                height={200}
                                className='rounded-lg'
                                style={{ objectFit: 'cover' }}
                            />
                            <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                                <h2 className='text-3xl text-white font-bold px-4 py-2 rounded-lg'>{item.title}</h2>
                                <em className='text-6xl text-white font-bold px-4 py-2 rounded-lg mt-2'>
                                    {item.subtitle}
                                </em>
                            </div>
                        </div>
                    ))}
                    <p>
                        活動基準を満たした
                        <br />
                        <strong>全員に毎月</strong>お支払い!
                    </p>
                    <ul>
                        <li>* 3ヶ月連続基準達成時、その月に5万ウォン追加</li>
                        <li>* 5ヶ月連続基準を満たした場合、最後の月に10万ウォン追加</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Merit1;
