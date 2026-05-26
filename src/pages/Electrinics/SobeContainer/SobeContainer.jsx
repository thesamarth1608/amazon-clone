import React, { useRef } from 'react'
import './SobeContainer.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const SobeContainer = () => {
  const carouselRef = useRef(null);
  const carouselleftscroll = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  }
  const carouselrightscroll = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    })
  }

  return (
    <div className='sobe-container'>
      <div className='sobe-carousel'>
        <div className='sobe-viewport'>
          <img className='sobe_card_img' src="https://m.media-amazon.com/images/G/31/img24/Laptops_2025/Non_Gaming_COOP_1500_x_300._CB776674150_.jpg"></img>
        </div>
      </div>
      <div className='dcl-container-inner'>
        <div className='d-showcase-header'>
          <h3><span className='d-header-title'>Up to 80% off | Shop now</span></h3>
          <a className='dcl-see-more'><span>Explore more</span></a>
        </div>
        <div className='dcl-carousel'>
          <button className='carousal_scroll_btn left_scroll' onClick={carouselleftscroll}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '20px' }} />
          </button>
          <div className='a-carousal-row' ref={carouselRef}>


            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/314bul4sPML._SR480,440_AC_.jpg' alt='#'></img>
              <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/31NnmYempPL._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/313yUaWYKPL._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/4192vscwlSL._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/318BcYFpRdL._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/311Whu9tWES._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/31kEwdJ-7BL._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/314bul4sPML._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/314bul4sPML._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/314bul4sPML._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/314bul4sPML._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
            <div className='a-carasoul-card'>
              <img className='carasoul-img' src='https://m.media-amazon.com/images/I/314bul4sPML._SR480,440_AC_.jpg' alt='#'></img>
               <div className='carasoul-img-desc'>
                <div className='carasoul-item-name'>boAt Airdopes 141 Gen 2 (2025), 4 Mics ENx Tech, 48 Hrs Playback, Free Music Streaming, Fast Charge, Low Latency, IPX4, v5.4 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active White)</div>
                <span className='carasoul-item-price'><span className='itempricersicon'>₹</span><span className='caroasoul-item-price-num'>799</span><span className='itempricersicon'>00</span></span>
                <span className='carasoul-item-mrp'>M.R.P: <span>₹3,990.00</span> </span>
              </div>
            </div>
          </div>
          <button className='carousal_scroll_btn right_scroll' onClick={carouselrightscroll}>
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: '20px' }} />
          </button>
        </div>
      </div>
      <div className='celwidget_Container'>
          <div className='celwidget_carousel'>
            <div className='celwidget_header'>
              <h2>Shop by Category</h2>
            </div>
            <div className='celwidget_viewport'>
              <ol className='celwidget_raw_inner'>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/laptop._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Laptops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Headphones._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Headphones</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/img21/CEPC/Tablets/Brave/Halo_Tablets._CB777651500_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Tabets</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Smartwatches._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Smartwatches</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Monitors._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Monitors</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Desktops._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Desktops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Components._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Components</span>
                    </div>
                  </div>
                </li>
              </ol>
              <ol className='celwidget_raw_inner'>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Gaming_Laptops._SS400_QL85_.jpg' className='celwidget_img' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Gaming Laptops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Camera__Accessories._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Laptops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Computer_Accessories._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Laptops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/9_audio._CB795899201_.png' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Laptops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Stationery._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Laptops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/musical-instruments._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Laptops</span>
                    </div>
                  </div>
                </li>
                <li className='celwidget_item_card'>
                  <div className='celwidget_anchor_card_link'>
                    <div className='celwidget_sub_card_image'>
                      <div className='celwidget_img_container'>
                        <img className='celwidget_img' src='https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/ELP_revamp/Storage._SS400_QL85_.jpg' alt='#'></img>
                      </div>
                    </div>
                    <div className='celwidget_footer'>
                      <span>Laptops</span>
                    </div>
                  </div>
                </li>
              </ol>
              <a className='dcl-see-more celwidget_explore_more'><span>Explore more</span></a>
            </div>
          </div>
        </div>
        <div className='HalignCenter'>
          <div className='HalignCenter_anchor_link'>
            <div className='HalignCenter_img'>
              <img src='https://m.media-amazon.com/images/G/31/img15/pcacc25/1242x450aaaaa.jpg'></img>
            </div>
          </div>
        </div>
        <div className='HalignCenter'>
          <div className='HalignCenter_anchor_link'>
            <div className='HalignCenter_img'>
              <img src='https://m.media-amazon.com/images/G/31/gamepad/1242x450.jpg'></img>
            </div>
          </div>
        </div>
        <div className='HalignCentery29ud'>
        <div className='HalignCenter29ud_header'>
          <h2>Shop by Personality</h2>
        </div>
          <div className='HalignCenter29ud_anchor_link'>
            <div className='HalignCenter29ud_img'>
              <img src='https://m.media-amazon.com/images/G/31/img25/ELP/june/01_Gamer.jpg'></img>
            </div>
            <div className='HalignCenter29ud_img'>
              <img src='https://m.media-amazon.com/images/G/31/img25/ELP/june/02_Fitness.jpg'></img>
            </div>
            <div className='HalignCenter29ud_img'>
              <img src='https://m.media-amazon.com/images/G/31/img25/ELP/june/03_Tech.jpg'></img>
            </div>
            <div className='HalignCenter29ud_img'>
              <img src='https://m.media-amazon.com/images/G/31/img25/ELP/june/04_Music.jpg'></img>
            </div>
          </div>
        </div>

    </div>
  )
}

export default SobeContainer
