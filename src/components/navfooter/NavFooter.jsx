import React from 'react'
import './NavFooter.css'
import logo from '../../assets/logo5.jpg'
import flag from '../../assets/flag.png'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const NavFooter = () => {
  return (
    <div className='navFooter'>
      <div className='navFooterBackToTop'><span className='navFooterBackToTopText'>Back to top</span></div>
      <div className='navFooterVerticalColumn'>
        <div className='navFooterVerticleRow'>
          <div className='navFooterLinkCol col1'>
            <div className='navFooterColHead'>Get to Know Us</div>
            <ul>
              <li className='nav_item'><a>About Amazon</a></li>
              <li className='nav_item'><a>Careers</a></li>
              <li className='nav_item'><a>Press Release</a></li>
              <li className='nav_item'><a>Amazon Science</a></li>
            </ul>
          </div>
          <div className='navFooterLinkCol col2'>
            <div className='navFooterColHead'>Connect with Us</div>
            <ul>
              <li className='nav_item'><a>Facebook</a></li>
              <li className='nav_item'><a>Twitter</a></li>
              <li className='nav_item'><a>Instagram</a></li>
            </ul>
          </div>
          <div className='navFooterLinkCol col3'>
            <div className='navFooterColHead'>Make Money with Us</div>
            <ul>
              <li className='nav_item'><a> Sell on Amazon</a></li>
              <li className='nav_item'><a>Sell under Amazon Accelerator</a></li>
              <li className='nav_item'><a>Protect and Build Your Brand</a></li>
              <li className='nav_item'><a>Amazon Global Selling</a></li>
              <li className='nav_item'><a>Supply to Amazon</a></li>
              <li className='nav_item'><a>Become an Affiliate</a></li>
              <li className='nav_item'><a>Fulfilment by Amazon</a></li>
              <li className='nav_item'><a>Advertise Your Products</a></li>
              <li className='nav_item'><a>Amazon Pay on Merchants</a></li>
            </ul>
          </div>
          <div className='navFooterLinkCol col4'>
            <div className='navFooterColHead'>Let Us Help You</div>
            <ul>
              <li className='nav_item'><a>Your Account</a></li>
              <li className='nav_item'><a>Returns Centre</a></li>
              <li className='nav_item'><a>Recalls and Product Safety Alerts</a></li>
              <li className='nav_item'><a>100% Purchase Protection</a></li>
              <li className='nav_item'><a>Aamzon App DownLoad</a></li>
              <li className='nav_item'><a>Help</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className='navFooterPadItemLine'>
        <img className='footerLogoImg' src={logo}></img>
        <div className='padItemsright'>
          <div className='icon_lang'>
            <div className='leftlang'>
             <LanguageOutlinedIcon sx={{fontSize:'18px'}}/>
             <span>English</span>
            </div>
              <UnfoldMoreIcon sx={{fontSize:'20px'}}/>
          </div>
          <div className='contry'>
            <img src={flag}></img>
            <span>India</span>
          </div>
        </div>
      </div>
      <div className='navFooterLinkLine'>
        <div className='navFooterMoreOnAmazon'>
            <ul>
                <li className='navFooterDescItem'><div className='DescItemHead'>AbeBooks</div><div className='DescItemSub'>Books, art & collectibles</div></li>
                <li className='navFooterDescItem'><div className='DescItemHead'>Shopbop</div><div className='DescItemSub'>Designer Fashion Brands</div></li> 
            </ul>
            <ul>
                <li className='navFooterDescItem'><div className='DescItemHead'>Amazon Web Services</div><div className='DescItemSub'>Scalable Cloud Computing Services</div></li>
                <li className='navFooterDescItem'><div className='DescItemHead'>Amazon Business</div><div className='DescItemSub'>Everything For Your Business</div></li>
            </ul>
            <ul>
              <li className='navFooterDescItem'><div className='DescItemHead'>Audible</div><div className='DescItemSub'>Download Audio Books</div></li>
              <li className='navFooterDescItem'><div className='DescItemHead'>Prime Now</div><div className='DescItemSub'>2-Hours Delivery on EveryDay Items</div></li>
            </ul>
            <ul>
              <li className='navFooterDescItem'><div className='DescItemHead'>IMDB</div><div className='DescItemSub'>Movies, TV & Celebrities</div></li>
              <li className='navFooterDescItem'><div className='DescItemHead'>Amazon Prime Music</div><div className='DescItemSub'>100 millions songs, adfree Over 15 milion podcast episodes</div></li>
            </ul>
        </div>
      </div>
      <div className='navFooterCopyRight'>
        <ul>
            <li className='nav_first'>Condition of Use & Sale</li>
            <li className='nav_first'>Privacy Notice</li>
            <li className='nav_first'>Interest-Based </li>
        </ul>
        <span>© 1996-2025, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  )
}

export default NavFooter
