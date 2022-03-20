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

//Routing Data
const RouteData = () =>{
    return(
        <Routes>
            <Route exact path='/user' element={<PrivateRoute/>}>
                {/* PRIVATE ROUTES HERE */}
                {/* <Route exact path='/user' element={<PrivateRoute/>}/>
                <Route exact path='/user' element={<PrivateRoute/>}/> */}
            </Route>
            <Route exact path="/products/:categoryId/:categoryName"  element={<ProductListing/>}/>
            <Route exact path='/products' element={<ProductListing/>}/> 
            <Route exact path='/mockman' element={<MockAPI/>}/>         
            <Route exact path='/forgot-password' element={<ForgotPassword/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/home' element={<LandingPage/>}/>   
            <Route exact path='/' element={<LandingPage/>}/>  
    </Routes>
   );
}
export default RouteData;