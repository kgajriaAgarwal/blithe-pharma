import React from 'react';
import cartIcon from '../../Assets/Icons/icons8-shopping-bag-60.png';
import './Header.css';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../Context/WishlistContext';


const Header = () =>{

    const {cartProducts} = useCart();
    const encodedToken = localStorage.getItem("token");
    const {wishlistProducts} = useWishlist();
    // console.log("state, dispatch^^^^", state, dispatch);

    return(
        <>
        {/* <!-- header --> */}
        <div className ="header-container">
            <header className="header">
                <h2 className="header-title">
                    Blithe
                </h2>
                <div className="header-icon-container">
                    <input type="text" placeholder='Search here..' className='header-search'/>
                    <div className="header-icon-sub-container">
                         <Link to="/user/wishlist" className="header-btn-link">
                            {/* <button className="header-btn"> */}
                            <div className="badge-container">
                                <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
                                    className="icon-btn-img" alt="icon-btn-img" />
                                <span className="avatar-badge avatar-badge-offline">{wishlistProducts.length}</span>
                            </div>
                            {/* </button> */}
                        </Link>
                        <div className="badge-container dropdown">
                            <img className="avatar xs"
                                src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt="user"/>
                            <div className="dropdown-content">
                                <a href="../Authentication/Login/Login.html">Login</a>
                                <a href="../Authentication/SignUp/SignUp.html">Sign Up</a>
                                <a href="../UserProfile/UserProfile.html">User Profile</a>
                                <a href="../Authentication/ForgotPassword/ForgotPassword.html">Forgot Password</a>
                                <a href="../LandingPage/LandingPage.html">Log Out</a>
                            </div>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="header-cart-container badge-container">
                        <Link to ={encodedToken?"/user/cart":"/login"}>
                           <div className="badge-container">
                            <img className="sm" src={cartIcon} alt="icon"/>
                            <span className="avatar-badge avatar-badge-online">{cartProducts.length}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
        </>
    );
}

export default Header;