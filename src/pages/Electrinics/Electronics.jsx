import React from 'react'
import './Electronics.css'
import ProgressiveNav from './progressiveNav/progressiveNav'
import LeftNav from './leftNav/leftNav'
import SobeContainer from './SobeContainer/SobeContainer'

const Electronics = () => {
  return (
    <div className='electronics_Container'>
      <ProgressiveNav/>
      <div className='ele-grid-container'>
        <LeftNav/>
        <SobeContainer/>
      </div>
    </div>
  )
}

export default Electronics
