import React from 'react';
// import Badge from '../Badge/Badge';
import { Badge } from '../Badge/Badge'; 
import ratingIcon from '../../Assets/Icons/rating-icon.png' 
import './ProductCard.css'
import { useCart, useWishlist } from '../../Context';


export const ProductCard = (props) => {

    const { cartProducts, addToCart } = useCart();
    const { wishlistProducts, addToWishlist } = useWishlist();
    const auth = localStorage.getItem("token"); 

    return(
        <>
            <div className="card-container card-shadow">
                <img src={props?.product?.img ?? '-'}
                    className="card-img" alt="card-img"/>
                    {props?.product?.prdctBadge?<Badge prdctBadge={props.product.prdctBadge}/>:null}
                <div className="card-content-container">
                    <p className="text-sm card-des">{props?.product?.title ?? '-'}</p>
                    <p className='text-xs card-des'>{props?.product?.description ?? '-'}</p>
                    <div className="star-rating">
                        <label className='text-xs rating'>{props?.product?.ratings ?? '-'}<img src={ratingIcon} alt="ratings"/></label>
                        <p className='text-xs'>({props?.product?.reviews ?? '-'} reviews)</p>
                    </div>
                    <div className="price-div">
                        <p className=" test-xxs mrp-lbl">MRP.</p>
                        <span className="price-lbl price-wrong">₹{props?.product?.mrp ?? '-'}</span>
                        <span className="price-lbl price-right">{props?.product?.discount ?? '-'}% off</span>
                    </div>
                    <div className="vertical-card-flex-content">
                        <p className='sprice'><small>₹</small>{props?.product?.mrp && props?.product?.discount ? props.product.mrp-(props.product.mrp * (props.product.discount/100)): '-'}</p>
                        <div className="card-btn-container">
                            <button className="card-btn" onClick={() => {
                                    addToWishlist(props?.product);
                                  }}>
                                <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" className="icon-btn-img"
                                    alt="icon-btn-img" />
                            </button>
                            <button className="card-btn card-btn-text add-to-cart"
                                onClick={() => {
                                    addToCart(props?.product);
                                  }}
                            >Add to cart</button>
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    );
}

// export default ProductCard