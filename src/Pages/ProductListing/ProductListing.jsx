import React, {useState, useEffect} from 'react';
import './ProductListing.css'
// import Header from '../../Shared/Header/Header';
// import Image from '../../Shared/Image/Image';
// import ProductCard from '../../Shared/ProductCard/ProductCard';
import useAxios from '../../Api/useAxios/useAxios';
// import { getProducts } from '../../Api/actions';
import FiltersContainer from './FiltersContainer';
import  { getSortedProducts, getFilteredByRatings , getFilteredByCategories, getFilteredByProductTags, getFilteredByBrands } from '../../Helpers/Filters/Filters';
import { useProductFilters } from '../../Context/ProductContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../Context';
import { Image , ProductCard, Header} from '../../Shared';
// import { Header } from '../../Shared';
// import { Header } from '../../Shared';

const ProductListing = () =>{

    const {alertContent , setAlertContent} = useAlert();
    const { categoryId, categoryName } = useParams();
    // let { response, loading, error } = useAxios(getProducts);
    const [data, setData] = useState([]);
    const {state, dispatch} = useProductFilters();
    const [clear , setClear] = useState(false);
    const [ctgryName, setCtgryName ] = useState('');
    let filterprdcts = [];

    const getProducts = async () => {
        try {
          const response = await axios.get('/api/products');
          if(response.status === 200){
            setData(response.data);
          }
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        getProducts();
    }, []);



    useEffect(() => {
        if (categoryName.length) {
            dispatch({ type: "CATEGORY" ,payload:categoryName })
        }
    }, [categoryName]);

    //FILTERPORDUCTS ACCORDING TO CATEGORY
    const filteredProducts_categories = (data?.products?.length && state.category) ? getFilteredByCategories(
        data?.products?.length ? data.products : [],
        state.category)
        :[];

    //FILTERPORDUCTS ACCORDING TO BRANDS
    const filteredProducts_brands = getFilteredByBrands(
        filteredProducts_categories,
        state.brands
        );
    
    ////FILTERPORDUCTS ACCORDING TO product tags
    const filteredProducts_productTags = getFilteredByProductTags(
        filteredProducts_brands,
        state.productTag
    );

    //SORT PRODUCTS ACC TO PRICE
    const filteredProducts_sortedPrice = getSortedProducts(
        filteredProducts_productTags && filteredProducts_productTags.length ?  filteredProducts_productTags : data?.products?.length ? data.products : [] ,
        state.sortBy
    );

    //FILTER PORDUCTS ACCORDING TO RATINGS
    filterprdcts = getFilteredByRatings(
        filteredProducts_sortedPrice && filteredProducts_sortedPrice.length ?  filteredProducts_sortedPrice : data?.products?.length ? data.products : [],
        state.ratings
    );

    const handleClear = () =>{
        setClear(true)
        dispatch({ type: "CLEAR" })
    }

    return(
        <>

            <Image 
                src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/p/u/pulse-oximeter_offer_1460x340.jpg"
                alt="featured-product-advertisment"
                className="col-12 featured-product-advertisment"
            />

            <div className="col-12 pl-main-container">
                
                <div className="col-10 pl-sub-container">            
                    {/* <!-- LEFT CONTAINER -FEATURED CATEGORIES& FILTERS --> */}
                    <FiltersContainer clear={clear}  setClear={setClear} categry={{categoryId : categoryId, categoryName : categoryName}}/>

                    {/* <!-- RIGHT CONATINER - PRODUCTS --> */}
                    <div className="col-9 right-container-product-listing">
                        <div className='right-container-header'>
                            <p className="text-sm breadcrumb">{`${state.category} ${state.productTag.length?`>${state.productTag}`:''} ${state.brands.length?`>${state.brands}`:''}`}</p>
                            <button className="btn btn-sm btn-primary clear-filter-btn"
                                // onClick={() => dispatch({ type: "CLEAR" })}
                                onClick={handleClear}
                                >Clear all filters</button>
                        </div>
                        {/* <!-- FILTER -CHIPS --> */}
                        {/* functionality to be implmented commenting for future perspective..*/}
                        {/* <div className="col-10 chips-container">
                            <div className="chip-word-flex">
                                <p className="chip-word">Accu-check<button className="cross-btn">X</button></p>
                                <p className="chip-word">Rs 500<button className="cross-btn">X</button></p>
                                <p className="chip-word">4 star rating plus<button className="cross-btn">X</button></p>
                            </div>
                            <input className="chip-search" placeholder="search here"></input>
                        </div> */}

                        {/* <!-- FILTERED products --> */}
                        <div className="col-12 flex-container-row filtered-prdcts">
                            {filterprdcts && filterprdcts.length ?
                                        filterprdcts.map(item=>
                                            <ProductCard
                                                key={item.id}
                                                product = {item} 
                                            />
                                        )
                                :
                                data?.products?.length?
                                        data.products.map(item=>
                                            <ProductCard
                                                key={item.id}
                                                product = {item} 
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