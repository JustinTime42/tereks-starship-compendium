import React from 'react';
// import SearchBox from './SearchBox';

const NavBar = ({ searchChange }) => {
    return (
        <nav className="bg-near-white navbar navbar-expand-md fixed-top">
            <div className="container">
                <div className="navbar-translate">
                    <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Star Citizen Vehicle Ark</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <form>
                                <input className="form-control mr-sm-2 nav-link" type="search" placeholder="Search" aria-label="Search" onChange={searchChange}/>
                            </form>
                        </li>                   
                        <li className="nav-item">
                            <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://github.com/slarti-42/sc-vehicle-ark" target="_blank">
                                <i className="fa fa-github"></i>
                                <p className="d-lg-none">GitHub</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    );
}

export default NavBar;