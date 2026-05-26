import React, { useRef } from 'react'
import './CartGrid.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import homeProducts from '../homeProducts_2.json'
import ShoppingCardLogger from '../../../components/shoppingCardLogger/ShoppingCardLogger';

const CartGrid = () => {
  const scrollRef2 = useRef(null);

  const scrollLeft = () => {
    scrollRef2.current.scrollBy({ left: -300, behavior: "smooth" })
  }
  const scrollRight = () => {
    scrollRef2.current.scrollBy({ left: 300, behavior: "smooth" })
  }
  return (
    <div className='cartGridSection'>


      <div className='cart-gwlayout'>

        {homeProducts.CardsData.map((card, index) => (
          <div className='cardUi' key={card.title}>
            <h2 className='cardUiTitle'>{card.title}</h2>
            <div className='cardUiGrid'>
              {
                card.items.map((itm, i) => (
                  <div className='fluidquadimglab' key={i}>
                    <img className='fluidLandScapeImg' src={itm.img} alt='babydiapers' />
                    <span className='spanAsize'>{itm.label}</span>
                  </div>
                ))
              }
            </div>
            <a className='cardExploreLink' href='#'>Explore All</a>
          </div>
        ))}
      </div>
      <div className='homeDetailLongCard '>
        <div className='homeDetailLongCardTitles'><div className='homeDetailLongCardTitle'>Starting ₹99 | Deals on trending books</div><div className='seemoreLink'>See all offer</div></div>
        
        <div className='homeDetailLongCardItems scroll-container'>
           <button className='scroll-btn left' onClick={scrollLeft}><ArrowBackIosNewOutlinedIcon sx={{ fontSize: '28px' }} /></button>
          <div className='ScrollDiv scroll-content' ref={scrollRef2}>
          {
            homeProducts.startingAt99Items.map((cardItem, index)=>
            (
              <div className='homeDetailLongCardItem' key={index}>
                <img className='homeDetailLongCardItemImg' src={cardItem.img}></img>
              </div>
            )
            )
          }
          </div>
          <button className='scroll-btn right' onClick={scrollRight}><ArrowForwardIosOutlinedIcon sx={{ fontSize: '28px' }} /></button>
        </div>
      </div>
      <div className='horizontalCardGridSection'>
        <div className='horizonTopSec'>
          <span className='horizontalCardTiltle'>More Items to Consider</span>
          <span className='seemoreLink'>See more</span>
        </div>
        <ShoppingCardLogger />
      </div>
      {/* <div className='horizontalCardGridSection'>
        <div className='horizonTopSec'>
          <span className='horizontalCardTiltle'>More Items to Consider</span>
          <span className='seemoreLink'>See more</span>
        </div>
        <div className='shopping_logger'>
          <div className='puis-card-container'>
            <div className='s-image'>
              <img className='s-product-img' src='https://m.media-amazon.com/images/I/519yASWH-JL._AC_UL320_.jpg'></img>
            </div>
            <div className='puise-description-section'>
              <div className='puise-label-popover'>
                <span>Sponsored </span><span><ErrorOutlineOutlinedIcon sx={{ fontSize: '11px' }} /></span>
              </div>
              <div className='s-line-clamp'>
                <div className='s-item-link'>
                  <div className='s-item-text-normal'>
                    CP PLUS 4G Dashcam for Car with Full HD Front Camera & Live GPS Tracking | H.265 Recording | G-Sensor | Parking Mode | Two-Way Talk | Motion Detection | Time Lapse | SD Card Support up to 1TB | CP-H27
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
                  <div className='item-to-cart-container'>
                    <span className='add-to-cart-item-text-normal'>
                      Add to cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='puis-card-container'>
            <div className='s-image'>
              <img className='s-product-img' src='https://m.media-amazon.com/images/I/519yASWH-JL._AC_UL320_.jpg'></img>
            </div>
            <div className='puise-description-section'>
              <div className='puise-label-popover'>
                <span>Sponsored </span><span><ErrorOutlineOutlinedIcon sx={{ fontSize: '11px' }} /></span>
              </div>
              <div className='s-line-clamp'>
                <div className='s-item-link'>
                  <div className='s-item-text-normal'>
                    CP PLUS 4G Dashcam for Car with Full HD Front Camera & Live GPS Tracking | H.265 Recording | G-Sensor | Parking Mode | Two-Way Talk | Motion Detection | Time Lapse | SD Card Support up to 1TB | CP-H27
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
                  <div className='item-to-cart-container'>
                    <span className='add-to-cart-item-text-normal'>
                      Add to cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='puis-card-container'>
            <div className='s-image'>
              <img className='s-product-img' src='https://m.media-amazon.com/images/I/519yASWH-JL._AC_UL320_.jpg'></img>
            </div>
            <div className='puise-description-section'>
              <div className='puise-label-popover'>
                <span>Sponsored </span><span><ErrorOutlineOutlinedIcon sx={{ fontSize: '11px' }} /></span>
              </div>
              <div className='s-line-clamp'>
                <div className='s-item-link'>
                  <div className='s-item-text-normal'>
                    CP PLUS 4G Dashcam for Car with Full HD Front Camera & Live GPS Tracking | H.265 Recording | G-Sensor | Parking Mode | Two-Way Talk | Motion Detection | Time Lapse | SD Card Support up to 1TB | CP-H27
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
                  <div className='item-to-cart-container'>
                    <span className='add-to-cart-item-text-normal'>
                      Add to cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='puis-card-container'>
            <div className='s-image'>
              <img className='s-product-img' src='https://m.media-amazon.com/images/I/519yASWH-JL._AC_UL320_.jpg'></img>
            </div>
            <div className='puise-description-section'>
              <div className='puise-label-popover'>
                <span>Sponsored </span><span><ErrorOutlineOutlinedIcon sx={{ fontSize: '11px' }} /></span>
              </div>
              <div className='s-line-clamp'>
                <div className='s-item-link'>
                  <div className='s-item-text-normal'>
                    CP PLUS 4G Dashcam for Car with Full HD Front Camera & Live GPS Tracking | H.265 Recording | G-Sensor | Parking Mode | Two-Way Talk | Motion Detection | Time Lapse | SD Card Support up to 1TB | CP-H27
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
                  <div className='item-to-cart-container'>
                    <span className='add-to-cart-item-text-normal'>
                      Add to cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='puis-card-container'>
            <div className='s-image'>
              <img className='s-product-img' src='https://m.media-amazon.com/images/I/519yASWH-JL._AC_UL320_.jpg'></img>
            </div>
            <div className='puise-description-section'>
              <div className='puise-label-popover'>
                <span>Sponsored </span><span><ErrorOutlineOutlinedIcon sx={{ fontSize: '11px' }} /></span>
              </div>
              <div className='s-line-clamp'>
                <div className='s-item-link'>
                  <div className='s-item-text-normal'>
                    CP PLUS 4G Dashcam for Car with Full HD Front Camera & Live GPS Tracking | H.265 Recording | G-Sensor | Parking Mode | Two-Way Talk | Motion Detection | Time Lapse | SD Card Support up to 1TB | CP-H27
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
                  <div className='item-to-cart-container'>
                    <span className='add-to-cart-item-text-normal'>
                      Add to cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='puis-card-container'>
            <div className='s-image'>
              <img className='s-product-img' src='https://m.media-amazon.com/images/I/519yASWH-JL._AC_UL320_.jpg'></img>
            </div>
            <div className='puise-description-section'>
              <div className='puise-label-popover'>
                <span>Sponsored </span><span><ErrorOutlineOutlinedIcon sx={{ fontSize: '11px' }} /></span>
              </div>
              <div className='s-line-clamp'>
                <div className='s-item-link'>
                  <div className='s-item-text-normal'>
                    CP PLUS 4G Dashcam for Car with Full HD Front Camera & Live GPS Tracking | H.265 Recording | G-Sensor | Parking Mode | Two-Way Talk | Motion Detection | Time Lapse | SD Card Support up to 1TB | CP-H27
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
                  <div className='item-to-cart-container'>
                    <span className='add-to-cart-item-text-normal'>
                      Add to cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}



      {/* <div className="scroll-section">
        <h2>Recommended For You</h2>

        <div className="scroll-wrapper">
          
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
            <div className="scroll-card">
              <img src="https://m.media-amazon.com/images/I/41F7X0Pe7XL._SR240,220_AC_.jpg" alt="item" />
              <p>Item 123</p>
            </div>
        </div>
      </div> */}

    </div>
  )
}

export default CartGrid
