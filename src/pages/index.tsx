import Head from 'next/head'
import Image from 'next/image'
import { SalesSection } from '../components/SalesSection'
import HomePageCarousel from '../components/HomePageCarousel'
import { SaleCategory } from '../components/SaleCategory'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HomePageCarousel />
      <SalesSection />
      <SaleCategory />
    </>
  )
}
