import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

export const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
});