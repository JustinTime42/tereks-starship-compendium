import React from 'react'
import SpeechButton from './SpeechButton'
import { slide as Menu } from 'react-burger-menu'

const NavBar = ({selectListen, selectStartListening, selectStopListening, searchChange, clearSearch, onHelpClick}) => { 

    const onListenClick = () => {  
        if (selectListen === false) {
            selectStartListening()        
        } else {
            selectStopListening()        
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm fixed-top grid-topnav">
                <div className="container" style={{position: 'fixed'}}>
                        
                    <div className="desktop" id="navbarToggler">
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
                            <li className="nav-item">  
                                <button 
                                    className='form-control nav-link link mybtn ' 
                                    style={{color:'#0A89BB'}}
                                    onClick={clearSearch}>
                                    Clear Search
                                </button>
                            </li>  
                            <li className="nav-item mr3">
                                <SpeechButton 
                                    selectListen={selectListen} 
                                    onListenClick={onListenClick}
                                />
                            </li>
                            <a className="navbar-brand">Terek's Starship Compendium</a>
                            <li className="nav-item">  
                                <button 
                                    className='fc form-control nav-link mybtn'
                                    style={{color:'#0A89BB'}} 
                                    onClick={onHelpClick}>Help
                                </button>
                            </li>  
                            <li className="nav-item ml2">  
                            <a 
                                className='fc form-control nav-link mybtn'
                                style={{color:'#0A89BB'}} 
                                href="https://www.patreon.com/bePatron?u=10537541" 
                                data-patreon-widget-type="become-patron-button">Become a Patron!
                            </a>
                            <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                            </li>                         
                        </ul>                  
                    </div>                    
                </div> 
            </nav>  
            <nav className="mobile fixed-top grid-topnav">            
                <div className="container tc" style={{position: 'fixed'}}>
                    <h2>Terek's Starship Compendium</h2>
                </div>
            </nav>
            <nav>
                <Menu burgerBarClassName="mobile">                                    
                    <ul>
                        <li>
                            <form>
                                <input 
                                    className="form-control mr-sm-2 nav-link" 
                                    type="search" placeholder="Search" 
                                    aria-label="Search" 
                                    onChange={searchChange}
                                />
                            </form>                                                        
                        </li>    
                        <li>  
                            <button 
                                className='form-control nav-link link mybtn ' 
                                style={{color:'#0A89BB'}}
                                onClick={clearSearch}>
                                Clear Search
                            </button>
                        </li>  
                        <li>
                            <SpeechButton 
                                selectListen={selectListen} 
                                onListenClick={onListenClick}
                            />
                        </li>                        
                        <li className="nav-item">  
                            <button 
                                className='fc form-control nav-link mybtn'
                                style={{color:'#0A89BB'}} 
                                onClick={onHelpClick}>Help
                            </button>
                        </li>  
                        <li className="nav-item ml2">  
                        <a 
                            className='fc form-control nav-link mybtn'
                            style={{color:'#0A89BB'}} 
                            href="https://www.patreon.com/bePatron?u=10537541" 
                            data-patreon-widget-type="become-patron-button">Become a Patron!
                        </a>
                        <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                        </li>                          
                    </ul>                    
                </Menu> 
            </nav> 
        </div>
    );    
}

export default NavBar;


