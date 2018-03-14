import React from 'react';
// import SearchBox from './SearchBox';

const NavBar = ({ searchChange }) => {
    return (
        <nav class="navbar navbar-expand-md fixed-top">
            <div class="container">
                <div class="navbar-translate">
                    <button class="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Star Citizen Vehicle Ark</a>
                </div>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <form>
                                <input className="form-control mr-sm-2 nav-link" type="search" placeholder="Search" aria-label="Search" onChange={searchChange}/>
                            </form>
                        </li>                   
                        <li class="nav-item">
                            <a class="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://github.com/slarti-42/sc-vehicle-ark" target="_blank">
                                <i class="fa fa-github"></i>
                                <p class="d-lg-none">GitHub</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    );
}

export default NavBar;