import React from 'react';

const SpecParser = ({itemArray}) => {

    return (        
            <div>
                {itemArray.map((x, i) => <div>{x.mounts} x {x.size} {x.name === null ? "Available" : x.name}</div>)}                
            </div>
        
    );
}

export default SpecParser;