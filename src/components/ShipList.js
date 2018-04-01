import React from 'react';
import ShipCard from './ShipCard';

const ShipList = ({filteredShips, modalOpen}) => {
    
    return ( 
                  
        <div className='grid-shiplist'>
            {   
                filteredShips.map((ship, i) => {
                    return (
                        <div key={ship.id.toString()}>
                            <ShipCard                                
                                shipID = {ship.id}
                                shipName = {ship.name}
                                imageURL = {ship.media[0].images.store_small}
                                pageURL= {ship.url}
                                manufacturer = {ship.manufacturer}
                                description = {ship.description}
                                modalOpen = {modalOpen}
                            />
                        </div>
                    );
                })    
            }
                        
        </div>
    );  
}

export default ShipList;