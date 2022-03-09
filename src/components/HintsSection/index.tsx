import Link from "next/link";
import styles from './styles.module.scss'
import { AiOutlineArrowRight } from "react-icons/ai";


interface HintsSectionProps  {
    hints: {
        id: number,
        title: string,
        imageUrl: string,
        alternative: string,
        resume: string,
        link: string,

    }[]
}

export function HintsSection({ hints } : HintsSectionProps) {

    return(<>
        <div className={styles.titleSection}>
            <h2 className={styles.title}>Hints for you</h2>
            <div>
                <Link href={''}>
                <a className={styles.link}>
                    <p>Show all hints <AiOutlineArrowRight /></p>
                </a>
                </Link>
            </div>
        </div>
        <div className={styles.hints}>
        { 
                hints.map((current) => {
                    return(
                        <div key={current.id} className={styles.hintComponent}>
                        <img src={current.imageUrl} alt={current.alternative} width={301} height={170} />
                        <p className={styles.hintTitle}>{current.title}</p>
                        <p>{current.resume}</p>
                        <Link href={current.link}>
                            <a className={styles.link}>
                            Read More
                            <AiOutlineArrowRight /> 
                            </a>
                        </Link>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}