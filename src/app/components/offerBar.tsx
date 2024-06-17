"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import  { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import styles from "../styles/offerBar.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


const swipers = [
    {src: "/images/offer 1.webp", alt: "amazing offer 1", text: "هدفون بلوتوثی"},
    {src: "/images/offer 2.webp", alt: "amazing offer 2", text: "قرص سلنیوم پلاس او پی دی فارما"},
    {src: "/images/offer 3.webp", alt: "amazing offer 3", text: "کولرگازی 12هزار جی پلاس"},
    {src: "/images/offer 4.webp", alt: "amazing offer 4", text: "کرم مرطوب کننده و آبرسان"},
    {src: "/images/offer 5.webp", alt: "amazing offer 5", text: "شامپو تقویت‌کننده و ترمیم‌کننده مو"},
    {src: "/images/offer 6.webp", alt: "amazing offer 6", text: "ماشین اصلاح موی صورت"},
    {src: "/images/offer 7.webp", alt: "amazing offer 7", text: "ماشین اصلاح موی صورت کیمی"},
    {src: "/images/offer 8.webp", alt: "amazing offer 8", text: "شامپو تقویت‌کننده و ضدریزش مو"},
    {src: "/images/offer 9.webp", alt: "amazing offer 9", text: "جوراب ساق بلند مردانه"}
];
    const OfferBar: React.FC = () => {
    return(
        <div className={styles.offerBar}>
            <button className={`${styles.arrow} ${styles.left}`}>
                <FaChevronLeft />
            </button>
            <Swiper 
            modules={[Navigation]}
            navigation={{
                prevEl: `.${styles.left}`,
                nextEl: `.${styles.right}`,
            }}
            spaceBetween={5}
            slidesPerView={8}
            >
                   {swipers.map((swiper, index) => (
                    <SwiperSlide key={index} className={styles.offerItem}>
                        <img className={styles.offerPicture} src={swiper.src} alt={swiper.alt} />
                        <p className={styles.offerText}>{swiper.text}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className={`${styles.arrow} ${styles.right}`}>
                <FaChevronRight/>
            </button>
            {/* <div className={styles.specialOffer}>
                <div className={styles.specialTexts}>
                <p>پیشنهاد شگفت‌انگیز</p>
                </div>
                <div className={styles.timer}>
                    <div>55 :</div>
                    <div>39</div>
                    <div>02 :</div>
                </div>
                <div className={styles.specialText}>
                    <p>مشاهده همه</p>
                </div>
                <div className={styles.specialIcon}>
                        <img src="/images/Amazing.svg" alt="specialIcon" />
                </div>
            </div> */}
        </div>
    );
};

export default OfferBar;