import Image from 'next/image';

const Merit4 = () => {
    const items = [
        {
            src: '/images/components/itembox2/icon_pr1.png',
            title: 'NaverPay ポイント',
            subtitle: '10万ウォン',
        },
        {
            src: '/images/components/itembox2/icon_pr2.png',
            title: 'NaverPay ポイント',
            subtitle: '5万ウォン X 2',
        },
        {
            src: '/images/components/itembox2/icon_pr3.png',
            title: 'NaverPay ポイント',
            subtitle: '5万ウォン X 2',
        },
    ];

    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 h-full'></div>
            </div>
        </div>
    );
};

export default Merit4;
