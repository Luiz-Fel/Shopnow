import { Carousel, CarouselItem } from "react-bootstrap";
import control from "../../../public/images/control1.png"
import eletronics from "../../../public/images/eletronics.png"
import livingRoom from "../../../public/images/livingRoom.png"
import Image from 'next/image'
export default function HomePageCarousel() {


    return(
        <Carousel style={{
            zIndex: 0,
        }}>
            <CarouselItem>
                <Image src={control} alt="Controles de videogame playstation" />

            </CarouselItem>
            <CarouselItem>
                <Image src={eletronics} alt="" />

            </CarouselItem>
            <CarouselItem>
                <Image src={livingRoom} alt="" />

            </CarouselItem>
        </Carousel>
    )
} 