import React from 'react';
import './ShipCard.css';

const ShipCard =({shipName, imageURL, manufacturer, description, pageURL}) => {
    return (
        <div className="card w5 dib mr3 grow shadow-5">
            <img className="card-img-top" src={`https://robertsspaceindustries.com${imageURL}`} alt={shipName}/>
            <div className="card-body">
                <h5 className="card-title">{shipName}</h5>
                <h5 className='fl mr3'>{manufacturer.code}</h5>
                <a href={`https://robertsspaceindustries.com${pageURL}`} className="btn btn-secondary">Ship Page</a>
                <p className="card-text fn">{description}</p>               
            </div>  
        </div>
    )   
}

export default ShipCard;