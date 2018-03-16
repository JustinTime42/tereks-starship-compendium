import React, { Component } from 'react';
import Footer from './components/Footer';
// import Loading from './components/Loading';
import NavBar from './components/NavBar';
import ships from './ships.js'
import ShipList from './components/ShipList'
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

// curl -X GET --user 11c76083-b489-46b0-b025-6d080bd60cb9:3IMBPfuf7Xdg \ "https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api"
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

  componentDidMount(){     
    fetch('/api/speech-to-text/token')
    .then(function(response) {
        return response.text();
    }).then(function (token) {
      var stream = recognizeMic({
          token: token,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });
      console.log({token});
      stream.on('data', function(data) {
        this.setState({searchField:data.alternatives[0].transcript.trim()});
        console.log(data);
      });
      stream.on('error', function(err) {
          console.log(err);
      });
      
    }).catch(function(error) {
        console.log(error);
    });
          
  };

  render() {
    const filteredShips = ships.filter(ship => {
      return ship.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='bg-near-white'>        
        <NavBar searchChange={this.onSearchChange} /> 
        <h1>{this.searchField}</h1>  
        <ShipList filteredShips={filteredShips} />  
        <h1>{this.searchField}</h1>  
        <Footer />        
      </div>
    )
  };
}

export default App;


// asdfasdfasdf