import type { Metadata } from 'next';

import { notoSansKr, notoSerifKr, dmSerifDisplay } from "./fonts";

import './globals.scss';
import { Header } from '@/components/layouts/Header/Header';

export const metadata: Metadata = {
  title: '전국문화축제',
  description: '전국문화축제 안내 가이드',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      className={`
        ${notoSansKr.variable} 
        ${notoSerifKr.variable}
        ${dmSerifDisplay.variable}
      `}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
