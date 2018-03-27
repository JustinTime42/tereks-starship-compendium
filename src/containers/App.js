import React, { Component } from 'react';
import Footer from '../components/Footer';
// import Loading from './components/Loading'; TODO
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
      searchParams: []
    }
  }
  onModalClick = (shipID) => {
      this.setState({showModal: !this.state.showModal})
      this.setState({shipID: shipID})    
  };

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
    const searchShips = ships.filter(ship => {
      return ship.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    this.setState({filteredShips: searchShips});
  }

  voiceCommands = (input) => {
    if (input.includes('scroll down')) {
      window.scrollBy(0, 400);
    } else if (input.includes('scroll up')) {
      window.scrollBy(0, -400); 
    } else if (input.includes('clear')) {
      this.setState({filteredShips: ships}); 
    } else {  
      const searchShips = ships.filter(ship => {        
          return ship.name.toLowerCase().split(" ").some(word => {
            return input.toLowerCase().split(" ").includes(word)})
          })     
      this.setState({filteredShips: searchShips}); 
    }
  }
  // componentDidMount(){     
  //   fetch('https://getstartednode-excellent-panther.mybluemix.net/api/speech-to-text/token')
  //   .then(function(response) {
  //       return response.text();
  //   }).then((token) => {
  //     var stream = recognizeMic({
  //         token: token,
  //         objectMode: true, // send objects instead of text
  //         extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
  //         format: false // optional - performs basic formatting on the results such as capitals an periods
  //     });      
  //     stream.on('data', (data) => {        
  //       if (data.final){
  //         return this.voiceCommands(data.alternatives[0].transcript.trim());
  //       }                
  //     });   
  //     stream.on('error', (err) => {
  //         console.log(err);
  //     });      
  //   }).catch(function(error) {
  //       console.log(error);
  //   });          
  // };

  render() {
    return (
      <div className='grid-container'>   
        <SideBar searchParams={this.searchParams} />
        <NavBar searchChange={this.onSearchChange} /> 
        
              
        <ShipModal 
          show={this.state.showModal} 
          onClose={this.onModalClick}  
          shipID={this.state.shipID}      
        />
        <div className='grid-shiplist'>       
        <ShipList 
          filteredShips={this.state.filteredShips} 
          modalClick={this.onModalClick}
        />  
        </div>

        <Footer />        
      </div>
    )
  };
}

export default App;
