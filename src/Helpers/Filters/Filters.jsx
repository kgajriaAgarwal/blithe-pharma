export const getSortedProducts =  (products, sortBy) =>{
    if(sortBy === ''){
        return products
    }
    // console.log("prod..products",products );
    if(sortBy ==='LOW_TO_HIGH'){
        //SORT ACC TO DISCOUNTED PRICE
        return [...products].sort((item1, item2)=> 
            (item1.mrp-(item1.mrp * (item1.discount/100))) - (item2.mrp-(item2.mrp * (item2.discount/100)))
        )
    }
    if(sortBy ==='HIGH_TO_LOW'){
        return [...products].sort((item1, item2)=> 
            (item2.mrp-(item2.mrp * (item2.discount/100))) - (item1.mrp-(item1.mrp * (item1.discount/100)))
        )
    }
};

export const getFilteredByRatings =  (products, ratings) =>{
    if(ratings === ''){
        return products
    }
    if(ratings === '5star'){       
        return products.filter(prdct=> prdct.ratings === 5 )
    }
    if(ratings === '4starplus'){
        return products.filter(prdct=> prdct.ratings >= 4 )
    }
    if(ratings === '3starplus'){
        return products.filter(prdct=> prdct.ratings >= 3 )
    }
    if(ratings === '2starplus'){
        return products.filter(prdct=> prdct.ratings >= 2 )
    }
    if(ratings === '1starplus'){
        return products.filter(prdct=> prdct.ratings >= 1 )
    }
};

export const getFilteredByCategories =  (products, category) => {
    if(category==''){
        return products
    }else{
        return products.filter(prdct => prdct.categoryName === category)
    }
}

export const getFilteredByProductTags = (products, productTags) =>{
    if(productTags==''){
        return products
    }else{
        let fltrarry = [];
        for(let i=0;i<=productTags.length;i++){
            products.filter(el =>{
                if(el.productTags == productTags[i]){
                    fltrarry.push(el)
                }
            } );
        } 
        return fltrarry;
    }
}

export const getFilteredByBrands = (products, brands) =>{
    if(brands==''){
        return products
    }else{
        let fltrarry = [];
    for(let i=0;i<=brands.length;i++){
        products.filter(el =>{
            if(el.brandName == brands[i]){
                fltrarry.push(el)
            }
        } );
    } 
    return fltrarry;
    }
}