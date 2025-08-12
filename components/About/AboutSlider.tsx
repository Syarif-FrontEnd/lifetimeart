import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const AboutSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        pagination={{ clickable: true }} // aktifkan global
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 10 },
          640: { slidesPerView: 2.8, spaceBetween: 15 },
          1024: { slidesPerView: 3.5, spaceBetween: 20 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/img/1.png"
            alt="image"
            width={400}
            height={400}
            className="hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/2.png"
            alt="image"
            width={400}
            height={400}
            className="hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/3.png"
            alt="image"
            width={400}
            height={400}
            className="hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/4.png"
            alt="image"
            width={400}
            height={400}
            className="hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/5.png"
            alt="image"
            width={400}
            height={400}
            className="hover:scale-105"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutSlider;
