import React from 'react';

const SpecParser = ({itemArray}) => {

    return (        
            <div><p>
                {itemArray.map((x, i) => <div>{x.mounts} x {x.size} {x.name === null ? "Available" : x.name}</div>)}                
            </p></div>
        
    );
}

export default SpecParser;