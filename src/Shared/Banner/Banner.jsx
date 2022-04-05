import React from 'react';
import './Banner.css';

export const Banner = () => {
    return(
        <div className="Blithe-plus-banner">
            
            <div className="dis-banner bg-lightcoral">             
                <p className="heading-lg"><strong>BLITHE</strong><span className="text-md">Plus</span></p>
                <p className="heading-md banner-text">Save flat 5% extra & enjoy free delivery With <span className="text-md">PLUS</span> membership</p>
                <div className="banner-img">
                    <img src="https://assets.pharmeasy.in/web-assets/dist/b20b0932.png" alt="banner-img"/>
                </div>
            </div>
        </div>
    );
}

// export default Banner;