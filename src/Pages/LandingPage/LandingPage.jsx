import React from 'react';
import './LandingPage.css';
import Header from '../../Shared/Header/Header';
import Corousel from '../../Shared/Corousel/Corousel';
import Banner from '../../Shared/Banner/Banner';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Footer from '../../Shared/Footer/Footer';
import {categories,topCategories, featuredProducts, testimonials} from '../../Data';
import blitheLogo from '../../Assets/Images/Blithe-logo.png';

const LandingPage = () =>{

    console.log("testimonials", testimonials);

    return(
        <>
            <Header/>

            {/* <!-- top categories --> */}
            <div className="col-12 category-container">
            {
                topCategories.length?
                    topCategories.map(ctgry=>
                        <button key={ctgry.id} className="button category-item">
                        <img className="category sm"
                            src={ctgry.img}
                            alt={ctgry.title} />
                        <p className='text-sm'>{ctgry.title}</p>
                    </button>
                    )
                :null
            }
            </div>

            <Corousel/>

            {/* <!-- How site works steps --> */}
            <div className="steps-container">
                <div className="step-item">
                    <p className="step">1</p>
                    <p className="text-lg step-text">Upload the Doctor's Prescription and place order</p>
                </div>
                <div className="step-item">
                    <p className="step">2</p>
                    <p className="text-lg step-text">Apply coupons or choose emergency delivery</p>
                </div>
                <div className="step-item">
                    <p className="step">3</p>
                    <p className="text-lg step-text">Get the Products delivered at your home</p>
                </div>
            </div>

            {/* <!-- featured Categories --> */}
            <p className="heading-md heading-name">Featured Categories</p>
            <div id="featured-prdcts" className="col-12 flex-container-row featured-categories">

                {categories.length?
                    categories.map((cVal,cIndx) =>
                    <div key={cIndx} className="card-container card-shadow">
                    <img src={cVal.img} className="card-img" alt="card-img"/>
                    <div className="card-content-container">
                        <p className="text-sm card-des">{cVal.title}</p>
                        <p className='text-xs card-des'>{cVal.description}</p>
                        <div className="flex-content">
                            <a href="../Product_Listing/Product_Listing.html">
                                <button className="btn card-btn card-btn-text"><span className='text-lg'>Explore More..</span></button>
                            </a>
                        </div>
                    </div>
                </div>
                    )
                :null}

               
            </div>

            {/* <!-- Blithe-plus-banner --> */}
            <Banner/>

            {/* <!-- featured Products --> */}
            <p className="heading-md heading-name">Featured Products</p>
            <div id="featured-prdcts" className="col-12 flex-container-row-center featured-prdcts">
               {featuredProducts.length?
                    featuredProducts.map(item=>
                        <ProductCard 
                            key = {item.id}
                            id = {item.id}
                            img ={item.img}
                            prdctBadge = {item.prdctBadge}
                            title = {item.title}
                            description = {item.description}
                            reviews = {item.reviews}
                            ratings = {item.ratings}
                            mrp = {item.mrp}
                            discount = {item.discount}
                        />
                    )
               :null}               
            </div>

            {/* <!-- testimonials  --> */}        
            <section id="testimonials">
                <div className="col-12 flex-container-row reviews-container">
                    <p className="heading-md heading-name">Reviews & Ratings</p>
                    <div className="col-12 flex-container-row-center reviews-row">
                        {testimonials.length?
                            testimonials.map(testimonial =>
                                <div key={testimonial.id} class="col-4 text-center">
                                <div className="profile">
                                <img src={testimonial.img?testimonial.img:blitheLogo} class="user"/>
                                        <blockquote className="text-xs">
                                        {testimonial.review}
                                        </blockquote>
                                        <p className="heading-md profile-name">{testimonial.name}</p>
                                    {/* </img> */}
                                    </div>
                                </div>    
                            )
                        :null}
                    </div>
                </div>
            </section> 

            <Footer/>
        </>
    );
}

export default LandingPage;