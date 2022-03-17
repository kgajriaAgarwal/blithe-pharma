import React from 'react';
import './CategoryCard.css';

const CategoryCard = (props) =>{
    return(
        <div className="card-container card-shadow">
            <img src={props.img} className="card-img" alt="card-img"/>
            <div className="card-content-container">
                <p className="text-sm card-des">{props.title}</p>
                <p className='text-xs card-des'>{props.description}</p>
                <div className="flex-content">
                    <a href="../Product_Listing/Product_Listing.html">
                        <button className="btn card-btn card-btn-text explore-btn"><span className='text-lg'>Explore More..</span></button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;