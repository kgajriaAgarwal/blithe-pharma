import React from 'react';
import Badge from '../Badge/Badge';
import ratingIcon from '../../Assets/Icons/rating-icon.png' 
import './ProductCard.css'

const ProductCard = (props) => {
    console.log("props:", props);
    return(
        <>
            <div className="card-container card-shadow">
                <img src={props?.product?.img ?? '-'}
                    className="card-img" alt="card-img"/>
                    <Badge prdctBadge={props.product.prdctBadge}/>
                <div className="card-content-container">
                    <p className="text-sm card-des">{props?.product?.title ?? '-'}</p>
                    <p className='text-xs card-des'>{props?.product?.description ?? '-'}</p>
                    <div className="star-rating">
                        <label className='text-xs rating'>{props?.product?.reviews ?? '-'}<img src={ratingIcon} alt="ratings"/></label>
                        <p className='text-xs'>({props?.product?.ratings ?? '-'} ratings)</p>
                    </div>
                    <div className="price-div">
                        <p className=" test-xxs mrp-lbl">MRP.</p>
                        <span className="price-lbl price-wrong">₹{props?.product?.mrp ?? '-'}</span>
                        <span className="price-lbl price-right">{props?.product?.discount ?? '-'}% off</span>
                    </div>
                    <div className="flex-content">
                        <p className='sprice'><small>₹</small>{props?.product?.mrp && props?.product?.discount ? props.product.mrp-(props.product.mrp * (props.product.discount/100)): '-'}</p>
                        <div className="card-btn-container">
                            <button className="card-btn">
                                <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" className="icon-btn-img"
                                    alt="icon-btn-img" />
                            </button>
                            <button className="card-btn card-btn-text add-to-cart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default ProductCard