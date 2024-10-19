import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { css } from "@emotion/css";
import data from '../../_data/slider-data.json'
import Image from "next/image";
import { EffectCards } from 'swiper/modules';

/**
 * 개발자: 이현호
 * 작성 날짜: 2024-10-19
 * 기능: 스와이퍼 관련 컴포넌트 (카드 형식)
 */
type Props = {
    effect: string,
}

export function CardSwipers({ ...props }: Props) {
    return (
        <div className={css`
            width: 800px;
            height: 440px;
            margin: 0 auto; 
        `}>
            <Swiper
                effect={props.effect}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper">
                { data.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        className={css`
                            position: relative;
                            width: 800px;
                            height: 440px;
                            background-color: blue;
                        `}>
                        <Image
                            className={css`
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            `}
                            alt={slide.title}
                            src={slide.imageurl}
                            layout="fill"
                            sizes="100%" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    ) 
}