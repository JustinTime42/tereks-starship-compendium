import React, { Component } from 'react';
import Footer from './components/Footer';
// import Loading from './components/Loading';
import NavBar from './components/NavBar';
import ships from './ships.js'
import ShipList from './components/ShipList'
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchField: '',
      filteredShips: ships,
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
    const searchShips = ships.filter(ship => {
      return ship.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    console.log("searchShips= " + searchShips);
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
        console.log("input= " + input);
          return ship.name.toLowerCase().split(" ").some(word => {
            return input.toLowerCase().split(" ").includes(word)})
          })
      console.log("searchShips= " + searchShips);
      this.setState({filteredShips: searchShips}); 
    }
  }
  componentDidMount(){     
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
      console.log({token});
      stream.on('data', (data) => {
        console.log({data});
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
      <div className='bg-near-white'>        
        <NavBar searchChange={this.onSearchChange} /> 
        <ShipList filteredShips={this.state.filteredShips} />  
        <h1>{this.searchField}</h1>  
        <Footer />        
      </div>
    )
  };
}

export default App;
