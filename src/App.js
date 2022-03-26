import './App.css';
import react, {useState, useEffect} from 'react';
import LandingPage from './Pages/LandingPage/LandingPage';
import logo from "./logo.png";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import ForgotPassword from "./Pages/Authentication/ForgotPassword/ForgotPassword";
import MockAPI from "./Helpers/MockMan";
import BlitheRoute from "./route/BlitheRoute";
import RouteData from "./route/RouteData";
import { Alert } from './Shared/Alert/Alert';
import { useAlert } from './Context';
import Header from './Shared/Header/Header';

function App() {

  const {alertContent , setAlertContent} = useAlert();

  //DISMISSES THE ALERT AFTER 3 SEC..
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertContent(prevState=> {return {...prevState, isShow:false}})
    }, 3000);
    return () => clearTimeout(timer);
  }, [alertContent]);

  return (
    <div className="App">
      <BlitheRoute/>
      <Alert/>
    </div>
  );
}

export default App;
