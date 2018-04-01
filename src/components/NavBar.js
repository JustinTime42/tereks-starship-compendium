import React from 'react';
import SpeechButton from './SpeechButton'

const NavBar = ({selectListen, selectStartListening, selectStopListening, searchChange, clearSearch, onHelpClick}) => { 

    const onListenClick = () => {  
        if (selectListen === false) {
            selectStartListening()        
        } else {
            selectStopListening()        
        }
    }

    return (
    
        <nav className="navbar navbar-expand-lg fixed-top grid-topnav">
            <div className="container" style={{position: 'fixed'}}>
                    <a className="navbar-brand">Terek's Starship Compendium</a>
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
                        <li className="nav-item ml2">  
                            <button 
                                className='form-control nav-link mybtn ' 
                                style={{color:'#0A89BB'}}
                                onClick={clearSearch}>
                                Clear Search
                            </button>
                        </li>  
                        <SpeechButton 
                            selectListen={selectListen}
                            onListenClick={onListenClick}
                        />;
                        
                        <li className="nav-item ml5">  
                            <button 
                                className='fc form-control nav-link mybtn'
                                style={{color:'#0A89BB'}} 
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


