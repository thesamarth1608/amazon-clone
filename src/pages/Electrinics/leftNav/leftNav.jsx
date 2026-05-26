import React, { useState } from 'react'
import './leftNav.css'
import CheckBox from '../../../components/CheckBox/CheckBox';

const leftNav = () => {
    const [checked, setChecked] = useState(true);
    return (
        <div className='leftNav'>
            <div className='a-section'>
                <div className='n-title'>
                    <h1>Category</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'>
                        <span className='a-list-item1'>Electronics</span>
                    </li>
                    <li className='a-spacing-micro'>
                        <span className='a-list-item'>Accessories</span>
                    </li>
                    <li className='a-spacing-micro'>
                        <span className='a-list-item'>Cameras & Photography</span>
                    </li>
                    <li className='a-spacing-micro'>
                        <span className='a-list-item'>Home Theater & TV</span>
                    </li>
                    <li className='a-spacing-micro'>
                        <span className='a-list-item'>Tablets</span>
                    </li>
                    <li className='a-spacing-micro'>
                        <span className='a-list-item'>Telephones & Accessories</span>
                    </li>
                </ul>
            </div>
            <div className='a-section'>
                <div className='n-title'>
                    <h1>Amazon Prime</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'>
                         <CheckBox label="Prime"/>
                    </li>
                </ul>
            </div>
            <div className='a-section'>
                <div className='n-title'>
                    <h1>Delivery</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'>
                        <label className='a-checkbox'>
                        <CheckBox label="Get It Today"/>
                        </label>
                    </li>
                    <li className='a-spacing-micro'>
                        <label className='a-checkbox'>
                        <CheckBox label="Get it by Tomorrow"/>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='a-section'>
                <div className='n-title'>
                    <h1>Customer Reviews</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'></li>
                </ul>
            </div>
             <div className='a-section'>
                <div className='n-title'>
                    <h1>Item Condition</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'>
                        <label className='a-checkbox'>
                        <CheckBox label="New"/>
                        </label>
                    </li>
                    <li className='a-spacing-micro'>
                        <label className='a-checkbox'>
                        <CheckBox label="Renew"/>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='a-section'>
                <div className='n-title'>
                    <h1>Price</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>Under ₹1,000</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>₹1,000 - ₹5,000</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>₹1,000 - ₹5,000</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>₹1,000 - ₹5,000</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>Over ₹20,000</div></li>
                </ul>
            </div>
            <div className='a-section'>
                <div className='n-title'>
                    <h1>Discount</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>10% Off or more</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>25% Off or more</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>35% Off or more</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>60% Off or more</div></li>
                    <li className='a-spacing-micro'><div className='aok-offscreen'>70% Off or more</div></li>
                </ul>
            </div>
            <div className='a-section'>
                <div className='n-title'>
                    <h1>Pay On Delivery</h1>
                </div>
                <ul className='a-unordered-list'>
                    <li className='a-spacing-micro'>
                        <label className='a-checkbox'>
                        <CheckBox label="Eligible for Pay On Delivery"/>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default leftNav
