import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";
import { v4 as uuid } from "uuid";

const itemsInCart = { cart_total: 0, total_items: 0, items: [] };


//CONTEXT CREATED
const CartContext = createContext(itemsInCart);

const CartProvider = ({ children }) => {
  
  const encodedToken = localStorage.getItem("token");
  const [cartProducts, setCartProducts] = useState([]);
  const {alertContent , setAlertContent} = useAlert();

    ///const [state, dispatch] = useReducer(CartReducer, itemsInCart);
    const addToCart = async (item) => {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { product: item },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 201) {
          setCartProducts(response.data.cart);
          setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product Added to cart"})
        }
      } catch (err) {
       
        setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
      }
    };
  
    const removeFromCart = async (item) => {
      try {
        const response = await axios.delete(`/api/user/cart/${item._id}`, {
          headers: {
            authorization: encodedToken,
          },
        });
        if (response.status === 200) {
         
          setCartProducts(response.data.cart);
          setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product removed from Cart"})
        }
      } catch (err) {
      
        setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
      }
    };
  
    const changeCartQty = async (actionType, id) => {
      try {
        const response = await axios.post(
          `/api/user/cart/${id}`,
          {
            action: {
              type: actionType
            }
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 200) {
         
          setCartProducts(response.data.cart);
          setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product quantity updated in Cart"})
        }
      } catch (err) {
       
        setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
      }
    };
  
    return (
      <CartContext.Provider  value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        changeCartQty,
      }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  const useCart = () => useContext(CartContext);
  
  export { useCart, CartProvider };