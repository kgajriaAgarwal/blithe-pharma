import React, {useState, useEffect} from 'react';
import './Cart.css'; 
import Header from '../../Shared/Header/Header';
import Image from '../../Shared/Image/Image';
import HorizontalProductCard from '../../Shared/HorizontalProductCard/HorizontalProductCard';
import { featuredProducts , offers } from '../../Data';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { useWishlist } from '../../Context/WishlistContext';
import axios from 'axios';

const Wishlist = () =>{

    const [wishlistData, setWishlistData] = useState([]);
    const auth = localStorage.getItem("token"); 
    const {wishlistProducts,
        removeFromWislist} = useWishlist();


    const getWishlistProducts = async () => {
        try {
            const response = await axios.get('/api/user/wishlist', { headers: { authorization: auth } });
            console.log(response);
            if(response.status === 200){
                setWishlistData(response.data.wishlist);
            }
        } catch (error) {
            console.error(error);
        }
        }

    useEffect(() => {
        getWishlistProducts();
        // setMrpTotal(cartData.reduce((acc, cVal)=> acc+= (cVal.mrp * cVal.qty), 0));
        // setDiscountTotal(cartData.reduce((acc, cVal)=> acc+= ((cVal.mrp * (cVal.discount/100)) * cVal.qty) , 0))
    }, [wishlistData]);

    console.log("wishlistData", wishlistData);

    return(
        <>
        <Header/>
        
        <div className="col-12 cart-main-container">
        <div className="col-10 cart-sub-container">
            <p className='heading-md align-left' >Your wishlist(4 items)</p>
            {/* <!-- LEFT CONTAINER - PRODUCTS IN THE CART --> */}
           <div className="col-9 left-container">
                        <Image src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643642689_Cart_Bannersip.jpg" alt="banner"/>
                        

                        {/* <p className="text-lg prscptn-not-required-text">Items NOT Requiring Prescription (2)</p>
                        <hr className="solid separator"/>
                        <p className="text-lg prscptn-required-text">Items Requiring Prescription (2)</p> */}
                        
                        { wishlistData && wishlistData.length ?
                            wishlistData.map(item => <HorizontalProductCard  key ={item.id} item = {item} module="wishlist"/>)
                        :<p className="cart-empty">Wishlist is Empty...</p>}
                        
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