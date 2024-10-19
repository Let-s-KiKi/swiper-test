import { css } from "@emotion/css";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

type Props = {
    item: {
        id: number;
        title: string;
        imageurl: string;
    }
}

export function SliderItem({ item }: Props) {
    return (
        <SwiperSlide
            key={item.id}
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
                alt={item.title}
                src={item.imageurl}
                layout="fill"
                sizes="100%" />
        </SwiperSlide>
    )
}