import React from 'react';
import './Card.css';

function Card({image,title,text}) {
    return (
        <div class="card lpy">
            <div class="card-body">
                
                <img src={image} alt="" className="plo"/>
                <p className="title1">{title}</p>
                <p className="bor">{text}</p>
            </div>
        </div>
    )
}

export default Card;
