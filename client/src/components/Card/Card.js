import React from "react";

const Card = props => {
    return <div className='card'>
    <img className='card-img-top' style={{width: "100%", height: "100%", objectFit: "cover"}}src={props.src} alt={props.alt}/>
        {props.children}
    </div>
}

export default Card;