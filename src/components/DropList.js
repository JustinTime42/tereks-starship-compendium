import React from 'react'
import ships from '../ships'
import {DropdownButton, MenuItem} from 'react-bootstrap'

const DropList = ({group, addFilter}) => {
    let groupName = group;
    let groupProp = group;
    let choices = [];

    if (group === "manufacturer.code"){
        groupName = "manufacturer"
        choices = ships.map(ship => {
            return ship.manufacturer.code;
        })
    } else {
        choices = ships.map(ship => {
            return ship[groupProp];
        })
        
    }

    let choices2 = Array.from(new Set(choices));

            

    return (
        <div>
            <DropdownButton 
                bsStyle='default'
                title={groupName}
                key={groupName}
                id={groupName}
            />  
            {
                choices2.map((choice, i) => {
                    
                    return ( 
                       <div>
                            <input type="checkbox" />
                            <p>{choice}</p>
                       </div>
                    )
                })
            }        
                
       
        </div>
    )
}

export default DropList