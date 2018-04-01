import React from 'react';
import '../styles/ShipCard.css';


const ShipCard =({shipID, shipName, imageURL, manufacturer, description, pageURL, modalOpen}) => {

    const modalClick = () => {
        modalOpen(shipID);
    }
    return (
        <div className="card mr3 mb3 ml3 grow shadow-5">            
            <img className="card-img-top" src={`https://robertsspaceindustries.com${imageURL}`} alt={shipName}/>
            <div className="card-body">
            
                <h5 className='fl'>{shipName}</h5>      
                <button className="fr mybtn grow" onClick={modalClick}>Details</button>          
                <h5 className='mr3' style={{clear:'both'}}>{manufacturer.code}</h5>
              
                <p className="card-text fn">{description}</p>           
            </div>  
        </div>
    )   
}

export default ShipCard;