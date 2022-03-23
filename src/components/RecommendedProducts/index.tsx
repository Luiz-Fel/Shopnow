import {Navigation} from 'swiper'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import styles from './styles.module.scss'

import { Product } from '../Product';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { TitleSection } from '../TitleSection';
import { sales } from '../../constants/constants';

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
                {sales.map((product) => {
                    return(
                        <SwiperSlide key={product.id}>
                        
                        <Product
                        id={product.id} 
                        stock={product.stock} 
                        title={product.title} 
                        isSales={product.isSales} 
                        price={product.price} 
                        salePrice={product.salePrice} 
                        imageUrl={product.imageUrl} />
                            
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}