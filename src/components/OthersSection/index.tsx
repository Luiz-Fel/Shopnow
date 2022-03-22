import styles from './styles.module.scss'
import Image from 'next/image'
import iphone from '../../../public/images/iphone.png'
import furnitune from '../../../public/images/furnitune.png'
import tools from '../../../public/images/tools2.png'
import kitchen from '../../../public/images/kitchen.png'
import { Button } from '../Button'
import Link from 'next/link'

export function OthersSection() {
    return(
        <div className={styles.othersSection}>
            <div className={styles.bundleSection}>
                <Image src={tools} width={622} height={350}/>
                <div className={styles.rightSide}>
                    <h3>Buy this bundle and save $40!</h3>
                    <p>Longer sentence, for just two lines <br />  and could be very very long</p>
                    <Button lightTheme={true}>Buy this bundle</Button>
                </div>
            </div>
            <div className={styles.newSection}>
                <div className={styles.newComponentsSection}>
                    <Link href={""}>
                        <a>
                            <div className={styles.newComponent}>
                            <div className={styles.textSection}>

                                <p className={styles.text}>New furniture bundles!</p>
                            </div>
                                <Image src={furnitune}  width={204} height={239} />
                            </div>
                        </a>
                    </Link>
                    <Link href={""}>
                        <a>
                            <div className={styles.newComponent}>
                                <div className={styles.textSection}>
                                    <p className={styles.text}>Check out the <br /> new kitchen section</p>
                                </div>
                                <Image src={kitchen} width={204} height={252.9} />
                            </div>
                        </a>
                    </Link>
                    <Link href={""}>
                        <a>
                            <div className={styles.newComponent}>
                                <div className={styles.textSection}>
                                    <p className={styles.text}>New iPhone <br /> now available!</p>
                                </div>
                            
                                <Image src={iphone}  />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}