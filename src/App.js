import React, { Component } from 'react';
import ships from './ships.js'
import ShipList from './components//ShipList';
import SearchBox from './components/SearchBox';


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
        <header>
          
          <h1>Welcome to the Starship ARK</h1>
        </header>
                
          <SearchBox searchChange={this.onSearchChange} />          
          <ShipList filteredShips={filteredShips} />

      </div>
    )
  };
}

export default App;
