import React, { Component } from 'react';
import HelpModal from '../components/HelpModal'
import NavBar from '../components/NavBar';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import WatsonSpeech from 'watson-speech'
import ShipList from '../components/ShipList'
import ShipModal from '../components/ShipModal';
import ships from '../ships'
import SideBar from './SideBar'
const introText = "Welcome to the starship Compendium, the best place to find information on starships in the UEE. I am happy to help you find what you are looking for. Click \"Listen\" and you can search the compendium verbally. Click \"Help\" for more information."
let stream = '';
let audio = '';

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
      listening: false,
      selectListen: false,
    }
  }

  clearSearch = () => {
    this.setState({searchField: ''})
    this.setState({filteredShips: ships})
    this.setState({searchParams: []})
  }

  componentDidMount () {
    this.startSpeaking(introText)
  }

  onHelpClick = () => {
    this.setState({helpModal: true})
  }

  helpClose = () => {
    this.setState({helpModal: false})
    this.stopSpeaking();
    if (this.state.listening === true)
      this.startListening();
  }

  modalOpen = (shipID) => {
    this.setState({showModal: true})
    this.setState({shipID: shipID})   
  };

  modalClose = () => {
    this.setState({showModal: false})
    this.stopSpeaking();
    if (this.state.listening === true)
      this.startListening();
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

  startListening = () => {
    this.setState({listening: true})
    this.stopSpeaking();
    fetch('https://getstartednode-excellent-panther.mybluemix.net/api/speech-to-text/token')
    .then(function(response) {
        return response.text();
    }).then((token) => {
      stream = recognizeMic({
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
  } 

  startSpeaking = (text) => {
    if (audio !== '') {
      audio.pause();
      audio = '';
    }
    
    if (stream !== '') {
      stream.stop()
    }
    fetch('https://getstartednode-excellent-panther.mybluemix.net/api/text-to-speech/token')
    .then(function(response) {
      return response.text();
    }).then((token) => {
      audio = WatsonSpeech.TextToSpeech.synthesize({
        text: text,
        token: token,
        autoPlay: false,
        accept: 'audio/wav',
      })
      audio.play();
    });   
  
  }

  selectStartListening = () => {
    this.setState({selectListen: true})
    this.startListening() 
  }

  selectStopListening = () => {
    this.setState({listening: false})
    this.setState({selectListen: false})
    if (stream !== ''){
      stream.stop();
    }    
  }

  stopListening = () => {
    this.setState({listening: false})
    if (stream !== ''){
      stream.stop();
    }    
  }

  stopSpeaking = () => {
    this.setState({listening: true})
    if (audio !== '') {
      audio.pause();
      audio = '';
    }
  }

  voiceCommands = (input) => {
  
    if (input.includes('scroll down')) {
      window.scrollBy(0, 400);
    } else if (input.includes('scroll up')) {
      window.scrollBy(0, -400); 
    } else if (input.includes('clear')) {
      this.setState({filteredShips: ships}); 
    } else if (input.includes('help')){
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

  render() {
    return (
      <div className='grid-container' id="wholePage">   
        <SideBar 
          onFiltersChange={this.onFiltersChange} 
        />
        <NavBar 
          selectStartListening={this.selectStartListening}
          selectStopListening={this.selectStopListening}
          searchChange={this.onSearchChange} 
          clearSearch={this.clearSearch} 
          onHelpClick={this.onHelpClick}
          selectListen={this.state.selectListen}
        /> 
        
        <ShipModal 
          show={this.state.showModal} 
          onClose={this.modalClose}  
          shipID={this.state.shipID}   
          speak={this.startSpeaking}          
        />
        <HelpModal 
          helpModal={this.state.helpModal} 
          helpClose={this.helpClose}
          onHelpClick={this.onHelpClick} 
          startSpeaking={this.startSpeaking}
        />
        <div>       
          <ShipList 
            filteredShips={this.state.filteredShips} 
            modalOpen={this.modalOpen}
          />  
        </div>
      </div>
    )
  };
}

export default App;
