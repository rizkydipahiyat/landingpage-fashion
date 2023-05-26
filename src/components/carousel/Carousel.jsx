"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Image from "next/image";
import Banner1 from "../../../public/noir-banner.webp";
import { IoArrowForwardOutline } from "react-icons/io5";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full">
        <SwiperSlide className="flex justify-center items-center relative">
          <h1 className="lg:text-8xl xs:text-2xl text-center font-semibold absolute text-slate-50 lg:top-[12rem] xs:top-10 md:text-5xl md:top-[7rem]">
            Level up your style with our summer collections
          </h1>
          <button className="absolute lg:flex md:flex xs:flex lg:w-[10rem] lg:h-[4rem] lg:text-center md:w-[8rem] md:h-[4rem] md:text-center lg:top-[26rem] lg:left-[40rem] items-center gap-x-2 lg:text-xl bg-slate-50 text-slate-800 py-2 px-3 font-normal rounded-md hover:bg-slate-200 md:top-[16rem] md:left-[25rem] xs:bottom-10 xs:left-[10rem]">
            Shop now <IoArrowForwardOutline />
          </button>
          <Image
            className="block w-full h-full object-cover"
            src={Banner1}
            alt="carousel"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center relative">
          <h1 className="lg:text-8xl xs:text-2xl text-center font-semibold absolute text-slate-50 lg:top-[12rem] xs:top-10 md:text-5xl md:top-[7rem]">
            Level up your style with our summer collections
          </h1>
          <button className="absolute flex text-center lg:top-[26rem] lg:left-[40rem] items-center gap-x-2 lg:text-xl bg-slate-50 text-slate-800 py-2 px-3 font-normal rounded-md hover:bg-slate-200 md:top-[16rem] md:left-[25rem] xs:bottom-10 xs:left-[10rem]">
            Shop now <IoArrowForwardOutline />
          </button>
          <Image
            className="block w-full h-full object-cover"
            src={Banner1}
            alt="carousel"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
