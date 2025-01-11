import Image from 'next/image';

const Merit3 = () => {
    return (
        <div className='container'>
            <div className='p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg text-center'>
                <div className='flex flex-col gap-4 bg-black rounded-lg p-4 h-full items-center'>
                    <span className='text-4xl text-green-400 to-blue-500 font-bold px-4 py-2 rounded-lg mt-2'>
                        広告インセンティブ
                    </span>
                    <p>
                        頑張った分だけ成長する収益
                        <br />
                        クリップの再生数が増えれば増えるほど<strong>より多くの報酬</strong>を得ることができます。
                    </p>
                    <Image
                        src='/images/components/itembox2/insentive.png'
                        alt='insentive'
                        width={300}
                        height={300}
                        className='rounded-lg '
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default Merit3;
