import { Card } from "react-bootstrap";
import { Button } from "../Button";
import inStock from '../../../public/check_circle.svg'
import outOfStock from '../../../public/error_outline.svg'
import Image from "next/image";
import Link from "next/link"
import styles from './styles.module.scss'
import { DiscountSticker } from "./DiscountSticker";

interface SaleProductProps {
    id: number,
    stock: number,
    title: string,
    price: number,
    discount: number,
    salePrice: number,
    imageUrl: string,
    description?: string,

}


export function SaleProduct({id, stock, title, price, discount, salePrice, imageUrl, description} : SaleProductProps) {

        
        return(
        <>
        <DiscountSticker discount={discount} />
        <Card style={{ width: '17rem', height: '34rem' }}>

                <Link href={"google.com"}>
                    <a style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem'}}>
                    <Card.Img variant="top" src={imageUrl} style={{ width: '13rem',
                }}/>
                    </a>
                </Link>
                <div className={styles.stockWarn} >
                    {stock ? (<>
                    <Image src={inStock} className={styles.inStock}  />
                    <p className={styles.inStock}> In stock</p>
                    </>
                    ) : 
                    (<>
                    <Image src={outOfStock}  className={styles.outOfStock} />
                    <p className={styles.outOfStock} >Out of stock</p>
                    </>)}
                    
                </div>
                <Card.Body style={{display: 'flex', flexDirection: 'column'}}>
                <Card.Title style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{title}</Card.Title>
                <br />
                <Card.Text style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1071FF', marginBottom: '0'}}>
                    {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(salePrice)}
                </Card.Text>
                <Card.Text style={{ color: '#FF7E27', textDecoration: 'line-through'}}>
                    {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}
                </Card.Text>

                </Card.Body>
                <div className={styles.dataProduct} >
                    <Button lightTheme={false}>Add to cart</Button>
                </div>
        </Card>
        </>
      )
}