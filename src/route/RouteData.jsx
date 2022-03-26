import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
const Login = React.lazy(() => import('../Pages/Authentication/Login/Login'));
const SignUp = React.lazy(() => import('../Pages/Authentication/SignUp/SignUp'));
const ForgotPassword = React.lazy(() => import('../Pages/Authentication/ForgotPassword/ForgotPassword'));
const LandingPage = React.lazy(() => import('../Pages/LandingPage/LandingPage'));
const ProductListing = React.lazy(() => import('../Pages/ProductListing/ProductListing'));
// const Mockman = React.lazy(() => import('../Helpers/MockMan'));
import MockAPI from "../Helpers/MockMan";
const Cart = React.lazy(() => import('../Pages/Cart_wishlist/Cart'));
const Wishlist = React.lazy(() => import('../Pages/Cart_wishlist/Wishlist'));

//Routing Data
const RouteData = () =>{
    return(
        <Routes>
            <Route exact path='/user' element={<PrivateRoute/>}>                
                <Route exact path='/user/cart' element={<Cart/>}/>
                <Route exact path='/user/wishlist' element={<Wishlist/>}/>
            </Route>
            {/* <Route exact path='/user/cart' element={<Cart/>}/>
            <Route exact path='/user/wishlist' element={<Wishlist/>}/> */}
            <Route exact path="/products/:categoryId/:categoryName"  element={<ProductListing/>}/>
            <Route exact path='/products' element={<ProductListing/>}/> 
            <Route exact path='/mockman' element={<MockAPI/>}/>         
            <Route exact path='/forgot-password' element={<ForgotPassword/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/home' element={<LandingPage/>}/>   
            <Route exact path='/products' element={<ProductListing/>}/>                     
            <Route exact path='/home' element={<LandingPage/>}/>
            {/* <Route exact path='/cart' element={<Cart/>}/>    */}
            <Route exact path='/' element={<LandingPage/>}/>  
        </Routes>
   );
}
export default RouteData;

// /user/cart