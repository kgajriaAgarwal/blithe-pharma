import React from 'react';
import Image from '../Image/Image';
import './HorizontalProductCard.css';
import ratingIcon from '../../Assets/Icons/rating-icon.png' 
import { calc_sp } from '../../Helpers/Utils';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';

const HorizontalProductCard = ( props) => {

    // console.log("Props..", props)
    const {item} = props;
    console.log(item);
    const {cartProducts, addToCart, removeFromCart, changeCartQty} = useCart();
    const {addToWishlist , removeFromWislist} = useWishlist();


    return(
        <div className="card-flex">
            <div className="card-main-horizontal card-shadow">
                <div className="card-container-horizontal">
                    <div className="card-container-horizontal-img-heading">
                        <div className="card-container-horizontal-img">
                            <Image src={item.img} className="card-img" alt="card-img"/>
                        </div>
                        <div className="card-desc-horizontal">
                            <p className="text-sm card-des">{item.title}</p>
                            <p className='text-xs card-des'>{item.description}</p>
                            {/* <h6>features</h6>
                            <ul>
                                <li>feature 1</li>
                                <li>feature 2</li>
                            </ul> */}
                            <div className="star-rating">
                                <label className='text-xs rating'>{item.ratings}<Image src={ratingIcon} alt="ratings"/></label>
                                <p className='text-xs'>({item.reviews} reviews)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-content horizontal-card-flex-content">
                        <div className="flex-content">
                            <div className="price-div">
                                <p className=" test-xxs mrp-lbl">MRP.</p>
                                <span className="price-lbl price-wrong">₹{item.mrp}</span>
                                <span className="price-lbl price-right">{item.discount}% off</span>
                            </div>
                            <p className='sprice'><small>₹</small>{calc_sp(item.mrp, item.discount)}</p>
                            <div className="card-btn-container">
                                <button className={`card-btn ${props.module==='wishlist'?'card-btn-text':''}`}  
                                    onClick={() => {
                                        props.module==='wishlist'? removeFromWislist(item) : addToWishlist(item)
                                      }}
                                    >
                                    {props.module==='cart'? 
                                    <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
                                        className="icon-btn-img" alt="icon-btn-img" />
                                    :''}
                                    {props.module==='wishlist'? 'Remove from wishlist':''}
                                </button>

                                <button className="card-btn card-btn-text"
                                    onClick={() => {
                                        props.module==='wishlist'? addToCart(item) : removeFromCart(item)
                                      }}
                                >{props.module==='wishlist'?'Add to Cart':'Remove from cart'}</button>

                                {props.module==='cart'?
                                <div className="qty-container">
                                    <button className="qty-btn"
                                        onClick={() => {
                                            changeCartQty("decrement",item._id);
                                          }}
                                    >-</button>
                                    <span className='text-sm'>{item.qty}</span>
                                    <button className="qty-btn"
                                        onClick={() => {
                                            changeCartQty("increment",item._id);
                                        }}
                                    >+</button>
                                </div>:''}

                            </div>
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorizontalProductCard;