import React from 'react'
import './Navbar.css'
import NavbarBelt from './navbarbelt/NavbarBelt'
import NavbarBanner from './navbarbanner/NavbarBanner'
const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarBelt/>
      <NavbarBanner/>
    </div>
  )
}

export default Navbar
