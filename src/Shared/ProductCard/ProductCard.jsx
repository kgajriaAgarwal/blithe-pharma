import React from 'react';
import Badge from '../Badge/Badge';
import ratingIcon from '../../Assets/Icons/rating-icon.png' 

const ProductCard = (props) => {
    return(
        <>
            <div className="card-container card-shadow">
                <img src={props.img}
                    className="card-img" alt="card-img"/>
                    <Badge prdctBadge={props.prdctBadge}/>
                {/* <span className="badge badge-new">{props.prdctBadge}</span> */}
                <div className="card-content-container">
                    <p className="text-sm card-des">{props.title}</p>
                    <p className='text-xs card-des'>{props.description}</p>
                    <div className="star-rating">
                        <label className='text-xs rating'>{props.reviews}<img src={ratingIcon} alt="ratings"/></label>
                        <p className='text-xs'>({props.ratings} ratings)</p>
                    </div>
                    <div className="price-div">
                        <p className=" test-xxs mrp-lbl">MRP.</p>
                        <span className="price-lbl price-wrong">₹{props.mrp}</span>
                        <span className="price-lbl price-right">{props.discount}% off</span>
                    </div>
                    <div className="flex-content">
                        <p className='sprice'><small>₹</small>{props.mrp-(props.mrp * (props.discount/100))}</p>
                        <div className="card-btn-container">
                            <button className="card-btn">
                                <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" className="icon-btn-img"
                                    alt="icon-btn-img" />
                            </button>
                            <button className="card-btn card-btn-text">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default ProductCard