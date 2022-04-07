import React, { useEffect, useState } from 'react';
import './Corousel.css';

export const Corousel = () =>{

    const mySlides = ["https://fleetroot.com/blog/wp-content/uploads/2020/11/pharmacy_delivery_services.jpg", "https://thumbs.dreamstime.com/b/fast-pharmacy-delivery-concept-deliveryman-fast-pharmacy-delivery-concept-deliveryman-scooter-delivering-medication-182768717.jpg"];
    const [slideIndex, setSlideIndex] = useState(0);

     const handleChange = (order) => {
        if(order === "increment"){
            setSlideIndex(prev => (prev+1) % mySlides.length)
        }else{
            setSlideIndex(prev => prev>0?(prev-1) % mySlides.length:(prev+1))    
        }
    }

    return(
        <>
        {/* <!-- corousel --> */}
        <div id="corousel-slider" className="corousel-slider">
            <div className="slider-img">                    
                <div className="my-slides">
                    <img src={mySlides[slideIndex]} alt="blithe1" />
                </div>
            </div>
            <button className="btn btn-sm btn-icon prev-btn" onClick={()=>handleChange('increment')}>&#10094;</button>
            <button className="btn btn-sm btn-icon next-btn" onClick={()=>handleChange('deccrement')}>&#10095;</button>
		</div>
        </>
    );
}

// export default Corousel;