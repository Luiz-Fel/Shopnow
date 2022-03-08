import styles from './styles.module.scss'

interface DiscountStickerProps {
    discount: number
}

export function DiscountSticker({discount} : DiscountStickerProps) {
    return(<div className={styles.discountSticker} >
        <p>
            {'-' + Math.round(discount*100) + '%'}
        </p>
    </div>)
}