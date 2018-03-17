import React from 'react';
import ShipCard from './ShipCard';
import App from '../App';

const ShipList = ({filteredShips}) => {
    return (            
        <div className='mt5'>
            {   
                filteredShips.map((ship, i) => {
                    return (
                        <div className='fl'>
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