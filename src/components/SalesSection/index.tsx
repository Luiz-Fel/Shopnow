import { sales } from "../../constants/constants";
import { SaleProduct } from "../SaleProduct";
import styles from './styles.module.scss'



export function SalesSection() {
    return (
    <>
        <h2>Todays sales</h2>
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