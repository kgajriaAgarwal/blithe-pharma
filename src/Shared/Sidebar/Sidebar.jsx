import React from 'react';
import blitheLogo from '../../Assets/Images/Blithe-logo.png'
import {Image} from '../index';
import { RiHandHeartLine } from "react-icons/ri";
import { GiHospitalCross } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { MdShoppingCart, MdOutlineSubscriptions, MdHistory, MdOutlineWatchLater, MdPlaylistPlay, MdLogout, MdOutlineLogin, MdOutlineLabelImportant } from "react-icons/md";
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import { clearLocalStorage} from '../../Helpers/Helpers/Utils';
import { clearLocalStorage } from '../../Helpers/Utils'; 

export const Sidebar = () => {

    const encodedToken = localStorage.getItem("token");

    return(
        <>
            {/* <h1>side bar</h1> */}
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <Image src={blitheLogo} alt="blithe-logo" className="logo_name"/>                
                    </div>
                </div>
                <ul className="nav_list">
                    <li>
                        <Link to="/">
                            <GiHospitalCross color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Home</span>
                        </Link>
                        <Link to="/user/cart" >
                            <MdShoppingCart color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Cart</span>
                        </Link>
                        <Link to="/user/wishlist" >
                            <RiHandHeartLine color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Wishlist</span>
                        </Link>
                        {encodedToken?'':
                        <>
                        <Link to="/login" >
                            <MdOutlineLogin color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Login</span>
                        </Link>
                        <Link to="/signup" >
                            <MdOutlineLabelImportant color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">SignUp</span>
                        </Link>
                        </>
                        }
                    </li>
                </ul>
                
                <div className="profile_content">
                    <div className="profile">
                        <Image className="avatar xs"
                                src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt="user"/>
                        <p>karishma gajria</p>
                    </div>
                    {/* //clearLocalStorage() */}
                    <button className='btn-logout' onClick={()=>{
                            clearLocalStorage
                        }}>
                        <MdLogout color='white' size='2rem' id="log-out" />
                    </button>                    
                </div>
            </div>
        </>
    );
}



