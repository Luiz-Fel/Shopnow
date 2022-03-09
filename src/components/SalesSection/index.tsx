import { sales } from "../../constants/constants";
import { SaleProduct } from "../SaleProduct";
import { TitleSection } from "../TitleSection";
import styles from './styles.module.scss'



export function SalesSection() {
    return (
    <>
        <TitleSection title="Today's sales" link='See all sales' url=''  />
        <div className={styles.SalesSection}>
            {sales.map(({id, stock, title, salePrice,  price, discount, imageUrl}) => {
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