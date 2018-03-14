import React from 'react';
import ShipCard from './ShipCard';

const ShipList = ({filteredShips}) => {
    return (            
        <div>
            {   
                filteredShips.map((ship, i) => {
                    return (
                        <div class='fl'>
                        <ShipCard
                            key = {i}
                            shipName = {filteredShips[i].name}
                            imageURL = {filteredShips[i].media[0].images.store_small}
                            pageURL= {filteredShips[i].url}
                            manufacturer = {filteredShips[i].manufacturer}
                            description = {filteredShips[i].description}
                        />
                        </div>
                    );
                })    
            }
                        
        </div>
    );  
}

export default ShipList;