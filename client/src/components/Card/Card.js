import React from "react";
import './Card.css'

const Card = props => {
    return <div className='card'>
        <img className='card-img-top' src={props.src} alt={props.alt} />
        <div className='card-body'>
            <h4 className="card-title text-center">{props.cardTitle}</h4>
            <p className='card-text'>{props.cardText}</p>
        </div>

        <div className='fixedButtons'>
            <a target='_blank' rel='noopener noreferrer' href={props.github} className='btn btn-secondary'>Github</a>
            <a target='_blank' rel='noopener noreferrer' href={props.projecturl} className='btn btn-primary'>Project Page</a>
        </div>


        {props.children}
    </div>
}

export default Card;
