import React from 'react';

const SearchBox = ({ searchChange }) => {
   
        return (
            <div className = "tc pa3">
                <input 
                className="form-control mr-sm-2"
                    type='search' 
                    placeholder='search'
                    aria-label="Search"
                    onChange={this.searchChange}
                />
            </div>
        )
}

export default SearchBox;


 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchChange}/>
               