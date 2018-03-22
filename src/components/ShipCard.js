import React from 'react';
import './ShipCard.css';


const ShipCard =({shipID, shipName, imageURL, manufacturer, description, pageURL, onModalClick}) => {

    const modalClick = () => {
        onModalClick(shipID);
    }
    return (
        <div className="card w5 dib ma3 grow shadow-5">
            <img className="card-img-top" src={`https://robertsspaceindustries.com${imageURL}`} alt={shipName}/>
            <div className="card-body">
                <h5 className="card-title">{shipName}</h5>
                <h5 className='fl mr3'>{manufacturer.code}</h5>
                <button className="btn btn-secondary" onClick={modalClick}>Details</button>
                <p className="card-text fn">{description}</p>           
            </div>  
        </div>
    )   
}

export default ShipCard;