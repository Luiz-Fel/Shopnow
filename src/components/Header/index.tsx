import Link from "next/link";
import styles from './styles.module.scss'
import { Form } from "react-bootstrap";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { NavBar } from "./NavBar";

export function Header() {
    return(
        <>
        <div className={styles.logoDiv}>
            
            <Link href="/">
                <a className={styles.logo}>Shop<span>now</span></a>
            </Link>
            <div className={styles.searchBox}>

                <AiOutlineSearch  style={{marginRight:"-1.8rem", zIndex:"2", marginTop:"-0.1rem"}}/>
                <input type="text"/>
            </div>
            <div className={styles.cartDiv}>
                Carrinho
                <AiOutlineShoppingCart/>
            </div>
        </div>
        <NavBar />
        </>
    )
}