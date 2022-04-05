export const ProductsFilterReducer = (state, action) =>{

  
    switch(action.type){
        case 'LOW_TO_HIGH':
            return {...state, sortBy: action.type}

        case 'HIGH_TO_LOW':
            return {...state, sortBy: action.type}

        case 'RATINGS':
            return {...state, ratings:action.payload}

        case 'CATEGORY':
            return {...state, category:action.payload}

        case 'PRODUCT_TAG':
            return {...state, productTag:action.payload}

        case 'BRANDS':
            return {...state, brands:action.payload}

        case "CLEAR":
            return {
                sortBy: "",
                // categories: { clothing: false, wallart: false },
                category: '',
                price: 5000,
                discount: "",
                inStock:true,
                ratings:'',
                productTag:[],
                brands:[]
            };

        default:
            return {...state}
    }
}