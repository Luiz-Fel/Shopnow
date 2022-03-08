import { Button } from '../Button'
import styles from './styles.module.scss'

export function SaleCategory() {

    return(
        <>
        <div className={styles.saleCategory}>

            <div className={styles.productSection}>
                <img className={styles.productImg} src="https://media.forbiddenplanet.com/products/db/be/c31e49f51a0a9a9945e082420901878b62ef.png" alt="" />
                <div className={styles.productPercentage}>
                    <h2>-20%</h2>
                    <span>on books</span>
                </div>
            </div>
            <Button lightTheme={true}>Check offer</Button>
        </div>
        </>
    )
}