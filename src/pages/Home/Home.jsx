import React from 'react'
import './Home.css'
import HeroSection from './HeroSection/HeroSection'
import CartGridLayout from './CartGridLayout/CartGrid'

const Home = () => {
  return (
    <div className='homeLayout'>
      <HeroSection/>
      <CartGridLayout/>
    </div>
  )
}

export default Home
