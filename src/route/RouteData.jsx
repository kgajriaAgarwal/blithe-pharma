import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
const Login = React.lazy(() => import('../Pages/Authentication/Login/Login'));
const SignUp = React.lazy(() => import('../Pages/Authentication/SignUp/SignUp'));
const ForgotPassword = React.lazy(() => import('../Pages/Authentication/ForgotPassword/ForgotPassword'));
const LandingPage = React.lazy(() => import('../Pages/LandingPage/LandingPage'));
const ProductListing = React.lazy(() => import('../Pages/ProductListing/ProductListing'));
import MockAPI from "../Helpers/MockMan";
import Dashboard from '../Pages/Dashboard';
const Cart = React.lazy(() => import('../Pages/Cart_wishlist/Cart'));
const Wishlist = React.lazy(() => import('../Pages/Cart_wishlist/Wishlist'));

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
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/mockman' element={<MockAPI/>}/>
            <Route path='/*' element={<Dashboard/>}/>
            <Route path="*" element={<NoMatch/>} />
        </Routes>
   );
}
export default RouteData;
