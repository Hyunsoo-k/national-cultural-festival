import type { Metadata } from 'next';

import QueryProvider from '@/components/QueryProvider/QueryProvider';
import { Header } from '@/components/layouts/Header/Header';
import { Footer } from '@/components/layouts/Footer/Footer';

import { notoSansKr, notoSerifKr, dmSerifDisplay } from "./fonts";
import './globals.scss';

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
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
