import React from 'react';
import './Footer.css';

export const Footer = () =>{
    return(
        <>
             {/* <!---footer- --> */}
             <section id="footer">
                <div className="col-12 flex-container-row footer">
                    <div className="col-3">
                        <p className="text-lg">Featured Categories</p>
                        <ul className='footer-list'>
                            <li>Covid Essentials</li>
                            <li>Healthcare Devices</li>
                            <li>Health Food and Drinks</li>
                            <li>Personal Care</li>
                            <li>Ayurvedic Care</li>
                            <li>Mother and Baby Care</li>
                            <li>Accessories And Wearables</li>
                            <li>Skin Care</li>                       
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="text-lg">Featured Categories</p>
                        <ul className='footer-list'>
                            <li>Diabetic Care</li>
                            <li>Health Condition</li>
                            <li>Sexual Wellness</li>
                            <li>Home Care</li>
                            <li>Fitness & Supplements</li>
                            <li>Elderly Care</li>
                            <li>Surgicals and Dressings</li>
                            <li>Pet Care</li>                 
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="text-lg">Company</p>
                        <ul className='footer-list'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Partner with Blithe</li>
                            <li>Sell at Blithe</li>
                        </ul>
                        <p className="text-lg">Connect with us at:</p>
                        <ul className='footer-list'>
                            <li>Linked in</li>
                            <li>facebook</li>
                            <li>instagram</li>
                            <li>twitter</li>
                        </ul>
                    </div>
                </div>
                <div className="container text-center">
                    <p className='text-sm'>Made by KARISHMA GAJRIA AGARWAL</p>                
                </div>
            </section>
        </>
    );
}

// export default Footer;