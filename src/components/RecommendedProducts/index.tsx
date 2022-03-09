import {Navigation} from 'swiper'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import styles from './styles.module.scss'

import { Product } from '../Product';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { TitleSection } from '../TitleSection';

export function RecommendedProducts() {
    return(
        <div className={styles.recommended}>
         <TitleSection title='Recommended Products' link='See all recommended products' url=''  />

            <br />
            <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={100}
            navigation={true}
            >
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>
                <SwiperSlide><Product id={0} stock={0} title={''} isSales={false} price={0} salePrice={0} imageUrl={''} /></SwiperSlide>

            </Swiper>
        </div>
    )
}