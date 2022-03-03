import { FooterSection } from "./FooterSection";
import { footerConstants } from "../../constants/constants"
import styles from './styles.module.scss'
import Image from 'next/image'

import visa from '../../../public/visa.svg'
import elo from '../../../public/elo.svg'
import american from '../../../public/american.svg'
import diners from '../../../public/diners.svg'
import jcb from '../../../public/jcb.svg'
import mastercard from '../../../public/mastercard.svg'
import hipercard from '../../../public/hipercard.svg'
import paypal from '../../../public/paypal.svg'
import { AiFillYoutube,  AiFillFacebook, AiFillTwitterSquare, AiFillTwitterCircle, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import Link from "next/link";

export function Footer() {

    return(
        <div className={styles.footer}>
            <div className={styles.footerLinks}>
                <div>

                <p>Formas de pagamento</p>
                    <div className={styles.paymentSection}>
                        <Image className={styles.paymentMethods} src={visa} />
                        <Image className={styles.paymentMethods} src={mastercard}/>
                        <Image className={styles.paymentMethods} src={hipercard}/>
                        <Image className={styles.paymentMethods} src={elo}/>
                    </div>
                    <div className={styles.paymentSection}>

                        <Image className={styles.paymentMethods} src={american}/>
                        <Image className={styles.paymentMethods} src={diners}/>
                        <Image className={styles.paymentMethods} src={jcb}/>
                        <Image className={styles.paymentMethods} src={paypal}/>
                    </div>
                    <div className={styles.socials}>
                        <p>Mídias Sociais</p>
                        <div className={styles.socialsLinks}>
                            <Link href={"/"}>
                                <a>
                                    <AiFillInstagram size={"2rem"} />
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a>
                                    <AiFillYoutube size={"2.25rem"} />
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a>
                                    <AiFillTwitterSquare  size={"2rem"} />
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a>
                                    <AiFillFacebook  size={"2rem"} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <FooterSection title={'Dúvidas'} content={footerConstants.duvidas} />
                <FooterSection title={'Serviços'} content={footerConstants.serviços} />
                <FooterSection title={'Institucional'} content={footerConstants.institucional} />
            </div>
            <div className={styles.endFooter}>
                <p>Shopnow S.A.|Faria Lima, n° 123|São Paulo - SP|CEP: 12345-123|CNPJ: 00.111.222/3333-44|Inscrição Estadual: 636.159.325.111|Telefone: (10) 9999-9999</p>
            </div>
        </div>
    )
}