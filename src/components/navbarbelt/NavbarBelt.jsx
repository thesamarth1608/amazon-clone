import React from 'react'
import './NavbarBelt.css'
// import amazonLogo from '../../assets/logo7.jpg'
import shopkeeperlogo from '../../assets/Shopcenterlogo.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import flag from '../../assets/flag.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from "@mui/material/Badge";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarBelt = () => {
  const cartItem = useSelector((state)=>state.cart.cartItems);
  // console.log("Radhe", cartItem);
  return (
    <div className='navbarBelt'>
    <div className='leftNavBelt'>
        <NavLink to='/' className='leftNavBeltLogo'>
            <img className='amazonLogoNavbar' src={shopkeeperlogo} alt='amazonLogo'/>
            {/* <span className='navbar_inLogo'>.in</span> */}
        </NavLink>
        <div className='navbarBeltLocation'>
          <div className='navbarBeltLocationImg'>
              <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontSize:'22px'}}/>
          </div>
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBeltLocationTop'>Delivering to Shendurni 424204</div>
            <div className='navbarBeltLocationBottom'>Update location</div>
          </div>
        </div>
    </div>
    <div className='navbarBeltSearchBox'>
      <div className='navbarBeltSearchDiv'>
       <div className='nabarBeltSearchBoxAll'>
        <span className='navbarBeltSearchIconAllText'>All</span>
        <ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/>
       </div>
       <input placeholder="Search Amazon.in" type='text' className='navbarBeltInputSearchBox'/>
       <div className='searchIconNavbarBelt'>
        <SearchOutlinedIcon sx={{fontSize:"29px"}}  className='seachIconNavbarBeltIcon'/>
       </div>
      </div>
    </div>
    <div className='rightSideNavbarBelt'>
      <div className='indianFlagCode'>
        <div className='indianFlagCodeLang'>
         <img src={flag} className='indiaFlag'/>
         <span>EN</span>
        </div>
        <ArrowDropDownOutlinedIcon className='dropDown' sx={{fontSize:'20px'}}/>
      </div>
      <div className='accountSignInNavbarBelt'>
        <div className='helloAccountNavbarBelt'><span className='topHelloNavbelt'>Hello, sign in</span><span className='bottomHelloNavbelt'>Account & Lists</span></div>
        <ArrowDropDownOutlinedIcon className='dropDown' sx={{fontSize:'20px'}}/>
      </div>
      <div className='accountSignInNavbarBelt'>
        <div className='helloAccountNavbarBelt'><span className='topHelloNavbelt'>Return</span><span className='bottomHelloNavbelt'>& Orders</span></div>
      </div>
      <NavLink to='/cart' className= {({isActive})=>(isActive ?'cartNavbarBelt activeLink':'cartNavbarBelt')}>
        <Badge badgeContent={cartItem.length} 
        anchorOrigin={{
        vertical: "middle",
        horizontal: "center",
      }}
        sx={{
           "& .MuiBadge-badge": {
          // transform: "translate(0, 0)", // perfect center
          backgroundColor: "#0F1111",
          color: "orange",
          fontSize: "15px",
          minWidth: "14px",
          height: "16px",
          fontWeight:600,
          borderRadius: "50%",
          top:6.5,
          right: 16,
        },
        }}
        className='cartIconNavbarBelt'
        >
         <AddShoppingCartIcon sx={{fontSize:"45px",}} className='cartIcon'/>
        </Badge>
      </NavLink>
    </div>
      
    </div>
  )
}

export default NavbarBelt
// const totalpriice  = cart.reduce((total, item)=>{
//   return total+ ListItem.price*ListItem.uantity
// }, 0);