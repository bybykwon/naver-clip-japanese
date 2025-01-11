import Image from 'next/image';

const Merit3 = () => {
    const items = [
        {
            src: '/images/components/itembox2/insentive.png',
            title: 'NaverPay ポイント',
            subtitle: '10万ウォン',
        },
    ];

    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 h-full'>
                    <span className='text-4xl text-green-400 to-blue-500 font-bold px-4 py-2 rounded-lg mt-2'>
                        広告インセンティブ
                    </span>
                    <p>
                        頑張った分だけ成長する収益
                        <br />
                        クリップの再生数が増えるほど<strong>もっと多い報酬</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Merit3;
