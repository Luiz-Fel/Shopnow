import { SalesSection } from '../components/SalesSection'
import HomePageCarousel from '../components/HomePageCarousel'
import { SaleCategory } from '../components/SaleCategory'
import { Recommended } from '../components/Recommended'
import { OthersSection } from '../components/OthersSection'

export default function Home() {
  return (
    <>
      <HomePageCarousel />
      <SalesSection />
      <SaleCategory />
      <Recommended />
      <OthersSection />
    </>
  )
}
