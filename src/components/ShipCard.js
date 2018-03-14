import React from 'react';
import './ShipCard.css';

const ShipCard =({shipName, imageURL, manufacturer, description}) => {
            return (
            <div className='card w5 bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
                <h3>{shipName}</h3>
                <h5>{manufacturer.code}</h5>
                <img alt={shipName} src={`https://robertsspaceindustries.com${imageURL}`} />
                                    
                <p>{description}</p>                   
            </div>
         
        )   
}

export default ShipCard;