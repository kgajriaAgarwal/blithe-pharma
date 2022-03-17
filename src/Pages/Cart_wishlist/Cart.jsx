import React from 'react';
import Header from '../../Shared/Header/Header';
import './Cart.css';  
import Image from '../../Shared/Image/Image';  
import { featuredProducts } from '../../Data';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import HorizontalProductCard from '../../Shared/HorizontalProductCard/HorizontalProductCard';

const Cart = () => {
    return(
        <>
            <Header/>
            
            <div className="col-12 cart-main-container">
                <div className="col-10 cart-sub-container">
                    <p className='heading-md align-left'>Your cart (4 items)</p>
                    {/* <!-- LEFT CONTAINER - PRODUCTS IN THE CART --> */}
                    <div className="col-9 left-container">
                        <Image src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643642689_Cart_Bannersip.jpg" alt="banner"/>
                        
                        <p className="text-lg prscptn-not-required-text">Items NOT Requiring Prescription (2)</p>
                        <HorizontalProductCard/>
                        <HorizontalProductCard/>
                       
                        {/* <!-- SEPERATOR --> */}
                        <hr className="solid separator"/>
                        <p className="text-lg prscptn-required-text">Items Requiring Prescription (2)</p>
                        <HorizontalProductCard/>
                        <HorizontalProductCard/>
                        
                        
                        {/* <!-- suggested products conatiner --> */}
                        <p className="heading-md">Customers who bought above items also bought..</p>
                        <div className="col-12 suggested-pdcts-conatiner">
                        {featuredProducts.length?
                            featuredProducts.map(item=>
                                <ProductCard 
                                    key={item.id}
                                    product = {item} 
                                />
                            )
                        :null}    
                        </div>

                    </div>

                    {/* <!-- RIGHT CONATINER - SUBTOTAL --> */}
                    <div className="right-container">
                        <div className="col-12 cart-right-container">
                            <a href="../AddressManagement/AddressManagement.html" className="btn btn-sm btn-primary col_12 d-flex">
                                <img src="https://cdn.pharmeasy.in/cms/delivery_image.png" className="icon-btn-img" alt="icon-btn-img" />
                                <span className="icon-btn-span">Add delivery address</span>
                            </a>
                            <a href="javascript:void(0)" className="btn btn-sm btn-primary col_12 d-flex">
                                <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" className="icon-btn-img" alt="icon-btn-img" />
                                <span className="icon-btn-span">Apply coupons / View offers</span>
                            </a>
                            <a href="javascript:void(0)" className="btn btn-sm btn-primary col_12 d-flex">
                                Free delivery with cart value above ₹500
                            </a>
                        </div>
                        <div className="col-12 cart-right-container payment-details">
                            <p className='text-sm'>Payment details</p>
                            {/* <!-- SEPERATOR --> */}
                            <hr className="solid separator"/>
                            <table>
                                <tr>
                                <td>MRP Total</td>
                                <td>₹525.00</td>
                                </tr>
                                <tr>
                                <td>Blithe discount</td>
                                <td>₹78.75</td>
                                </tr>
                                <tr>
                                <td>Total amount *</td>
                                <td>₹446.25</td>
                                </tr>
                            </table>                      
                            <label className="text-sm lbl-total-savings">Total savings ₹78.75</label>
                            <div className="final-payment-amount">
                                <div>
                                    <label>Total amount</label>
                                    <p className="heading-md">₹446.25</p>
                                </div>
                                <button className="btn btn-sm btn-primary">Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;