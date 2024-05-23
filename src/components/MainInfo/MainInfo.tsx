"use client"
import { navarr, bg, slide1, slide2 } from '@/assets';
import styles from './MainInfo.module.scss'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';

const MainInfo: React.FC = () => {
    const sliderref = useRef(null)
    const slides = [
        {
            id: 1,
            img: slide1
        },
        {
            id: 2,
            img: slide2,
        }
    ]
    const HandleLeft = () => {
        if(!sliderref.current) return;
        //@ts-ignore
        sliderref.current.swiper.slidePrev()

    }
    const HandleRight = () => {
        if(!sliderref.current) return;
        //@ts-ignore
        sliderref.current.swiper.slideNext()
        
    }
    return (
        <div className={styles.Page}>
            <Swiper 
            className={styles.Slider}
            ref={sliderref}
            spaceBetween={50} 
            slidesPerView={1} 
            loop={true}
            autoplay={{
                
                delay: 5000, // Задержка в миллисекундах между автопрокруткой слайдов
                disableOnInteraction: false, // Автопрокрутка не будет останавливаться после взаимодействия с слайдером
            }}
            modules={[Autoplay, Navigation, Pagination]}>
                {slides.map(slide => {
                    return(
                        <>
                        <SwiperSlide>
                            <Image src={slide.img} className={styles.Slider_Img} alt='img'height={300}></Image>
                        </SwiperSlide>
                        </>
                    )
                })}
                <div className={styles.Slider_Nav}>
                    <Image src={navarr} onClick={HandleLeft} className={styles.Arr_Left} alt='arr'></Image>
                    <Image src={navarr} onClick={HandleRight} className={styles.Arr_Right} alt='arr'></Image>
                </div>
                
            </Swiper>
            
        </div>
    );
}
 
export default MainInfo;