/**
 * 개발자: 이현호
 * 작성 날짜: 2024-10-19
 * 기능: 폰트 설정을 간편하게 빠르게 개발할 수 있는 스타일링 기능 구현
 */
import localFont from "next/font/local";


export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});