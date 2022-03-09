import {Navigation} from 'swiper'
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import Link from 'next/link';
import styles from './styles.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai';


export function BrandsSection() {
    return(
        <>
         <div className={styles.titleSection}>
            <h2 className={styles.title}>Our Brands</h2>
            <div>
                <Link href={''}>
                <a className={styles.link}>
                    <p>Show all brands <AiOutlineArrowRight /></p>
                </a>
                </Link>
            </div>
        </div>
        <Swiper
         className={styles.swiper}
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={70}
            navigation={true}
            >
            <SwiperSlide className={styles.swiperSlide} >
                <Link href={''}>
                    <a>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/2560px-Panasonic_logo_%28Blue%29.svg.png' />
                    </a>
                 </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <Link href={''}>
                    <a>
                        <img src={'https://registrodemarca.arenamarcas.com.br/wp-content/uploads/2020/05/huawei-logo.jpg'} style={{
                        width: '7.3rem', 
                    }} />
                </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                    <Link href={''}>

                    <a>
                        <img src={'https://logodownload.org/wp-content/uploads/2014/12/bosch-logo-4-1.png'}  />
                </a>
                    </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                    <Link href={''}>
                        
                        <a>
                            <img src={'https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-6.png'}  />
                        </a>
                    </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                    <Link href={''}>
                    <a>
                        <img src={'https://logodownload.org/wp-content/uploads/2014/04/hp-logo-3.png'} style={{
                            width: '4rem', 
                        }} />
                     </a>
                    </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                    <Link href={''}>
                    <a>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'} style={{
                            width: '3.4rem', 
                        }}  />
                     </a>
                    </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
            <Link href={''}>
                    <a>

                        <img src={'https://logodownload.org/wp-content/uploads/2014/02/sony-logo.png'}  />
                    </a>
            </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                    <Link href={''}>
                            <a>
                        <img src={'https://logodownload.org/wp-content/uploads/2014/07/adidas-logo.png'} style={{
                            width: '6rem', 
                        }}/>
                    </a>
                    </Link>
            </SwiperSlide>

                
               
               
          
        </Swiper>
        </>
    )
}