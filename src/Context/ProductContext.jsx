import { createContext , useContext , useReducer } from "react";
import { ProductsFilterReducer } from "../Reducers/ProductsFilterReducer";

const ProductContext = createContext();
const initialState = {
    sortBy: "",
    category: '',
    price: 5000,
    discount: "",
    inStock:true,
    ratings:'',
    productTag:[],
    brands:[]
}


const ProductProvider = ({children}) => {

    //reducer
    const [state, dispatch] = useReducer(ProductsFilterReducer, initialState );

    return(
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    );
}


//custom hook - useProductFilters
const useProductFilters = () => useContext(ProductContext);

export { useProductFilters, ProductProvider };