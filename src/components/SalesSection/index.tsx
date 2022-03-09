import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { sales } from "../../constants/constants";
import { SaleProduct } from "../SaleProduct";
import styles from './styles.module.scss'



export function SalesSection() {
    return (
    <>
    <div className={styles.titleSection}>
            <h2 className={styles.title}>Today's sales</h2>
            <div>
                <Link href={''}>
                <a className={styles.link}>
                    <p>See all sales <AiOutlineArrowRight /></p>
                </a>
                </Link>
            </div>
        </div>
        <div className={styles.SalesSection}>
            {sales.map(({id, stock, title, isSales, salePrice,  price, discount, imageUrl}) => {
                return(
                    <SaleProduct
                    key={id}
                    id={id} 
                    salePrice={salePrice}
                    discount={discount}
                    stock={stock} 
                    title={title} 
                    price={price}  
                    imageUrl={imageUrl} 
                    />
                    )
                })}
        </div>
    </>
    )
}