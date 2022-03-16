import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
const Login = React.lazy(() => import('../Pages/Authentication/Login/Login'));
const SignUp = React.lazy(() => import('../Pages/Authentication/SignUp/SignUp'));
const ForgotPassword = React.lazy(() => import('../Pages/Authentication/ForgotPassword/ForgotPassword'));

//Routing Data
const RouteData = () =>{
    return(
        <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
            {/* <Route exact path='/' element={<Home/>}/> */}
            </Route>
            <Route exact path='/forgot-password' element={<ForgotPassword/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>
    </Routes>
   );
}
export default RouteData;