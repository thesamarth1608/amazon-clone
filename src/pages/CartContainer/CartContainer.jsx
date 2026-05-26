import React, { useRef, useState } from 'react'
import './CartContainer.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty, removeFromCart } from '../../redux/cartSlice';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';

const CartContainer = () => {
    const cartItems = useSelector((state)=>state.cart.cartItems);
    const timeOut2Ref = useRef(null);
    const [itemRemoving, setItemRemoving]= useState(false);
    // console.log("Kirshna", cartItems)
    const dispatch = useDispatch();
    function handleIncrease(itemId){
        dispatch(increaseQty(itemId));
    }
    function handleDecrease(itemId){
        dispatch(decreaseQty(itemId)); 
    }
    function handleRemove(itemId){
        setItemRemoving(true);
        if(timeOut2Ref.current){
      clearTimeout(timeOut2Ref.current);
    } 
        dispatch(removeFromCart(itemId));
        timeOut2Ref.current= setTimeout(()=>{
            setItemRemoving(false);
        }, 200);
        toast.success("Removed from Cart");
    }
    function handleSaved(itemId){
        toast.success("Saved");
    }
    const subtotal = cartItems.reduce((sum, item)=>sum+ item.price* item.quantity, 0);
    return (
        <div className='cart_container'>
            <div className='retail_cart_container'>
                <div className='fixed_right_inner'>
                    <div className='sc-cart-column'>
                        <div className='sc-cart-header'>
                            <h2>Shopping Cart</h2>
                        </div>
                        <div className='cart-view-column'>
                        {
                            cartItems.map((item, index)=>
                            ( <div className='sc-list-item' key={index}>
                                <div className='sz-list-item-image'>
                                    <img src={item.img}></img>
                                </div>
                                <div className='sc-list-item-overwrap'>
                                    <div className='sc-item-content-group'>
                                        <div className='sc-item-responsive-grid'>
                                            <div className='item-product-title-content'>
                                                <div className='item-product-title'>{item.name}</div>
                                                <div className='item-product-creator'>by GOBBLERIGHT</div>
                                            </div>
                                            <div className='sc-responsive-grid'>
                                                <div className='presentation a-color-primory'><span>In stock</span></div>
                                                <div className='presentation'><span>Sold by <span className='a-color-secondary'>EVELYN TRADING PRIVATE LIMITED</span></span></div>
                                                <div className='presentation'><span>Gift option not available.<span className='a-color-secondary'>Learn more</span></span></div>
                                            </div>
                                        </div>
                                        <div className='sc-item-price-block'>
                                            <div className='sc-badge-price'>₹{item.price.toFixed(2)}</div>
                                            <div className='sc-coupon-badge'>
                                                <div className='sc-item-save-block'>
                                                    <div className='sc-item-save'>Save 2%</div>
                                                    <KeyboardArrowDownIcon sx={{fontSize:'27px'}}/>
                                                </div>
                                                <div className='sc-collect-coupon-link'>
                                                    <span className='a-color-secondary'>Collect Coupons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sc-action-link'>
                                        <div className='sc-action-separate'>
                                            <IconButton onClick={()=>handleDecrease(item.id)}><DeleteOutlineOutlinedIcon sx={{fontSize:'18px', fontWeight:"600"}}/></IconButton>
                                            <span className='item-quantity' style={{fontSize:'14px', fontWeight:'600'}}>{item.quantity}</span>
                                            <IconButton onClick={()=>handleIncrease(item.id)}><AddOutlinedIcon sx={{fontSize:'18px'}}/></IconButton>

                                        </div>
                                        <div className='sc-action-delete-active'>
                                           <button disabled={itemRemoving} className='action delete_active a-color-secondary' onClick={()=>handleRemove(item.id)} role='button' tabIndex={0} onKeyDown={(e)=>"Enter" && handleRemove(item.id)}>Delete</button>
                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <button className='action save_active a-color-secondary' onClick={()=>handleSaved(item.id)}>Save for Later</button>
                                        </div><div className='sc-action-delete-active'>
                                            <button className='action seemore_active a-color-secondary'>See more like this</button>
                                        </div><div className='sc-action-delete-active'>
                                            <button className='action share_active a-color-secondary'>Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                            )
                        }

                            {/* <div className='sc-list-item'>
                                <div className='sz-list-item-image'>
                                    <img src='https://m.media-amazon.com/images/I/61PfzqnuqCL._AC_AA360_.jpg'></img>
                                </div>
                                <div className='sc-list-item-overwrap'>
                                    <div className='sc-item-content-group'>
                                        <div className='sc-item-responsive-grid'>
                                            <div className='item-product-title-content'>
                                                <div className='item-product-title'>GOBBLERIGHT Gluten-Free Almond Wraps + Chickpea Wraps Bundle | Vegan, Grain-Free, Low-Calorie Tortilla Wraps for Tacos, Burritos, Shawarma & Rolls | Healthy Keto Snacks | 12 Wraps, High Protein, Dairy-Free</div>
                                                <div className='item-product-creator'>by GOBBLERIGHT</div>
                                            </div>
                                            <div className='sc-responsive-grid'>
                                                <div className='presentation a-color-primory'><span>In stock</span></div>
                                                <div className='presentation'><span>Sold by <span className='a-color-secondary'>EVELYN TRADING PRIVATE LIMITED</span></span></div>
                                                <div className='presentation'><span>Gift option not available.<span className='a-color-secondary'>Learn more</span></span></div>
                                            </div>
                                        </div>
                                        <div className='sc-item-price-block'>
                                            <div className='sc-badge-price'>₹748.00</div>
                                            <div className='sc-coupon-badge'>
                                                <div className='sc-item-save-block'>
                                                    <div className='sc-item-save'>Save 2%</div>
                                                    <KeyboardArrowDownIcon sx={{fontSize:'27px'}}/>
                                                </div>
                                                <div className='sc-collect-coupon-link'>
                                                    <span className='a-color-secondary'>Collect Coupons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sc-action-link'>
                                        <div className='sc-action-separate'>
                                            <DeleteOutlineOutlinedIcon sx={{fontSize:'20px'}}/>
                                            <span className='item-quantity' style={{fontSize:'14px', fontWeight:'600'}}>2</span>
                                            <AddOutlinedIcon sx={{fontSize:'20px'}}/>

                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Delete</span>
                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Save for Later</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>See more like this</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sc-list-item'>
                                <div className='sz-list-item-image'>
                                    <img src='https://m.media-amazon.com/images/I/61PfzqnuqCL._AC_AA360_.jpg'></img>
                                </div>
                                <div className='sc-list-item-overwrap'>
                                    <div className='sc-item-content-group'>
                                        <div className='sc-item-responsive-grid'>
                                            <div className='item-product-title-content'>
                                                <div className='item-product-title'>GOBBLERIGHT Gluten-Free Almond Wraps + Chickpea Wraps Bundle | Vegan, Grain-Free, Low-Calorie Tortilla Wraps for Tacos, Burritos, Shawarma & Rolls | Healthy Keto Snacks | 12 Wraps, High Protein, Dairy-Free</div>
                                                <div className='item-product-creator'>by GOBBLERIGHT</div>
                                            </div>
                                            <div className='sc-responsive-grid'>
                                                <div className='presentation a-color-primory'><span>In stock</span></div>
                                                <div className='presentation'><span>Sold by <span className='a-color-secondary'>EVELYN TRADING PRIVATE LIMITED</span></span></div>
                                                <div className='presentation'><span>Gift option not available.<span className='a-color-secondary'>Learn more</span></span></div>
                                            </div>
                                        </div>
                                        <div className='sc-item-price-block'>
                                            <div className='sc-badge-price'>₹748.00</div>
                                            <div className='sc-coupon-badge'>
                                                <div className='sc-item-save-block'>
                                                    <div className='sc-item-save'>Save 2%</div>
                                                    <KeyboardArrowDownIcon sx={{fontSize:'27px'}}/>
                                                </div>
                                                <div className='sc-collect-coupon-link'>
                                                    <span className='a-color-secondary'>Collect Coupons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sc-action-link'>
                                        <div className='sc-action-separate'>
                                            <DeleteOutlineOutlinedIcon sx={{fontSize:'20px'}}/>
                                            <span className='item-quantity' style={{fontSize:'14px', fontWeight:'600'}}>2</span>
                                            <AddOutlinedIcon sx={{fontSize:'20px'}}/>

                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Delete</span>
                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Save for Later</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>See more like this</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sc-list-item'>
                                <div className='sz-list-item-image'>
                                    <img src='https://m.media-amazon.com/images/I/61PfzqnuqCL._AC_AA360_.jpg'></img>
                                </div>
                                <div className='sc-list-item-overwrap'>
                                    <div className='sc-item-content-group'>
                                        <div className='sc-item-responsive-grid'>
                                            <div className='item-product-title-content'>
                                                <div className='item-product-title'>GOBBLERIGHT Gluten-Free Almond Wraps + Chickpea Wraps Bundle | Vegan, Grain-Free, Low-Calorie Tortilla Wraps for Tacos, Burritos, Shawarma & Rolls | Healthy Keto Snacks | 12 Wraps, High Protein, Dairy-Free</div>
                                                <div className='item-product-creator'>by GOBBLERIGHT</div>
                                            </div>
                                            <div className='sc-responsive-grid'>
                                                <div className='presentation a-color-primory'><span>In stock</span></div>
                                                <div className='presentation'><span>Sold by <span className='a-color-secondary'>EVELYN TRADING PRIVATE LIMITED</span></span></div>
                                                <div className='presentation'><span>Gift option not available.<span className='a-color-secondary'>Learn more</span></span></div>
                                            </div>
                                        </div>
                                        <div className='sc-item-price-block'>
                                            <div className='sc-badge-price'>₹748.00</div>
                                            <div className='sc-coupon-badge'>
                                                <div className='sc-item-save-block'>
                                                    <div className='sc-item-save'>Save 2%</div>
                                                    <KeyboardArrowDownIcon sx={{fontSize:'27px'}}/>
                                                </div>
                                                <div className='sc-collect-coupon-link'>
                                                    <span className='a-color-secondary'>Collect Coupons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sc-action-link'>
                                        <div className='sc-action-separate'>
                                            <DeleteOutlineOutlinedIcon sx={{fontSize:'20px'}}/>
                                            <span className='item-quantity' style={{fontSize:'14px', fontWeight:'600'}}>2</span>
                                            <AddOutlinedIcon sx={{fontSize:'20px'}}/>

                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Delete</span>
                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Save for Later</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>See more like this</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sc-list-item'>
                                <div className='sz-list-item-image'>
                                    <img src='https://m.media-amazon.com/images/I/61PfzqnuqCL._AC_AA360_.jpg'></img>
                                </div>
                                <div className='sc-list-item-overwrap'>
                                    <div className='sc-item-content-group'>
                                        <div className='sc-item-responsive-grid'>
                                            <div className='item-product-title-content'>
                                                <div className='item-product-title'>GOBBLERIGHT Gluten-Free Almond Wraps + Chickpea Wraps Bundle | Vegan, Grain-Free, Low-Calorie Tortilla Wraps for Tacos, Burritos, Shawarma & Rolls | Healthy Keto Snacks | 12 Wraps, High Protein, Dairy-Free</div>
                                                <div className='item-product-creator'>by GOBBLERIGHT</div>
                                            </div>
                                            <div className='sc-responsive-grid'>
                                                <div className='presentation a-color-primory'><span>In stock</span></div>
                                                <div className='presentation'><span>Sold by <span className='a-color-secondary'>EVELYN TRADING PRIVATE LIMITED</span></span></div>
                                                <div className='presentation'><span>Gift option not available.<span className='a-color-secondary'>Learn more</span></span></div>
                                            </div>
                                        </div>
                                        <div className='sc-item-price-block'>
                                            <div className='sc-badge-price'>₹748.00</div>
                                            <div className='sc-coupon-badge'>
                                                <div className='sc-item-save-block'>
                                                    <div className='sc-item-save'>Save 2%</div>
                                                    <KeyboardArrowDownIcon sx={{fontSize:'27px'}}/>
                                                </div>
                                                <div className='sc-collect-coupon-link'>
                                                    <span className='a-color-secondary'>Collect Coupons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sc-action-link'>
                                        <div className='sc-action-separate'>
                                            <DeleteOutlineOutlinedIcon sx={{fontSize:'20px'}}/>
                                            <span className='item-quantity' style={{fontSize:'14px', fontWeight:'600'}}>2</span>
                                            <AddOutlinedIcon sx={{fontSize:'20px'}}/>

                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Delete</span>
                                        </div>
                                        <div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Save for Later</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>See more like this</span>
                                        </div><div className='sc-action-delete-active'>
                                            <span className='action delete_active a-color-secondary'>Share</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className='a-fixed-right-grid-col'>
                        <div className='sc-buy-box'>
                            <div className='buy_box_body'>
                                <form id='gutterCartViewForm'>
                                    <div className='buy-box-group'>
                                        <div className='box-innner-container'>
                                            <div className='a-icon-alert'>
                                                <CheckCircleIcon sx={{ fontSize: '20px', color: 'green' }} />
                                            </div>
                                            <div className='a-alert-content'>
                                                <span className='alertContent1'>Part of your order qualifies for FREE Delivery.</span>
                                                <span className='alertContent2'>"Choose"<a href='#'>FREE DELIVERY</a>option at checkout.</span>
                                            </div>
                                        </div>
                                        <div className='sc-buy-box-inner-box'>
                                            <h3 className='buy-box-subtotal'>
                                                <div className='subtotal-buy-box'>
                                                    <span className='subtotal-buy-box-item-numbers'>Subtotal({cartItems.length})</span>
                                                    <span className='subtotal-amount-buy-box'>:&nbsp;
                                                        <span className='subtotal-price'>₹ {subtotal.toLocaleString("en-In", {
                                                            minimumFractionDigits:2,
                                                            maximunFractionDigits:2
                                                        })}</span>
                                                    </span>
                                                </div>
                                            </h3>
                                        </div>
                                        <div className='cart-gift'>
                                            <div className='checkbox-fancy'>
                                                <label className='checkbox-fancy-label'>
                                                    <input type='checkbox' className='buy-box-gift-checkbox'></input>
                                                    <span className='checkbox-label'>This order contains a gift</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='Proceed-to-checkout-buttons'>
                                            <div className='proceed-buy-box-button'>
                                                <span>Proceed to Buy</span>
                                            </div>
                                        </div>
                                        <div className='Buybox-emi'>
                                            <div className='expander-prompt'>
                                                <span>EMI Available</span>
                                                <KeyboardArrowDownIcon sx={{ fontSize: '28px' }} />
                                            </div>
                                            <div className='expander-content'>
                                                Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='sc-buy-box2'>hello ji my name isjnknkrv</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer
