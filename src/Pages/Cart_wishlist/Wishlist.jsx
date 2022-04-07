import React, {useState, useEffect} from 'react';
import './Cart.css'; 
import { offers } from '../../Data';
import { useWishlist } from '../../Context';
import axios from 'axios';
import { Header, Image , HorizontalProductCard, ProductCard } from '../../Shared';

const Wishlist = () =>{

    const [wishlistData, setWishlistData] = useState([]);
    const auth = localStorage.getItem("token"); 
    const {wishlistProducts,
        removeFromWislist} = useWishlist();
    const [ featured_products, setFeatured_products] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            if(response.status === 200){
                setFeatured_products( response.data.products.filter(product =>
                    product?.productStatus? product.productStatus === 'featured':''
                ))
              }else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }
        } catch (error) {
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
        }
    }

    const getWishlistProducts = async () => {
        try {
            const response = await axios.get('/api/user/wishlist', { headers: { authorization: auth } });
            if(response.status === 200){
                setWishlistData(response.data.wishlist);
                //REMOVE DUPLICATE ENTRIES
                const uniqueIds = [];
  
                const unique = response?.data?.wishlist?.filter(element => {
                    const isDuplicate = uniqueIds.includes(element.id);
  
                    if (!isDuplicate) {
                        uniqueIds.push(element.id);
                        return true;
                    }
                });                       
                setWishlistData([...unique])
                }
            } catch (error) {
                console.error(error);
            }
        }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(()=>
        getWishlistProducts()
    , [wishlistProducts])


    return(
        <>
        
        <div className="col-12 cart-main-container">
        <div className="col-10 cart-sub-container">
            <p className='heading-md align-left' >Your wishlist</p>
            {/* <!-- LEFT CONTAINER - PRODUCTS IN THE CART --> */}
           <div className="col-9 left-container-cart">
                        <Image src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643642689_Cart_Bannersip.jpg" alt="banner"/>
                        

                        {/* <p className="text-lg prscptn-not-required-text">Items NOT Requiring Prescription (2)</p>
                        <hr className="solid separator"/>
                        <p className="text-lg prscptn-required-text">Items Requiring Prescription (2)</p> */}
                        
                        { wishlistProducts && wishlistProducts.length ?
                            wishlistProducts.map(item => <HorizontalProductCard  key ={item.id} item = {item} module="wishlist"/>)
                        :<p className="cart-empty">Wishlist is Empty...</p>}
                        
                        {/* <!-- suggested products conatiner --> */}
                        <p className="heading-md">Customers who bought above items also bought..</p>
                        <div className="col-12 suggested-pdcts-conatiner">
                        {featured_products.length?
                            featured_products.map(item=>
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