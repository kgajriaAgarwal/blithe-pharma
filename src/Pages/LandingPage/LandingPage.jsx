import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Header from '../../Shared/Header/Header';
import Corousel from '../../Shared/Corousel/Corousel';
import Banner from '../../Shared/Banner/Banner';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Footer from '../../Shared/Footer/Footer';
import CategoryCard from '../../Shared/CategoryCard/CategoryCard';
import {categories,topCategories, featuredProducts, testimonials, steps} from '../../Data';
import blitheLogo from '../../Assets/Images/Blithe-logo.png';
import axios from 'axios';
import useAxios from '../../Api/useAxios/useAxios';
import { getCategories } from '../../Api/actions';
import { Link } from 'react-router-dom';

const LandingPage = () =>{

    let { response, loading, error } = useAxios(getCategories);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    // console.log('data', data);

    return(
        <>
            <Header/>

            {/* <!-- top categories --> */}
            <div className="col-12 category-container">
            {
                topCategories.length?
                    topCategories.map(category=>
                        <button key={category.id} className="button category-item">
                        <img className="category sm"
                            src={category.img}
                            alt={category.title} />
                        <p className='text-sm'>{category.title}</p>
                    </button>
                    )
                :null
            }
            </div>

            <Corousel/>

            {/* <!-- How site works steps --> */}
            <div className="steps-container">
                {steps.length?
                    steps.map(step => 
                    <div className="step-item" key={step.id}>
                        <p className="step">{step.id}</p>
                        <p className="text-lg step-text">{step.title}</p>
                    </div>)
                :null}
            </div>

            {/* <!-- featured Categories --> */}
            <p className="heading-md heading-name">Featured Categories</p>
            <div id="featured-prdcts" className="col-12 flex-container-row featured-categories">

                {data?.categories?.length?
                    data.categories.map((cVal,cIndx) =>
                        <CategoryCard key={cIndx}
                            id = {cVal.id}
                            img = {cVal.img}
                            title = {cVal.title}
                            description = {cVal.description}                           
                        />
                    )
                :null}

               
            </div>

            {/* <!-- Blithe-plus-banner --> */}
            <Banner/>

            {/* <!-- featured Products --> */}
            <div className='featured-prdcts-header'>
                <p className="heading-md heading-name">Featured Products</p>
                {/* <Link to="/products" className="btn-link-view-all">View all products</Link> */}
            </div>
            <div id="featured-prdcts" className="col-12 flex-container-row-center featured-prdcts">
               {featuredProducts.length?
                    featuredProducts.map(item=>
                        <ProductCard 
                            product = {item} 
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
                                <div key={testimonial.id} className="col-4 text-center">
                                <div className="profile">
                                <img src={testimonial.img?testimonial.img:blitheLogo} className="user" alt="user"/>
                                        <blockquote className="text-xs">
                                        {testimonial.review}
                                        </blockquote>
                                        <p className="heading-md profile-name">{testimonial.name}</p>
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