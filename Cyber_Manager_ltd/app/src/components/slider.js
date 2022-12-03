import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css"

// import required modules
import { Navigation } from "swiper";
import SlideCard from './slideCard'
import img1 from './img.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
const Slider = () => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide> <SlideCard data={{imgSrc: img1}}/> </SwiperSlide>
      <SwiperSlide> <SlideCard data={{imgSrc: img2}}/>  </SwiperSlide>
      <SwiperSlide> <SlideCard data={{imgSrc: img3}}/>  </SwiperSlide>
    </Swiper>
  </>
  );
};

export default Slider;