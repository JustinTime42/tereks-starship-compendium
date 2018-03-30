import React, { Component } from 'react';
import HelpModal from '../components/HelpModal'
import NavBar from '../components/NavBar';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import ShipList from '../components/ShipList'
import ShipModal from '../components/ShipModal';
import ships from '../ships'
import SideBar from './SideBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchField: '',
      filteredShips: ships,
      showModal: false,
      shipID: '',
      searchParams: [],
      helpModal: false,
    }
  }
  onModalClick = (shipID) => {
      this.setState({showModal: !this.state.showModal})
      this.setState({shipID: shipID})    
  };

  onHelpClick = () => {
    this.setState({helpModal: !this.state.helpModal})
  }
  
  clearSearch = () => {
    this.setState({searchField: ''})
    this.setState({filteredShips: ships})
    this.setState({searchParams: []})
  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
    let searchShips = ships.filter(ship => {
      if (ship.name.toLowerCase().includes(this.state.searchField.toLowerCase())) {
        return true;
      } else if (ship.manufacturer.name.toLowerCase().includes(this.state.searchField.toLowerCase())) {
        return true;
      } else if (ship.manufacturer.code.toLowerCase().includes(this.state.searchField.toLowerCase())) {
        return true;
      } else if (ship.type.toLowerCase().includes(this.state.searchField.toLowerCase())) {
        return true;
      } else if ((ship.focus) && (ship.focus.toLowerCase().includes(this.state.searchField.toLowerCase()))) {
        return true;
      } else {return false}
    }
  )
    this.setState({filteredShips: searchShips})
  }

  onFiltersChange = (event) => {   

    let searchParams = this.state.searchParams;
    
      if (!this.state.searchParams.find(value => value === event.target.value)) {
        searchParams.push(event.target.value)
      } else {
        searchParams = searchParams.filter(x => x !== event.target.value);
      }
      this.setState({searchParams: searchParams})
      let searchShips = ships.filter(ship => {
       
          if (searchParams.some(x => ship.manufacturer.code === x)) {
            return true;
          } else if (searchParams.some(x => ship.type === x)) {
            return true;
          } else if ((ship.focus) && (searchParams.some(x => ship.type === x))) {
            
            return true;
        } else {return false}
      }
    )
      this.setState({filteredShips: searchShips})
}

  voiceCommands = (input) => {
    if (input.includes('scroll down')) {
      window.scrollBy(0, 400);
    } else if (input.includes('scroll up')) {
      window.scrollBy(0, -400); 
    } else if (input.includes('clear')) {
      this.setState({filteredShips: ships}); 
    }else if (input.includes('help')){
      this.setState({helpModal: true})
    } else {  
      let searchShips = ships.filter(ship => {   
          if (ship.name.toLowerCase().split(" ").some(word => {
            return input.toLowerCase().split(" ").includes(word)})) {
              return true
            } else if (ship.manufacturer.name.toLowerCase().split(" ").some(word => {
              return input.toLowerCase().split(" ").includes(word)})) { 
                return true;
            } else if (ship.type.toLowerCase().split(" ").some(word => {
              return input.toLowerCase().split(" ").includes(word)})) { 
                return true;
            } else if ((ship.focus) && (ship.focus.toLowerCase().split(" ").some(word => {
              return input.toLowerCase().split(" ").includes(word)}))) { 
                return true;
              } else {return false}
          })   
             
      this.setState({filteredShips: searchShips}); 
    }
  }

   onListenClick = () => {   
    fetch('https://getstartednode-excellent-panther.mybluemix.net/api/speech-to-text/token')
    .then(function(response) {
        return response.text();
    }).then((token) => {
      var stream = recognizeMic({
          token: token,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });      
      stream.on('data', (data) => {        
        if (data.final){
          return this.voiceCommands(data.alternatives[0].transcript.trim());
        }                
      });   
      stream.on('error', (err) => {
          console.log(err);
      });      
    }).catch(function(error) {
        console.log(error);
    });          
  };

  render() {
    return (
      <div className='grid-container' id="wholePage">   
        <SideBar onFiltersChange={this.onFiltersChange} onListenClick={this.onListenClick}/>
        <NavBar 
        searchChange={this.onSearchChange} 
        clearSearch={this.clearSearch} 
        onHelpClick={this.onHelpClick}
        /> 
        
        <ShipModal 
          show={this.state.showModal} 
          onClose={this.onModalClick}  
          shipID={this.state.shipID}      
        />
        <HelpModal 
        helpModal={this.state.helpModal} 
        onHelpClick={this.onHelpClick} 
        />
        <div className='grid-shiplist'>       
        <ShipList 
          filteredShips={this.state.filteredShips} 
          modalClick={this.onModalClick}
        />  
        </div>
      </div>
    )
  };
}

export default App;
