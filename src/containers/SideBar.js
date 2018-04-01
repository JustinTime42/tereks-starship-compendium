import React from 'react'
import '../styles/sidebar.css'
import DropList from '../components/DropList'

const SideBar = ({onFiltersChange}) => {
   

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
