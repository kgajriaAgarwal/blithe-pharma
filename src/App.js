import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import logo from "./logo.png";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import ForgotPassword from "./Pages/Authentication/ForgotPassword/ForgotPassword";
import MockAPI from "./Helpers/MockMan";
import BlitheRoute from "./route/BlitheRoute";
import RouteData from "./route/RouteData";

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <RouteData/> */}
      <BlitheRoute/>
      {/* <Login/> */}
      {/* <MockAPI/> */}
    </div>
  );
}

export default App;
