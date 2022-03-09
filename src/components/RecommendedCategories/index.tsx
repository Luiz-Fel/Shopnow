import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { TitleSection } from '../TitleSection'
import styles from './styles.module.scss'


interface RecommendedCategoriesProps {
    categoryImage : string,
    categoryName : string,
    categoryLink : string,
}


export function RecommendedCategories({categoryImage, categoryName, categoryLink} : RecommendedCategoriesProps) {
    return(
        <>
        <TitleSection title='Recommended Categories' link='See all categories' url=''/>
         <div className={styles.titleSection}>
            <h2 className={styles.title}></h2>
            <div>
                <Link href={''}>
                <a className={styles.link}>
                    <p>See all categories <AiOutlineArrowRight /></p>
                </a>
                </Link>
            </div>
        </div>



        </>
    )
}