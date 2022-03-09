import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { TitleSection } from '../TitleSection'
import styles from './styles.module.scss'


interface RecommendedCategoriesProps {
    categories: {
        id: number,
        imageAlt : string,
        categoryName : string,
        categoryLink : string,
        imageUrl : string,
    }[]
}


export function RecommendedCategories({categories} : RecommendedCategoriesProps) {
    return(
        <>
        <TitleSection title='Recommended Categories' link='See all categories' url=''/>
         <div className={styles.categories}>
            {

                categories.map((current) => {
                    return(
                        <Link href={''} key={current.id}>
                        <a>
                            <div>
                                <img src={current.imageUrl} alt={current.imageAlt} />
                                <div className={styles.categoryName}>
                                    <p>{current.categoryName}</p>
                                </div>
                            </div>
                        </a>
                        </Link>
                )
            })
        }
            
            
            
         </div>



        </>
    )
}