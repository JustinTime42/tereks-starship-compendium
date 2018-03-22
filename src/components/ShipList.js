import React from 'react';
import ShipCard from './ShipCard';


const ShipList = ({filteredShips, modalClick}) => {
 
    return ( 
                  
        <div className='mt5'>
            {   
                filteredShips.map((ship, i) => {
                    return (
                        <div className='fl'>
                            <ShipCard
                                key = {i}
                                shipID = {filteredShips[i].id}
                                shipName = {filteredShips[i].name}
                                imageURL = {filteredShips[i].media[0].images.store_small}
                                pageURL= {filteredShips[i].url}
                                manufacturer = {filteredShips[i].manufacturer}
                                description = {filteredShips[i].description}
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