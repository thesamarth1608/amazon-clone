import React from 'react'
import './HeroSection.css'
import homeProducts from "../homeProducts.json"

const HeroSection = () => {
  return (
    <div className='herosection'>
      <img className='heroimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/Unrec/Live_PC_Hero_Lifestyle_3000x1200-m-2x._CB780065834_.jpg' />
      <div className='herosection2'></div>
      {/* <div className='grayBackgroundHeroSection'></div> */}
      <div className='hero-gwlayout'>
        {homeProducts.CardsData.map((card, index)=>(
          <div className='cardUi' key={card.title}>
          <h2 className='cardUiTitle'>{card.title}</h2>
          <div className='cardUiGrid'>
            {
              card.items.map((itm, i)=>(
                <div className='fluidquadimglab' key={i}>
              <img className='fluidLandScapeImg' src={itm.img} alt='babydiapers' />
              <span className='spanAsize'>{itm.label}</span>
            </div>
              ))
            }
          </div>
          <a className='exploreLink' href='#'>Explore All</a>
        </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
