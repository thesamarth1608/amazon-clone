import React from 'react'
import './NavbarBanner.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { NavLink } from 'react-router-dom';
const NavbarBanner = () => {
  const Options = [{name: 'Fresh', path:'/fresh', dropdown:true}, {name: 'MX Player', path:'/mxplayer'}, {name: 'Sell', path:'/sell'}, {name: 'Bestsellers', path:'/bestseller'}, {name: 'Mobiles', path:'/mobiles'}, {name: 'Todays Deals', path:'/mobiles'}, {name: 'Customer Service', path:'/mobiles'}, {name: 'New Releases', path:'/mobiles'}, {name: 'Prime', path:'/mobiles',  dropdown:true}, {name: 'Electronics', path:'/electronics'}, {name: 'Amazon Pay', path:'/mobiles'}];
  return (
    <div className='navbarBanner'>
     <div className='navbarBannerOptionsLeft'>
      <div className='optionsnavbarBanner'>
        <MenuOutlinedIcon sx={{fontSize:'23px'}}/>
        <span>All</span>
      </div>
      {/* <div className='optionsnavbarBanner'>
        <span>Fresh</span>
        <ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/>
      </div> */}
      {/* {Options.map((item, index)=>{
        if(item.name=="Fresh"||item.name=="Prime"){
          return( <div className='optionsnavbarBanner'><span>{item.name}</span> <ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/></div>);
        }
        else{
          return( <div className='progressiveContent'><span>{item.name}</span></div>)
        }
      })} */}
      {
        Options.map((item, index)=>{
          return(<NavLink key={index} to={item.path} className={({isActive})=>
            isActive ? "progressiveContent activeBannerLink" : "progressiveContent"
          }>
            <span>{item.name}</span>
            {item.dropdown && (<ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/>)}
          </NavLink>);
        })
      }
     </div>
     <div className='navbarBannerRightside'>
      <img src='https://m.media-amazon.com/images/G/31/img21/APAY/ITD25/SMW_400x39_1._CB778584269_.png' alt='amazonPrimeLogo' className='primeLogoImg'/>
     </div>
    </div>
  )
}

export default NavbarBanner
// <div className='progressiveContent' key={index}><span>{item.name}</span></div>