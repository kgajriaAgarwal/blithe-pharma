import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../../route/PrivateRoute';

const LandingPage = React.lazy(() => import('../LandingPage/LandingPage'));
const Cart = React.lazy(() => import('../Cart_wishlist/Cart'));
const Wishlist = React.lazy(() => import('../Cart_wishlist/Wishlist'));
const ProductListing = React.lazy(() => import('../ProductListing/ProductListing'));
const ProductPage = React.lazy(() => import('../SingleProduct/SingleProduct'));

function NoMatch() {
    return (
      <div>
        <h2>404.. This page is not found!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

//Routing Data
const RouteData = () =>{
    return(
        <Routes>  
            <Route exact path='/user' element={<PrivateRoute/>}>                
                <Route exact path='/user/cart' element={<Cart/>}/>
                <Route exact path='/user/wishlist' element={<Wishlist/>}/>
            </Route>
           
            <Route exact path="/products/:categoryId/:categoryName"  element={<ProductListing/>}/>
            <Route exact path='/products' element={<ProductListing/>}/> 
            <Route exact path='/home' element={<LandingPage/>}/>
            <Route exact path='/' element={<ProductPage/>}/>
        </Routes>
   );
}

export default RouteData;

   // <Routes>
        //     <Route exact path='/user' element={<PrivateRoute/>}>                
        //         <Route exact path='/user/cart' element={<Cart/>}/>
        //         <Route exact path='/user/wishlist' element={<Wishlist/>}/>
        //     </Route>
        //     {/* <Route exact path='/user/cart' element={<Cart/>}/>
        //     <Route exact path='/user/wishlist' element={<Wishlist/>}/> */}
        //     <Route exact path="/products/:categoryId/:categoryName"  element={<ProductListing/>}/>
        //     <Route exact path='/products' element={<ProductListing/>}/> 
        //     <Route exact path='/mockman' element={<MockAPI/>}/>         
        //     <Route exact path='/forgot-password' element={<ForgotPassword/>}/>
        //     <Route exact path='/signup' element={<SignUp/>}/>
        //     <Route exact path='/login' element={<Login/>}/>
        //     <Route exact path='/home' element={<LandingPage/>}/>   
        //     <Route exact path='/products' element={<ProductListing/>}/>                     
        //     <Route exact path='/home' element={<LandingPage/>}/>
        //     {/* <Route exact path='/cart' element={<Cart/>}/>    */}
        //     <Route exact path='/' element={<LandingPage/>}/>  
        // </Routes>