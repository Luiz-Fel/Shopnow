import { FooterSection } from "./FooterSection";
import { footerConstants } from "../../constants/constants"
import styles from './styles.module.scss'
import Image from 'next/image'

import visa from '../../../public/visa.svg'
import applePay from '../../../public/applePay.svg'
import american from '../../../public/american.svg'
import diners from '../../../public/diners.svg'
import jcb from '../../../public/jcb.svg'
import mastercard from '../../../public/mastercard.svg'
import gPay from '../../../public/gPay.svg'
import paypal from '../../../public/paypal.svg'
import { AiFillYoutube,  AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai'
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
                        <Image className={styles.paymentMethods} src={american}/>
                        <Image className={styles.paymentMethods} src={applePay}/>
                    </div>
                    <div className={styles.paymentSection}>
                        <Image className={styles.paymentMethods} src={gPay}/>
                        <Image className={styles.paymentMethods} src={diners}/>
                        <Image className={styles.paymentMethods} src={jcb}/>
                        <Image className={styles.paymentMethods} src={paypal}/>
                    </div>
                    <div className={styles.socials}>
                        <p>Stay connected</p>
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

                <FooterSection title={'Order and Purchases'} content={footerConstants.orderAndPurchase} />
                <FooterSection title={'Services'} content={footerConstants.services} />
                <FooterSection title={'Institucional'} content={footerConstants.institucional} />
            </div>
            <div className={styles.endFooter}>
                <p>© 2022 Shopnow.com, Inc. or its affiliates. All rights reserved</p>
            </div>
        </div>
    )
}