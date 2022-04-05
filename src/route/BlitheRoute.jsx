import React,{ Suspense} from 'react';
import RouteData from './RouteData'
import PrivateRoute from './PrivateRoute';
import { Routes, Route } from "react-router-dom";
import Loader from '../Shared/Loader/Loader';

const BlitheRoute = () =>{

    return(
        <Suspense fallback={<Loader/>}>
            <RouteData/>
        </Suspense>
    );
}

export default BlitheRoute;