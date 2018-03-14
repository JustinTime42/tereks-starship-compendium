import React from 'react';

const SearchBox = ({ searchChange }) => {
   
        return (
            <div className = "tc pa3">
                <input 
                    className = "tc pa2"
                    type='search' 
                    placeholder='search'
                    onChange={searchChange}
                />
            </div>
        )
}

export default SearchBox;