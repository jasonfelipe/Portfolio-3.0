import React from "react";
import './Card.css'

const Card = props => {
    return <div className='card'>
    <img className='card-img-top' src={props.src} alt={props.alt}/>
        <div className='card-body'>
            <h4 className="card-body text-center">{props.cardTitle}</h4>
            <p className='card-text'>{props.cardText}</p>
        </div>
    </div>
}

export default Card;