"use client"; 

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderButtons from "./buttonSlider";
import styles from "../styles/slider.module.css";

interface Slide {
  id: number;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliders}>
        <ul className={styles.swiperSlider}>
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, buttons }) => (
              <SwiperSlide key={id}>
                <div className={styles.swipesrsSlider}>
                  <div className={styles.swiperSlide} style={{  background: `url(${image}) center center / cover scroll no-repeat`}}></div>
                  <div className={styles.swiperSlides}>
                    {buttons.length > 0 && (
                      <p className={styles.sliderButton} style={{  }}>
                        <SliderButtons buttons={buttons} />
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
