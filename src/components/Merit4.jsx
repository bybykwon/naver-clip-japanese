import Image from 'next/image';

const Merit4 = () => {
  const items = [
    {
      src: '/images/components/itembox2/icon_pr1.png',
      alt: 'naverboost1',
      title: 'ブランドコネクトプログラム',
      subtitle: 'ブランド提携コンテンツ制作への参加<br/> 追加収益創出の機会の提供',
    },
    {
      src: '/images/components/itembox2/icon_pr2.png',
      alt: 'naverboost2',
      title: 'スペシャルイベント',
      subtitle: 'フェスティバルなどの特別な行事への招待および<br/>チャレンジ参加の機会の提供',
    },
    {
      src: '/images/components/itembox2/icon_pr3.png',
      title: 'クリップクリエイタースクール',
      alt: 'naverboost3',
      subtitle: 'Naverクリップクリエイター<br/>公式教育プログラム',
    },
  ];

  return (
    <div className='container'>
      <div className='p-[2px] bg-gradient-to-r from-naver-green via-blue-500 to-purple-600 rounded-lg'>
        <div className='flex flex-col gap-6 bg-black rounded-lg p-4'>
          <span className='text-4xl text-center font-bold px-4 py-2 rounded-lg mt-2 bg-gradient-to-r from-naver-green to-blue-500 text-transparent bg-clip-text'>
            ブーストプログラム
          </span>
          <p className='text-center mt-3 text-xl'>成長と成功のためのさまざまな機会</p>

          {/* 
                        md(768px 이상)부터 flex-row로 변경하고,
                        아이템들이 여러 줄로 넘어갈 수 있도록 flex-wrap 추가
                    */}
          <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
            {items.map((item, index) => (
              <div
                key={index}
                className='bg-[#202020] p-4 rounded-lg flex items-center gap-6'
              >
                <div className='flex-shrink-0'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={150}
                    height={150}
                    className='rounded-lg'
                  />
                </div>
                <div className='text-white'>
                  <h2 className='text-2xl font-bold'>{item.title}</h2>
                  <p
                    className='mt-2'
                    dangerouslySetInnerHTML={{ __html: item.subtitle }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merit4;
