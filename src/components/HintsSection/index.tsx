import Link from "next/link";
import styles from './styles.module.scss'
import { AiOutlineArrowRight } from "react-icons/ai";
import { TitleSection } from "../TitleSection";


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
        <TitleSection title='Hints for you' link='See all hints' url=''  />
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