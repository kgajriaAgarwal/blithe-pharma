import { createContext, useContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";
import { v4 as uuid } from "uuid";

const itemsInWishlist = { items: [] };

//CONTEXT CREATED
const WishlistContext = createContext(itemsInWishlist);

const WishlistProvider = ({children}) => {

    const encodedToken = localStorage.getItem("token");
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const {alertContent , setAlertContent} = useAlert();


    const addToWishlist = async (item) => {
        try {
          const response = await axios.post(
            "/api/user/wishlist",
            { product: item },
            {
              headers: {
                authorization: encodedToken,
              },
            }
          );
          if (response.status === 201) {
            setWishlistProducts(response.data.wishlist);
            setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product Added to wishlist."})
          }
        } catch (err) {
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
        }
      };

      const removeFromWislist = async (item) => {
        
        try {
          const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
            headers: {
              authorization: encodedToken,
            },
          });
          if (response.status === 200) {
            setWishlistProducts(response.data.wishlist);
            setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Product removed from wishlist."})
          }
        } catch (err) {
        
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login.."})
        }
      };



    return(
        <WishlistContext.Provider  value={{
            wishlistProducts,
            addToWishlist,
            removeFromWislist
        }}>
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };