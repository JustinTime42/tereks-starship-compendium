import React from 'react';
// import SearchBox from './SearchBox';

const NavBar = ({ searchChange, clearSearch, onHelpClick }) => {

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
                    <a className="navbar-brand">Terek's Starship Compendium</a>
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
                        <li className="nav-item ml5">  
                            <button 
                                className='form-control nav-link mybtn' 
                                onClick={clearSearch}>Clear Search
                            </button>
                        </li>  
                        <li className="nav-item ml2">  
                            <button 
                                className='fc form-control nav-link mybtn' 
                                onClick={onHelpClick}>Help
                            </button>
                        </li>  
                    </ul>
                
                </div>
                
            </div> 
        </nav>  
    );
}

export default NavBar;