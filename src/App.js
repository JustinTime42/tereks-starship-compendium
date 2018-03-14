import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ships from './ships.js'
import ShipList from './components//ShipList'


class App extends Component {
  constructor() {
    super()
    this.state = {
      searchField: '',
      filteredShips: [],
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredShips = ships.filter(ship => {
      return ship.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div>
        <NavBar searchChange={this.onSearchChange} /> 
        <ShipList filteredShips={filteredShips} />        
        <Footer />
        

      </div>
    )
  };
}

export default App;
