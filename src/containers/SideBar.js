import React,{Component} from 'react'
import '../styles/sidebar.css'
import DropList from '../components/DropList'

class SideBar extends Component {
    constructor() {
        super() 
        this.state = {
            activeFilters: []
        }
    }

    handleChange = () => {
        this.setState({activeFilters: this.target.value})
    }

    addFilter = (choice) => {
        let filtersCopy = this.state.activeFilters;
        filtersCopy.push(choice)
        this.setState({activeFilters: filtersCopy})
        console.log(this.state.activeFilters)
    };


    render() {
        
        return (
            <div className='sidenav fl'>
                <button className='mybtn'>Listen</button> 
                <DropList 
                    group="manufacturer.code" 
                    
                />

            </div>
     
        )
    }
    
}

export default SideBar;