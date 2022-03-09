import { SalesSection } from '../components/SalesSection'
import HomePageCarousel from '../components/HomePageCarousel'
import { SaleCategory } from '../components/SaleCategory'
import { RecommendedProducts } from '../components/RecommendedProducts'
import { OthersSection } from '../components/OthersSection'
import { BrandsSection } from '../components/BrandsSection'
import { HintsSection } from '../components/HintsSection'
import { hints } from '../constants/constants'

export default function Home() {
  return (
    <>
      <HomePageCarousel />
      <SalesSection />
      <SaleCategory />
      <RecommendedProducts />
      <OthersSection />
      <BrandsSection />
      <HintsSection hints={hints} />
    </>
  )
}
