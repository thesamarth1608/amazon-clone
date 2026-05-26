import React from 'react'
import './ProgressiveNav.css'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const progressiveNav = () => {
  return (
    <div className='progressiveNav'>
      <div className='spacious'>
      <ul className='subnav-ul'>
        <li>
            <div className='sabnav-div'>
                <a href='#'>Mobile Accessories</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>Laptop & Accesssories</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>TV & Home Entertainment</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>Audio</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>Cameras</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>Computer Peripheral</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>Smart Technology</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>Musical Instrument</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
        <li>
            <div className='sabnav-div'>
                <a href='#'>office & Stationery</a>
                <ArrowDropDownOutlinedIcon sx={{fontSize: '13px', color:'#a0a0a0'}}/>
            </div>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default progressiveNav
