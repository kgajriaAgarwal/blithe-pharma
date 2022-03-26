import axios from "axios";
import { useState } from "react";

const CartReducer = (state, action) => {

    //const [ cartProducts, setCartProducts] = useState([]);
    console.log("state is abc abc:", state);
    const auth = localStorage.getItem("token"); 
    
    // console.log("action.payload.qty:", action.payload.qty);

    // const handleAddToCart = async (prdct) => {
    //   console.log("Add to cart..")
    //   try {
    //       const res = await axios.post("/api/user/cart", { 
    //           product: prdct
    //           //...data
    //       }, {
    //           headers: {
    //            authorization: auth 
    //           }
    //       })
    //       if (res.status === 201) {
    //         //show success toast
    //         console.log("res@@@", res);
    //         //setCartProducts(res.data.cart);
    //       }
    //   }catch(error){
    //       console.log(error)
    //   }
    // }

    switch (action.type) {
      // case "ADD_TO_CART":
      //   let itemExists = false;
      //   const newAr = state.items.map((item) => {
      //     if (item.id === action.payload.id) {
      //       itemExists = true;
      //       return { ...item, qty: item.qty + 1 };
      //     } else {
      //       return item;
      //     }
      //   });
      //   if (!itemExists) {
      //     newAr.push({ ...action.payload, qty: 1 });
      //   }
      //   console.log("newar..", newAr);
      //   return {
      //     ...state,
      //     cart_total: state.cart_total + action.payload.price,
      //     total_items: state.total_items + 1,
      //     items: [...newAr]
      //     //items: [...state.items, ...newAr]
      //   };
      //   break;

      case "ADD_TO_CART":
        //handleAddToCart(action.payload);
           axios.post("/api/user/cart", { 
                    product: action.payload
                    //...data
                }, {
                    headers: {
                     authorization: auth 
                    }
              }).then((res) => {console.log(res.data.cart)
                if (res.status === 201){
                  //state.items = [...res.data.cart];
                  return {
                          ...state,
                          // cart_total: state.cart_total + action.payload.price,
                          // total_items: state.total_items + 1,
                          items: res.data.cart
                          //items: [...state.items, ...newAr]
                  };
                }
              })
              .catch((err) => {console.error(err)});

            break;
              // console.log("sata.items:::", state.items);

      //   //console.log("state.items", state.items);
      //   // return {
      //   //       ...state,
      //   //       cart_total: state.cart_total + action.payload.price,
      //   //       total_items: state.total_items + 1,
      //   //       items: [...setCartProducts]
      //   //       //items: [...state.items, ...newAr]
      //   //     };
      //   break;


      // case "REMOVE_FROM_CART":
      //   axios.delete(`/api/user/cart/productId=${action.payload._id}`, {
      //     headers: {
      //       authorization: auth
      //     },
      //   }).then((res) => {console.log("res zabardast...", res);
      //     // if (res.status === 201){
      //     //   debugger
      //     //   state.items = [...res.data.cart];
      //     //   // return {
      //     //   //         ...state,
      //     //   //         // cart_total: state.cart_total + action.payload.price,
      //     //   //         // total_items: state.total_items + 1,
      //     //   //         items: res.data.cart
      //     //   //         //items: [...state.items, ...newAr]
      //     //   //       };
      //     // }
      //   })
      //   .catch((err) => {console.error(err)});
      //   break;


      // case "REMOVE_FROM_CART":
      //   let filteredArray = state.items.filter((item) => {
      //     return item.id !== action.payload.id;
      //   });
      //   return {
      //     ...state,
      //     cart_total:
      //       state.cart_total > 0
      //         ? state.cart_total - action.payload.qty * action.payload.price
      //         : 0,
      //     total_items: state.total_items > 0 ? state.total_items - 1 : 0,
      //     items: filteredArray
      //   };
      //   break;

      case "INCREMENT_QTY":
        let newArray = state.items.map((item) => {
          if (item.id === action.payload.id) {
            console.log("222222", { ...item, qty: item.qty + 1 });
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        console.log("newArrayyy:", newArray);
        return {
          ...state,
          cart_total: state.cart_total + action.payload.price,
          total_items: state.total_items + 1,
          items: newArray
        };
        break;

      case "DECREMENT_QTY":
        let new_Array = state.items.map((item) => {
          if (item.id === action.payload.id) {
            console.log("222222", { ...item, qty: item.qty - 1 });
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart_total:
            state.cart_total > 0 ? state.cart_total - action.payload.price : 0,
          total_items: state.total_items > 0 ? state.total_items - 1 : 0,
          items: new_Array.filter((item) => item.qty !== 0)
        };

      default:
        return state;
    }
  };

export default CartReducer;