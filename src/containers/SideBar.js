import React,{Component} from 'react'
import '../styles/sidebar.css'
import {ButtonToolbar} from 'react-bootstrap'
import DropList from '../components/DropList'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SideBar = ({onFiltersChange, onListenClick}) => {
   

    return (
        <div className='sidenav fl grid-sidebar' >
            <div style={{position: 'fixed'}}>
            
            <form id='sidebarForm'>
            <h3>Manufacturers</h3>
            <DropList group="manufacturer.code" onFiltersChange={onFiltersChange} />
            <h3>Type</h3>
            <DropList group="type" onFiltersChange={onFiltersChange} />
           
            </form>
            </div>
        </div>
 
    )
}


export default SideBar;
