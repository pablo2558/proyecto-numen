import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Images
import accesorios from './assets/images/accesorios.png';
import combo from './assets/images/combo.jpg';
import cpu from './assets/images/cpu.jpg';
import fondo from './assets/images/fondo.jpg';
import monitor from './assets/images/monitor.jpg';
import placa1 from './assets/images/placa-armada.jpg';
import placa2 from './assets/images/placa-video-2.jpg';
import procesador from './assets/images/procesador.jpg';
import teclado from './assets/images/teclado.jpg';
import windows from './assets/images/windows.jpg';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={fondo} alt="fondo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cpu} alt="cpu" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={monitor} alt="monitor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={teclado} alt="teclado" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={accesorios} alt="accesorios" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={combo} alt="combo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={placa1} alt="placa-armada" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={placa2} alt="placa-video-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={procesador} alt="procesador" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={windows} alt="windows" />
        </SwiperSlide> 
      </Swiper>
    </>
  );
}