import 'swiper/css';
import { Swipers } from '@/_components/swiper/Swiper';
import { CardSwipers } from '@/_components/swiper/CardSwiper';

/**
 * 개발자: 이현호
 * 작성 날짜: 2024-10-19
 * 기능: 메인 페이지 역할
 */
export default function Home() {
  return (
    <div className={`items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Swipers effect='pagination' slidesPerView={1} />
        <Swipers effect='pagination' slidesPerView={2} />
        <CardSwipers effect='cards' />
      </main>
    </div>
  );
}
