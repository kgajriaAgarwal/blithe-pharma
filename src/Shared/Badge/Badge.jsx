import React from "react";

export  const Badge = (props) =>{

    const badgeColor = {
        "Popular": 'badge-popular',
        "Best Selling": 'badge-bs',
        "New": 'badge-new'
    }

    return(
        <span className={`badge ${badgeColor[props.prdctBadge]}`}>{props.prdctBadge}</span>
    );
}

// export default Badge;