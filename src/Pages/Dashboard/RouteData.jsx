import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../../route/PrivateRoute';
import './DashboardLayout.css';

const LandingPage = React.lazy(() => import('../LandingPage/LandingPage'));
const Cart = React.lazy(() => import('../Cart_wishlist/Cart'));
const Wishlist = React.lazy(() => import('../Cart_wishlist/Wishlist'));
const ProductListing = React.lazy(() => import('../ProductListing/ProductListing'));
// const VideoListingPage = React.lazy(() => import('../VideoListingPage/VideoListingPage'));
// const LikedVideosPage = React.lazy(() => import('../LikedVideosPage/LikedVideosPage'));
// const Video = React.lazy(() => import('../Video/Video'));
// const PlayList = React.lazy(() => import('../PlayList/PlayList'));

function NoMatch() {
    return (
      <div>
        <h2>404.. This page is not found!</h2>
        <p>
          <Link to="/" className='link-home'>Go to the home page</Link>
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
            <Route exact path='/' element={<LandingPage/>}/>
            <Route path="*" element={<NoMatch/>} />
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