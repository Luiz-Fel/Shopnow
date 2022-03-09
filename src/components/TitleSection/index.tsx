import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import styles from './styles.module.scss'

interface TitleSectionProps {
    title: string,
    link: string,
    url: string,
}

export function TitleSection({title, link, url}) {
    return(
        <div className={styles.titleSection}>
            <h2 className={styles.title}>{title}</h2>
            <div>
                <Link href={url}>
                <a className={styles.link}>
                    <p>{link} <AiOutlineArrowRight /></p>
                </a>
                </Link>
            </div>
        </div>
    )
}