import React from 'react';
import './ShipCard.css';

const ShipCard =({shipName, imageURL, manufacturer, description, pageURL}) => {
    return (
        <div class="card w5 dib mr3 grow shadow-5">
            <img class="card-img-top" src={`https://robertsspaceindustries.com${imageURL}`} alt={shipName}/>
            <div class="card-body">
                <h5 class="card-title">{shipName}</h5>
                <h5 className='fl mr3'>{manufacturer.code}</h5>
                <a href={`https://robertsspaceindustries.com${pageURL}`} class="btn btn-secondary">Ship Page</a>
                <p class="card-text fn">{description}</p>
                
            </div>  
        </div>
    )   
}

export default ShipCard;