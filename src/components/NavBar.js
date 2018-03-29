import React from 'react';
// import SearchBox from './SearchBox';

const NavBar = ({ searchChange, clearSearch }) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top grid-topnav">
            <div className="container" style={{position: 'fixed'}}>
                <div className="navbar-translate">
                    <button className="navbar-toggler navbar-toggler-right navbar-burger" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarToggler" 
                        aria-controls="navbarTogglerDemo02" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    </button>
                    <a className="navbar-brand">Star Citizen Vehicle Ark</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <form>
                                <input 
                                    className="form-control mr-sm-2 nav-link" 
                                    type="search" placeholder="Search" 
                                    aria-label="Search" 
                                    onChange={searchChange}
                                />
                            </form>                                                        
                        </li>    
                        <li className="nav-item fl">  
                            <button className='fc form-control nav-link mybtn' onClick={clearSearch}>Clear Search</button>
                        </li>   
                    </ul>
                
                </div>
                
            </div>
        </nav>  
    );
}

export default NavBar;