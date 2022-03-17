import React from 'react';
import './Cart.css'; 
import Header from '../../Shared/Header/Header';
import Image from '../../Shared/Image/Image';
import HorizontalProductCard from '../../Shared/HorizontalProductCard/HorizontalProductCard';
import { featuredProducts , offers } from '../../Data';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const Wishlist = () =>{
    return(
        <>
        <Header/>
        
        <div className="col-12 cart-main-container">
        <div className="col-10 cart-sub-container">
            <p className='heading-md align-left' >Your wishlist(4 items)</p>
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

            {/* <!-- RIGHT CONATINER - Offers --> */}
            <div className="right-container">
                <div className="col-12 cart-right-container">

                    {offers.length?
                        offers.map((offer)=>
                            <div className="offer">
                                <Image src={offer.img} className="offer-img" alt="offer-img" />
                                <div className="offer-details">
                                    <label className='text-sm'>{offer.offerDesc ?? '-'}</label>
                                    <br/>
                                    <label className='text-xs'>{`${offer?.offerCode? offer.offerCode : '-' } | Expiry: ${offer.offerExpDate ?? '-'}`}</label>
                                </div>
                            </div>
                        )
                    :<p>No offers available </p>}      

                </div>
            </div>

        </div>
        </div>
        </>
    );
}

export default Wishlist;