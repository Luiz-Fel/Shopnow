import { SalesSection } from '../components/SalesSection'
import HomePageCarousel from '../components/HomePageCarousel'
import { SaleCategory } from '../components/SaleCategory'
import { RecommendedProducts } from '../components/RecommendedProducts'
import { OthersSection } from '../components/OthersSection'
import { BrandsSection } from '../components/BrandsSection'
import { HintsSection } from '../components/HintsSection'
import { hints, recommendedCategories } from '../constants/constants'
import { RecommendedCategories } from '../components/RecommendedCategories'

export default function Home() {
  return (
    <>
      <HomePageCarousel />
      <SalesSection />
      <SaleCategory />
      <RecommendedProducts />
      <OthersSection />
      <BrandsSection />
      <RecommendedCategories categories={recommendedCategories} />
      <HintsSection hints={hints} />
    </>
  )
}
