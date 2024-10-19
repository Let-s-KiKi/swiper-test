import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { css } from "@emotion/css";
import data from '../_data/slider-data.json'
import Image from "next/image";

export function DemoSlider() {

    return (
        <div className={css`
            width: 800px;
            height: 460px;
            margin: 0 auto; 
        `}>
            <Swiper
                className="w-96 h-64"
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
            >
            {data.map((slide) => (
                <SwiperSlide
                    key={slide.id}
                    className={css`
                        position: relative;
                        width: 800px;
                        height: 460px;
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