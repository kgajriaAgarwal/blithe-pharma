import React from 'react';
import Image from '../Image/Image';
import './HorizontalProductCard.css';
import ratingIcon from '../../Assets/Icons/rating-icon.png' 

const HorizontalProductCard = () => {
    return(
        <div className="card-flex">
            <div className="card-main-horizontal card-shadow">
                <div className="card-container-horizontal">
                    <div className="card-container-horizontal-img-heading">
                        <div className="card-container-horizontal-img">
                            <Image src="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601318110/cropped/f4gr0qxuu6vfecw1yefq.jpg" className="card-img" alt="card-img"/>
                        </div>
                        <div className="card-desc-horizontal">
                            <p className="text-sm card-des">Card title</p>
                            <p className='text-xs card-des'>Card description is here.</p>
                            <h6>features</h6>
                            <ul>
                                <li>feature 1</li>
                                <li>feature 2</li>
                                <li>feature 3</li>
                                <li>feature 4</li>
                            </ul>
                            <div className="star-rating">
                                <label className='text-xs rating'>4.2<Image src={ratingIcon} alt="ratings"/></label>
                                <p className='text-xs'>(192 ratings)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-content horizontal-card-flex-content">
                        <div className="flex-content">
                            <div className="price-div">
                                <p className=" test-xxs mrp-lbl">MRP.</p>
                                <span className="price-lbl price-wrong">₹79</span>
                                <span className="price-lbl price-right">20% off</span>
                            </div>
                            <p className='sprice'><small>₹</small>299</p>
                            <div className="card-btn-container">
                                <button className="card-btn">
                                    <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
                                        className="icon-btn-img" alt="icon-btn-img" />
                                </button>
                                <button className="card-btn card-btn-text">Remove from cart</button>
                                <div className="qty-container">
                                    <button className="qty-btn">-</button>
                                    <span className='text-sm'>2</span>
                                    <button className="qty-btn">+</button>
                                </div>
                            </div>
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorizontalProductCard;