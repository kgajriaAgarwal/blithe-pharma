import React, {useState, useEffect} from 'react';
import useAxios from '../../Api/useAxios/useAxios';
import { ratingsFilter } from '../../Data';
import { getCategories } from '../../Api/actions';
import InputField from '../../Shared/Input/InputField';
import Input from '../../Shared/Input/Input';
import { useProductFilters } from '../../Context/ProductContext';
import { useParams } from 'react-router-dom';

const  FiltersContainer = (props) =>{
    
    // let { categoryId } = useParams();
    let { response, loading, error } = useAxios(getCategories);
    const [data, setData] = useState([]);
    const { state, dispatch} = useProductFilters();
    const { sortBy , categories , price , discount , inStock, ratings} = state;
    const [ctgrySelected, setCtgrySelected] = useState({indx:-1, ctgryId:0})
    const [brandSearchKey , setBrandSearchKey] = useState('')
    const [prdctTags, setPrdctTags] = useState([]);
    const [ brands, setBrands] = useState([]);
  
    

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    useEffect(() => {
        props.setClear(false);
        if(data?.categories?.length && ctgrySelected.ctgryId!==0){
            let fltrArr = data.categories.filter(el=> el.id == ctgrySelected.ctgryId)
            console.log("fltrArr..", fltrArr);
            fltrArr[0].productTags.map((cVal,cIndx) =>{
                setPrdctTags(prevState => [...prevState, { id:cIndx, prdctTagTile:cVal, isSelected:false} ] )
            })  
            fltrArr[0].brandfilters.map((cVal,cIndx) =>{
                setBrands(prevState => [...prevState, { id:cIndx, brandName:cVal, isSelected:false} ] )
            })       
        }            
    }, [data,ctgrySelected]);

    useEffect(()=>{
        console.log("yeh wla useEff trigg..");
        props.setClear(false);
        if(Object.keys(props.categry).length && data?.categories?.length){
            const indx = data?.categories?.findIndex(el=> el.title === props.categry.categoryName)
            console.log("indxx", indx);
            setCtgrySelected({indx:indx, ctgryId:Number(props.categry.categoryId)})
        }
    }, [data, props.categry.categoryName])


    useEffect(() => {
        if (props.clear) {
            setCtgrySelected({indx:-1, ctgryId:0})
            setPrdctTags([]);
            setBrands([])
        }
    }, [props.clear]);
    
    const handleCategory = (ctgry, cIndx) =>{
        dispatch({ type: "CATEGORY" ,payload:ctgry.title })
        setCtgrySelected({indx:cIndx, ctgryId:Number(ctgry.id)})
        setPrdctTags([]);
    }

    const handlebrandSearch = (e) =>{
        setBrandSearchKey(e.target.value);
        //FUNCTIONALITY yet to be implmented 
        //Commented for future perspective
        //return items.filter((item) => {
            /*
            // in here we check if our region is equal to our c state
            // if it's equal to then only return the items that match
            // if not return All the countries
            */
            //    if (item.region == filterParam) {
            //        return searchParam.some((newItem) => {
            //          return (
            //            item[newItem]
            //                .toString()
            //                .toLowerCase()
            //                .indexOf(q.toLowerCase()) > -1
            //                     );
            //                 });
            //             } else if (filterParam == "All") {
            //                 return searchParam.some((newItem) => {
            //                     return (
            //                         item[newItem]
            //                             .toString()
            //                             .toLowerCase()
            //                             .indexOf(q.toLowerCase()) > -1
            //                     );
            //                 });
            //             }
            //         });
    }

    const handleProductsTagCheckBox = (prdctTag) =>{
        let indx = prdctTags.findIndex(el=> el.prdctTagTile === prdctTag)
        let prdctTagsArr = [...prdctTags];
        let prdctTagTobeChanged = {...prdctTagsArr[indx]};
        prdctTagTobeChanged.isSelected = !prdctTagTobeChanged.isSelected;
        prdctTagsArr[indx] = prdctTagTobeChanged;
        setPrdctTags([...prdctTagsArr])
        const selectedProductTags = prdctTagsArr.filter(el=> el.isSelected === true).reduce((acc, cVal) => [...acc , cVal.prdctTagTile],[])
        dispatch({ type: "PRODUCT_TAG" , payload:selectedProductTags})
    } 

    const handleBrandsCheckBox = (brandName) => {
        let indx = brands.findIndex(el=> el.brandName === brandName)
        let brandsArr = [...brands];
        let brandTobeChanged = {...brandsArr[indx]};
        brandTobeChanged.isSelected = !brandTobeChanged.isSelected;
        brandsArr[indx] = brandTobeChanged;
        setBrands([...brandsArr])
        const selectedBrands = brandsArr.filter(el=> el.isSelected === true).reduce((acc, cVal) => [...acc , cVal.brandName],[])
        dispatch({ type: "BRANDS" , payload:selectedBrands})
    }

    return(
        
        <div className="col-3 left-container">

            {/* <!-- CATEGORIES --> */}
            <p className="heading-md heading">Categories</p>
            <div className="col-12 categories-list">
                <ul>
                    {data?.categories?.length?
                        data.categories.map((cVal,cIndx) =>
                            <li key={cIndx} 
                                style ={ ctgrySelected.indx === cIndx? {backgroundColor:'lightCoral', color:'white'} :{backgroundColor:'white'}}
                                onClick={()=>handleCategory(cVal, cIndx)}
                            >{cVal.title}</li>
                        )
                    :null} 
                </ul>
            </div>

            <p className="heading-md heading">Filters</p>
            {/* <!-- SEPERATOR --> */}
            <hr className="solid separator"/>


           
                {brands.length?
                <>
                 {/* <!-- FILTERS --> */}
                <p className="text-lg heading">Brands</p>
                <div className="col-12 filters-container">
                    {/* FUNCTIONALITY YET TO BE IMPLEMENTED */}
                    {/* <InputField 
                        type='text'
                        title='Brand Name'
                        name='brandName'
                        placeholder='Enter brand name..'
                        err={false}
                        value={brandSearchKey}
                        onChange={(e)=> handlebrandSearch(e)}
                    /> */}
                    <div className="col-12 brands-container">                    
                   
                        {brands.map((cVal,cIndx) =>{
                            return <div key={cIndx} className="col-12 prdct-tag-filter-container">
                                        <Input className="checkbox" type='checkbox' id={`checkbox-${cIndx}`}
                                            name={cVal.brandName}
                                            value={cVal.brandName}
                                            onChange = {()=>handleBrandsCheckBox(cVal.brandName)}
                                            checked={cVal.isSelected}
                                        />
                                        <label className="text-xs lbl-prdct-tag">{cVal.brandName}</label>
                                        <label className="lbl-count">5</label>
                                    </div>
                        })}
                    </div>
                </div>
            </>:''}
            
                
               
            {prdctTags.length?
                <>
                    {/* <!-- SEPERATOR --> */}
                    <hr className="solid separator"/>

                    {/* <!-- PRODUCT TAGS --> */}
                    <p className="text-lg heading">Product tags</p>
                    <div className="col-12 filters-container"> 
                    {/* FUNCTIONALITY YET TO BE IMPLEMENTED  */}
                        {/* <InputField 
                            type='text'
                            title='Product tag'
                            name='productTag'
                            placeholder='Enter product tag..'
                            err={false}
                            // value={}
                            //onChange={(e)=> handlebrandSearch(e)}
                        /> */}
                        <div className="col-12 prdct-tag-container">
                        
                        {prdctTags.map((cVal,cIndx) =>{
                                return <div key={cIndx} className="col-12 prdct-tag-filter-container">
                                    <Input className="checkbox" type='checkbox' id={`checkbox-${cIndx}`}
                                        name={cVal.prdctTagTile}
                                        value={cVal.prdctTagTile}
                                        onChange = {()=>handleProductsTagCheckBox(cVal.prdctTagTile)}
                                        checked={cVal.isSelected}
                                    />
                                    <label className="text-xs lbl-prdct-tag">{cVal.prdctTagTile}</label>
                                    <label className="lbl-count">5</label>
                                </div>
                            })}
                            </div>
                    </div>
                </>:''}
                                                
            

            {/* <!-- SEPERATOR --> */}
            <hr className="solid separator"/>

            {/* <!-- PRICE FILTER --> */}
            <p className="text-lg heading">Price</p>
            <div className="col-12 filters-container">
                <div className="price-filter">
                    {/* <input className="radio-btn" type="radio"/> */}
                    <Input className="radio-btn" type='radio' id="radiobtn-lowToHigh" 
                            name='lowToHigh' value="lowToHigh" onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                            checked={sortBy === "LOW_TO_HIGH"}
                    />
                    <label className="lbl-price" for="lowToHigh">Low To High</label>
                </div>

                <div className="price-filter">
                    <Input className="radio-btn" type='radio' id="radiobtn-HighTolow" 
                            name='HighTolow' value="HighTolow" onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                            checked={sortBy === "HIGH_TO_LOW"}
                    />
                    <label className="lbl-price"  for="HighTolow">High To Low</label>
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
                                <Input className="radio-btn" type='radio' id={`radiobtn-${key}`} 
                                        name='ratings' value="ratings" onChange={() => dispatch({ type: "RATINGS" ,payload:key })}
                                        checked={ratings === key}
                                />
                                <label className="lbl-price">{ratingsFilter[key]}</label>
                            </div>
                            )
                    :null}   
            </div>
        </div>
    );
}

export default FiltersContainer;