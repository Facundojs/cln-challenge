import CarrouselDisscounts from 'src/components/CarrouselDisscounts'
import CarrouselTourism from 'src/components/CarrouselTourism'
import Header from 'src/components/Header'
import Banner from 'src/components/Banner'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <CarrouselTourism />
        <CarrouselDisscounts/>
      </main>
      <footer className="" >

      </footer>
    </>
  )
}

export default Home

// import styles from '../styles/Home.module.css'