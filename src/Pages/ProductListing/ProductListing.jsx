import React from 'react';
import './ProductListing.css'
import Header from '../../Shared/Header/Header';
import Image from '../../Shared/Image/Image';
import {categories,topCategories, featuredProducts, testimonials, steps, ratingsFilter} from '../../Data';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import InputField from '../../Shared/Input/InputField';

const ProductListing = () =>{
    return(
        <>
            <Header/>

            <Image 
                src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/p/u/pulse-oximeter_offer_1460x340.jpg"
                alt="featured-product-advertisment"
                className="col-12 featured-product-advertisment"
            />

            <div className="col-12 pl-main-container">
                
                <div className="col-10 pl-sub-container">            
                    {/* <!-- LEFT CONTAINER -FEATURED CATEGORIES& FILTERS --> */}
                    <div className="col-3 left-container">

                        {/* <!-- CATEGORIES --> */}
                        <p className="heading-md heading">Categories</p>
                        <div className="col-12 categories-list">
                            <ul>
                                {categories.length?
                                    categories.map((cVal,cIndx) =>
                                        <li key={cIndx}>{cVal.title}</li>
                                    )
                                :null}
                            </ul>
                        </div>

                        <p className="heading-md heading">Filters</p>
                        {/* <!-- SEPERATOR --> */}
                        <hr className="solid separator"/>
                        

                        {/* <!-- FILTERS --> */}
                        <p className="text-lg heading">Brands</p>
                        <div className="col-12 filters-container">
                            <InputField 
                                type='text'
                                title='Brand Name'
                                name='brandName'
                                placeholder='Enter brand name..'
                                // value={}
                                //onChange={}
                            />

                            <div className="col-12 brands-container">
                            {categories[1]?.brandfilters?.length?
                                    categories[1].brandfilters.map((cVal,cIndx) =>
                                        <div key={cIndx} className="col-12 brand-filter-container">
                                            <input type="checkbox"/>
                                            <label className="text-xs lbl-brandname">{cVal}</label>
                                            <label className="lbl-count">5</label>
                                        </div>
                                    )
                                :null}
                            </div>
                        </div>

                        {/* <!-- SEPERATOR --> */}
                        <hr className="solid separator"/>

                        {/* <!-- PRODUCT TAGS --> */}
                        <p className="text-lg heading">Product tags</p>
                        <div className="col-12 filters-container">                    
                            <InputField 
                                type='text'
                                title='Product tag'
                                name='productTag'
                                placeholder='Enter product tag..'
                                // value={}
                                //onChange={}
                            />
                            
                            <div className="col-12 prdct-tag-container">
                                    {categories[1]?.productTags?.length?
                                        categories[1].productTags.map((cVal,cIndx) =>
                                        <div key={cIndx} className="col-12 prdct-tag-filter-container">
                                            <input type="checkbox"/>
                                            <label className="text-xs lbl-prdct-tag">{cVal}</label>
                                            <label className="lbl-count">5</label>
                                        </div>
                                        )
                                    :null}
                            </div>
                        </div>

                        {/* <!-- SEPERATOR --> */}
                        <hr className="solid separator"/>

                        {/* <!-- PRICE FILTER --> */}
                        <p className="text-lg heading">Price</p>
                        <div className="col-12 filters-container">
                            <div className="price-filter">
                                <input className="radio-btn" type="radio"/>
                                <label className="lbl-price">Low To High</label>
                            </div>
                            <div className="price-filter">
                                <input className="radio-btn" type="radio"/>
                                <label className="lbl-price">High To Low</label>
                            </div>
                        </div>

                        {/* <!-- SEPERATOR --> */}
                        <hr className="solid separator"/>

                        {/* <!-- RATINGS FILTER --> */}
                        <p className="text-lg heading">Ratings</p>
                        <div className="col-12 filters-container">
                            {Object.keys(ratingsFilter).length?
                                    Object.keys(ratingsFilter).map(key=>
                                        <div className="ratings-filter">
                                            <input className="radio-btn" type="radio"/>
                                            <label className="lbl-price">{ratingsFilter[key]}</label>
                                        </div>
                                        )
                                :null}   
                        </div>
                    </div>

                    {/* <!-- RIGHT CONATINER - PRODUCTS --> */}
                    <div className="col-9 right-container">
                        <div className='right-container-header'>
                            <p className="text-sm breadcrumb">{`HomeOTC > CategoriesDiabetesDevicesBlood > Glucose > Monitors`}</p>
                            <button className="btn btn-sm btn-primary clear-filter-btn">Clear all filters</button>
                        </div>
                        {/* <!-- FILTER -CHIPS --> */}
                        <div className="col-10 chips-container">
                            <div className="chip-word-flex">
                                <p className="chip-word">Accu-check<button className="cross-btn">X</button></p>
                                <p className="chip-word">Rs 500<button className="cross-btn">X</button></p>
                                <p className="chip-word">4 star rating plus<button className="cross-btn">X</button></p>
                            </div>
                            <input className="chip-search" placeholder="search here"></input>
                        </div>

                        {/* <!-- FILTERED products --> */}
                        <div className="col-12 flex-container-row filtered-prdcts">
                            {featuredProducts.length?
                                    featuredProducts.map(item=>
                                        <ProductCard
                                            product = {item} 
                                            // key = {item.id}
                                            // id = {item.id}
                                            // img ={item.img}
                                            // prdctBadge = {item.prdctBadge}
                                            // title = {item.title}
                                            // description = {item.description}
                                            // reviews = {item.reviews}
                                            // ratings = {item.ratings}
                                            // mrp = {item.mrp}
                                            // discount = {item.discount}
                                        />
                                    )
                            :null}   
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductListing;