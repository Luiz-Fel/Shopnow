import { sales } from "../../constants/constants";
import { Product } from "../Product";
import styles from './styles.module.scss'



export function SalesSection() {
    return (

    <div className={styles.SalesSection}>
        {sales.map(({id, stock, title, isSales, price, salePrice, imageUrl}) => {
            return(
                <Product
                key={id}
                id={id} 
                salePrice={salePrice}
                stock={stock} 
                title={title} 
                isSales={isSales} 
                price={price}  
                imageUrl={imageUrl} 
                 />
            )
        })}
    </div>
    )
}