import React, { useEffect, useState } from 'react';
import './Cart.css';    
import axios from 'axios';
import { HorizontalProductCard, ProductCard, Image , Header  } from '../../Shared';
import { useCart } from '../../Context';


const Cart = () => {

    const [cartData, setCartData] = useState([]);
    const auth = localStorage.getItem("token"); 
    const {cartProducts, removeFromCart} = useCart();
    const [mrpTotal, setMrpTotal] = useState(0)
    const [discountTotal, setDiscountTotal] = useState(0); 
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

    const getCartProducts = async () => {
        try {
          const response = await axios.get('/api/user/cart', { headers: { authorization: auth } });
          if(response.status === 200){
            //REMOVE DUPLICATE ENTRIES
            const uniqueIds = [];
    
            const unique = response?.data?.cart.filter(element => {
                const isDuplicate = uniqueIds.includes(element.id);
    
                if (!isDuplicate) {
                    uniqueIds.push(element.id);
                    return true;
                }
            });        
           
            const fltData = unique.filter(item => item.qty > 0)
            setCartData([...fltData])
          }
        } catch (error) {
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
        }
      }
    

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getCartProducts();
        setMrpTotal(cartProducts.reduce((acc, cVal)=> acc+= (cVal.mrp * cVal.qty), 0));
        setDiscountTotal(cartProducts.reduce((acc, cVal)=> acc+= ((cVal.mrp * (cVal.discount/100)) * cVal.qty) , 0))
    }, [cartProducts]);

    return(
        <>
            
            <div className="col-12 cart-main-container">
                <div className="col-10 cart-sub-container">
                    <p className='heading-md align-left'>Your cart</p>
                    
                    {/* <!-- LEFT CONTAINER - PRODUCTS IN THE CART --> */}
                    <div className="col-9 left-container-cart">
                        <Image src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643642689_Cart_Bannersip.jpg" alt="banner"/>
                        
                        { cartData && cartData.length ?
                            cartData.map(item => <HorizontalProductCard  key ={item._id} item = {item}  module="cart"/>)
                        :<p className="cart-empty">Cart is Empty...</p>}

                        
                        {/* <p className="text-lg prscptn-not-required-text">Items NOT Requiring Prescription (2)</p> */}                       
                        {/* <!-- SEPERATOR --> */}
                        {/* <hr className="solid separator"/>
                        <p className="text-lg prscptn-required-text">Items Requiring Prescription (2)</p>
                        
                        
                        {/* <!-- suggested products conatiner --> */}
                        <p className="heading-md">{cartData.length<1?'Suggested products':'Customers who bought above items also bought..'}</p>
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
                                <td>₹{mrpTotal}</td>
                                </tr>
                                <tr>
                                <td>Blithe discount</td>
                                {/* //(mrp * (discount/100) */}
                                <td>₹{discountTotal}</td>
                                </tr>
                                <tr>
                                <td>Total amount *</td>
                                <td>₹{ mrpTotal > discountTotal? mrpTotal - discountTotal : 0}</td>
                                </tr>
                            </table>                      
                            {/* <label className="text-sm lbl-total-savings">Total savings ₹{discount_total}</label> */}
                            <div className="final-payment-amount">
                                <div>
                                    <label>Total amount</label>
                                    <p className="heading-md">₹{ mrpTotal > discountTotal? mrpTotal - discountTotal : 0}</p>
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