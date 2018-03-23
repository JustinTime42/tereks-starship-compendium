import React from 'react';
import ShipCard from './ShipCard';


const ShipList = ({filteredShips, modalClick}) => {
 
    return ( 
                  
        <div>
            {   
                filteredShips.map((ship, i) => {
                    return (
                        <div className='fl w-20'>
                            <ShipCard
                                key = {i}
                                shipID = {ship.id}
                                shipName = {ship.name}
                                imageURL = {ship.media[0].images.store_small}
                                pageURL= {ship.url}
                                manufacturer = {ship.manufacturer}
                                description = {ship.description}
                                onModalClick = {modalClick}
                            />
                        </div>
                    );
                })    
            }
                        
        </div>
    );  
}

export default ShipList;