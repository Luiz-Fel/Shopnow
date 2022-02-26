import Head from 'next/head'
import Image from 'next/image'
import { CardsSection } from '../components/CardsSection'
import HomePageCarousel from '../components/HomePageCarousel'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HomePageCarousel />
      <CardsSection />
    </>
  )
}
