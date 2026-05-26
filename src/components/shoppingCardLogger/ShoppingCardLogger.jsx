import React, { useEffect, useRef, useState } from 'react'
import './ShoppingCardLogger.css'
import homeProducts from '../../pages/Home/homeProducts_2.json'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

const ShoppingCardLogger = () => {

  const [isAddingId, setIsAddingId] = useState(null);
  const timeoutRef = useRef(null);
  const dispatch = useDispatch();
 const scrollRef = useRef(null);
 const cartItems = useSelector((state)=>(state.cart.cartItems));

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }
  // function handleCLick(Item){
  //   if(isAdding) return;
  //   setIsAdding(true);
  //   dispatch(addToCart(Item));
  // }
  function handleCLick(item){
    setIsAddingId(item.id);
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }
    dispatch(addToCart(item));
    timeoutRef.current = setTimeout(()=>{
      setIsAddingId(null);
    }, 200);
    toast.success("Added to Cart");//upnaa khudkaa Style use karega 
    // toast(<div className='amazon-toast'>
    //   <span><CheckCircleIcon/></span><span>Added To Cart</span>
    // </div>, {
    //   hideProgressBar:true,
    //   toastId:item.id,
    //   icon:false,
    //   closeButton:false,
    // })
  }
  return (
    <div className='shopping_logger'>
      <button className='scroll-btn left' onClick={scrollLeft}><ArrowBackIosNewOutlinedIcon sx={{ fontSize: '28px' }} /></button>
      <div className='shopping-logger-scoller' ref={scrollRef}>
      {
        homeProducts.HomeItems.map((itemData) => {
          const isINCart = cartItems.some((item)=>item.id===itemData.id);
          return(
             <div key={itemData.id} className='puis-card-container'>
            <div className='s-image'>
              <img className='s-product-img' src={itemData.img}></img>
            </div>
            <div className='puise-description-section'>
              <div className='puise-label-popover'>
                <span>Sponsored </span><span><ErrorOutlineOutlinedIcon sx={{ fontSize: '11px' }} /></span>
              </div>
              <div className='s-line-clamp'>
                <div className='s-item-link'>
                  <div className='s-item-text-normal'>
                    {itemData.name}
                  </div>
                </div>
              </div>
              <div className='puise-declareeing-reviews'>
                <span>3.0</span>
                <span>
                  <StarRateIcon sx={{ fontSize: '14px', color: '#FFA41C' }} />
                  <StarRateIcon sx={{ fontSize: '14px', color: '#FFA41C' }} />
                  <StarRateIcon sx={{ fontSize: '14px', color: '#FFA41C' }} />
                  <StarOutlineIcon sx={{ fontSize: '14px', color: '#FFA41C' }} />
                  <StarOutlineIcon sx={{ fontSize: '14px', color: '#FFA41C' }} />
                </span>
                <span><ExpandMoreOutlinedIcon sx={{ fontSize: '16px' }} /></span>
                <span style={{ color: '#2162a1' }}>(2)</span>
              </div>
              <div className='item-respectable-deals-container'>
                <div className='item-deal-box'>
                  <span className='item-deal-name'>Republic Day Deal</span>
                </div>
              </div>
              <div className='item-price-recipe'>
                <div className='item-price'>
                  <span className='item-price-symbol'>₹</span>
                  <span className='item-price-buy'>4,999</span>
                  <span className='item-row-price'>M.R.P: ₹11,490</span>
                  <span className='item-save-percentageOff'>(56% off)</span>
                </div>
                <div className='rush-ccomponent'>
                  <span className='rush-primory'>Save 4%</span>
                  <span className='rush-secondary'>with coupon</span>
                </div>
                <div className='delivery-recipe'>
                  <span>FREE delivery<b> Tue, 20 Jan</b></span>
                </div>
                <div className='puise-addtoCart-cotainer'>
                {
                  isINCart ? (<div className='in-basket-text'>In Basket</div>)
                           :(<button  className={isAddingId===itemData.id ?'item-to-cart-container-disabled':'item-to-cart-container'} onClick={()=>handleCLick(itemData)}>
                    <span className='add-to-cart-item-text-normal'>
                      Add To Cart
                    </span>
                  </button>)
                }
                  {/* <button disabled={itemData.id === isAddingId} className={isAddingId===itemData.id ?'item-to-cart-container-disabled':'item-to-cart-container'} onClick={()=>handleCLick(itemData)}>
                    <span className='add-to-cart-item-text-normal'>
                      Add To Cart
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
      </div>
      
      <button className='scroll-btn right' onClick={scrollRight}><ArrowForwardIosOutlinedIcon sx={{ fontSize: '28px' }} /></button>
    </div>
  )
}

export default ShoppingCardLogger
