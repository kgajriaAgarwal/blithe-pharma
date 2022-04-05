import React from 'react';
import cartIcon from '../../Assets/Icons/icons8-shopping-bag-60.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useCart, useLayout, useWishlist } from '../../Context';
import { BiMenu , BiHomeAlt } from "react-icons/bi";
import { getTotalProducts } from '../../Helpers/Utils';


export const Header = () =>{

    const {cartProducts} = useCart();
    const encodedToken = localStorage.getItem("token");
    const {wishlistProducts} = useWishlist();
    const {showSidebar , setShowSidebar} = useLayout();

    return(
        <>
        {/* <!-- header --> */}
        <div className ="header-container">
            <header className="header">
                <div className='header-name-container'>
                    <button 
                        onClick = {()=>setShowSidebar(!showSidebar)}
                    >
                        <BiMenu color='#fff' size='2rem' id="btn"/>
                    </button>
                    <p className="header-title">
                        Blithe
                    </p>
                </div>
                <div className="header-icon-container">
                    <input type="text" placeholder='Search here..' className='header-search'/>
                    <div className="header-icon-sub-container">
                         <Link to="/user/wishlist" className="header-btn-link">
                            {/* <button className="header-btn"> */}
                            <div className="badge-container">
                                <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
                                    className="icon-btn-img" alt="icon-btn-img" />
                                <span className="avatar-badge avatar-badge-offline">{getTotalProducts(wishlistProducts, "wishlist")}</span>
                            </div>
                            {/* </button> */}
                        </Link>
                        <div className="badge-container">
                            <img className="avatar xs"
                                src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt="user"/>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="header-cart-container badge-container">
                        <Link to ={encodedToken?"/user/cart":"/login"}>
                           <div className="badge-container">
                            <img className="sm" src={cartIcon} alt="icon"/>
                            <span className="avatar-badge avatar-badge-online">{getTotalProducts(cartProducts, "cart")}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
        </>
    );
}

