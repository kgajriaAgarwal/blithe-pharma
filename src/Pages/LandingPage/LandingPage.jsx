import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { testimonials, steps} from '../../Data';
import blitheLogo from '../../Assets/Images/Blithe-logo.png';
import axios from 'axios';;
import { useAlert } from '../../Context';
import { v4 as uuid } from "uuid";
import { Footer, Header, Corousel, ProductCard , CategoryCard, Banner} from '../../Shared';
import { useNavigate } from 'react-router-dom';

const LandingPage = () =>{

    const [data, setData] = useState([]);
    const {alertContent , setAlertContent} = useAlert();
    const [ top_categories, setTop_categories] = useState([]);
    const [ featured_products, setFeatured_products] = useState([]);
    const navigate = useNavigate();

    const getCategories = async () => {
        try {
          const response = await axios.get('/api/categories');
          if(response.status === 200){
            setData(response.data);
            setTop_categories( response.data.categories.filter(category =>
                category?.categoryStatus? category.categoryStatus === 'top':''
            ))
          }else{
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          }
        } catch (error) {
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
        }
      }

    const getProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            if(response.status === 200){
                setFeatured_products( response.data.products.filter(product =>
                    product?.productStatus? product.productStatus === 'featured':''
                ))
              }else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }
        } catch (error) {
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
        }
    }

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);


    return(
        <>

            {/* <!-- top categories --> */}
            <div className="col-12 category-container">
            {
                top_categories.length?
                    top_categories.map(category=>
                        <button key={category.id} className="button category-item" onClick={() => navigate(`/products/${category.id}/${category.title}`)}>
                        <img className="category sm"
                            src={category.categoryIcon}
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

                { data?.categories && data?.categories?.length?
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
               {featured_products.length?
                    featured_products.map((item, indx)=>
                        <ProductCard 
                            key = {indx}
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