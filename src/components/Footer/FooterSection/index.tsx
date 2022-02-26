import Link from "next/link"
import styles from '../styles.module.scss'

interface footerProps {
    title: string,
    content: string[],
}


export function FooterSection(props : footerProps) {
    return(
        <div className={styles.footerSection}>
            <p className="title">
                {props.title}
            </p>
           {props.content.map((content) => {
               return(
               <Link key={content} href={"http://www.google.com"} >
                    <a>{content}</a>
               </Link>
               )
           })}
        </div>
    )
}