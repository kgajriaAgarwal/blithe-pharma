import react from 'react';
import { Image } from '../../Shared';
import './SingleProduct.css';
import ratingIcon from '../../Assets/Icons/rating-icon.png' 

const SingleProduct = () =>{
    return(
        <>  
            <div className="col-12 product-main-container">
                <div className="col-10 product-sub-container">
                    
                    {/* <!-- LEFT CONTAINER - PRODUCTS IN THE CART --> */}
                    <div className="col-9 left-container-product">
                        <Image src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643642689_Cart_Bannersip.jpg" alt="banner"/>

                        <div className="product-container">

                            <div className="col-6 main-image-conatiner">
                                <div className="col-3 images-container">
                                    <Image src="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg" alt="product-img"/>
                                    <Image src="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg" alt="product-img"/>
                                    <Image src="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg" alt="product-img"/>
                                    <Image src="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg" alt="product-img"/>
                                </div>
                                <Image src="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg" alt="product-img" className="col-9"/>
                            </div>

                            <div className="col-6 product-details">
                                <p className='heading-md'>Product title here</p>
                                <p className='text-sm'>Category - supplements</p>

                                <div className="star-rating">
                                    <label className='text-xs rating'>4.5<Image src={ratingIcon} alt="ratings"/></label>
                                    <p className='text-xs'>(1015 reviews)</p>
                                </div>
                                <p className='text-sm'><b>Product highlights</b></p>
                                <ul>
                                    <li>Helps to reduce calcium deficiency in bones</li>
                                    <li>Contains Vitamin D3 which improves the absorption of calcium</li>
                                    <li>Aids in treating and managing osteoporosis and postmenopausal-phase osteoporosis</li>
                                    <li>Helps to prevent calcium deficiency in pregnancy and lactating mothers</li>
                                </ul>

                                <div className="price-container">    
                                    <div className="price-div">
                                        <p className=" test-xxs mrp-lbl">MRP.</p>
                                        <span className="price-lbl price-wrong">₹100</span>
                                        <span className="price-lbl price-right">20% off</span>
                                    </div>
                                    <div className="vertical-card-flex-content">
                                        <p className='heading-md'>Discounted price : <small>₹</small>80</p>
                                        
                                    </div>
                                    <div className="card-btn-container">
                                        <button className="btn btn-primary" 
                                            // onClick={() => {
                                            //     addToWishlist(props?.product);
                                            // }}
                                        >
                                            Add to wishlist
                                        </button>
                                        <button className="btn btn-primary"
                                            // onClick={() => {
                                            //     addToCart(props?.product);
                                            // }}
                                        >Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr/>

                        <p>Customer reviews and ratings</p>
                        {/* <!-- rating --> */}
                        <div id="rating" className="col-12 component-container">
                            <div className='card-flex'>
                                <div className="rating-container">                    
                                    <div className='star-rating'>
                                        <p className="heading-md">User Rating</p>
                                        <img src={ratingIcon}/>
                                        <img src={ratingIcon}/>
                                        <img src={ratingIcon}/>
                                        <img src={ratingIcon}/>
                                        <img src={ratingIcon}/>
                                    </div>
                                    <p className='text-sm'>4.1 average based on 254 reviews.</p>
                                    <hr/>
                                    <div className="star-rating-container">
                                        <div className="side">
                                        <div>5 star</div>
                                        </div>
                                        <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-5"></div>
                                        </div>
                                        </div>
                                        <div className="side right">
                                        <div>150</div>
                                        </div>
                                        <div className="side">
                                        <div>4 star</div>
                                        </div>
                                        <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-4"></div>
                                        </div>
                                        </div>
                                        <div className="side right">
                                        <div>63</div>
                                        </div>
                                        <div className="side">
                                        <div>3 star</div>
                                        </div>
                                        <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-3"></div>
                                        </div>
                                        </div>
                                        <div className="side right">
                                        <div>15</div>
                                        </div>
                                        <div className="side">
                                        <div>2 star</div>
                                        </div>
                                        <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-2"></div>
                                        </div>
                                        </div>
                                        <div className="side right">
                                        <div>6</div>
                                        </div>
                                        <div className="side">
                                        <div>1 star</div>
                                        </div>
                                        <div className="middle">
                                        <div className="bar-container">
                                            <div className="bar-1"></div>
                                        </div>
                                        </div>
                                        <div className="side right">
                                        <div>20</div>
                                        </div>
                                    </div>                
                                </div>
                            </div>  
                        </div>
                        
                        
                        {/* <p className="text-lg prscptn-not-required-text">Items NOT Requiring Prescription (2)</p> */}                       
                        {/* <!-- SEPERATOR --> */}
                        {/* <hr className="solid separator"/>
                        <p className="text-lg prscptn-required-text">Items Requiring Prescription (2)</p>
                        
                        
                        {/* <!-- suggested products conatiner --> */}
                        {/* <p className="heading-md">{cartData.length<1?'Suggested products':'Customers who bought above items also bought..'}</p>
                        <div className="col-12 suggested-pdcts-conatiner">
                        {featured_products.length?
                            featured_products.map(item=>
                                <ProductCard 
                                    key={item.id}
                                    product = {item} 
                                />
                            )
                        :null}    
                        </div> */}

                    </div>

                    {/* <!-- RIGHT CONATINER - SUBTOTAL --> */}
                    <div className="right-container">
                        <div className="col-12 product-right-container">
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
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;