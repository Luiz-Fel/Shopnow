import {Navigation} from 'swiper'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import styles from './styles.module.scss'

import { Product } from '../Product';

export function Recommended() {
    return(
        <div className={styles.recommended}>
            <h3>Recommended Products</h3>
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