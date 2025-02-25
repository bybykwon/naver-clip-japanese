'use client';

import '@/styles/globals.scss';
import { Providers } from '@/components/providers';
import SkipNav from '@/components/layout/header/SkipNav';

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <title>Naverクリップクリエイター</title>
        <meta
          property='og:type'
          content='권병윤 개인프로젝트'
        />
        <meta
          property='og:title'
          content='Naverクリップクリエイター'
        />
        <meta
          property='og:description'
          content='권병윤 개인프로젝트'
        />
        <meta
          property='og:image'
          content='/images/titleImage.jpg'
        />
        <meta
          property='og:url'
          content='http://www.mysite.com/article/article1.html'
        />
        <meta
          name='twitter:card'
          content='summary'
        />
        <meta
          name='twitter:title'
          content='Naverクリップクリエイター'
        />
        <meta
          name='twitter:description'
          content='권병윤 개인프로젝트'
        />
        <meta
          name='twitter:image'
          content='http://www.mysite.com/article/article1.html'
        />
        <meta
          name='twitter:domain'
          content='사이트 명'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Providers>
          <SkipNav />
          <div
            id='wrap'
            className='min-h-svh flex flex-col'
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
