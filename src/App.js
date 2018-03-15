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
          var stream = recognizeMic({
              token: 'rOB6JaoCZq1VXfYJO4tCFarwZd4ZdTDXmbwEFs%2B0Iw9BXqan%2B3zzV4Cyc%2Fs5H06SAldu63kCqJTA21xUwsLBzqOTZsSgd04VpbMxs6Nvu2zvEspF21BGRAsBCDv2KzYx2P7BtrfBehthLeW6K06t6fsXhVeCsxP7AqJs%2BNZEDnwjZ1zAPWXMWePrSLeqZkWXA1h951aoaxMSzQclHmtpCblpVY%2FZM4J%2B%2BYzgGXFruxp3kqff6TeHrjUe18iVB5CXS3huSzEIaorlIp72BNvNMiIfVbNpjBWmT1j1%2BsZZyoN8x2SNKYXy8hRCTb8Zgtvna0KQMOllyJYd3ScAXz9shCCiPgUeiAw5V%2F9gDJi6RyNN%2Bg8asjc2DVq7wTiLEu5uIdeXBJU8o%2B8oXomFb0G14tvx7bMw1DnQssRpxDL%2Bg5aYnk8ijzJ%2BCSkm5Ll8TlDLDE1FqXaRfOwRY0KlsdjDSSNzfrdkgg0mo3SsfwTItvXRc6f9oTTCdxPDlzmrFiaJ6k4aBsBD%2F8MbKPyl3AFYjDXnWzZwF1s5mQWV7%2FmdSFsMJwD8DheiKpzIeae5WdmqdtDl0zhc2C6FN%2Bz4wkLhIR8fNfnEJ88nbxNJfko3oYN%2BNl%2Fz4pRP6gPjOJyLzKQRPNqxf6SIdO1QxJ1Yjd3ihmhv21nvkG5RCGsGn9SoIdzffnSHM4AyFnquBv1rp6tF8VTfBgVHhnv3crBUI5%2FPLq4vQ8ADbvwNIhwORzUpbezXNvd%2Flj6sSBovFrfyzdQ3PymJ%2BLVRfayx4q6y44OtpLjsO9BTF%2BDxxAmVcP0blu587skuepX1ClkzzvI2x0gjPDk0pfdsETtiMSiMPVBgpAXuklkycScRonnQDYUT8jB2UMshDmtDedf%2BHCAu2aF0CpLl9s3atPsAt9KhfgmLq7gKOsrbetzHgJ8hAE7RYFbtLp3njbEHFiEqotBEfVKhHdlpSvE6i4MwBcZTxjXEGTxs6Z0322FJzI5H%2FjQJJVk%3D',
              objectMode: true, // send objects instead of text
              extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
              format: false // optional - performs basic formatting on the results such as capitals an periods
          });
          stream.on('data', (data) => {
            this.setState({searchField:data.alternatives[0].transcript.trim()});
            console.log(data);
          });
          stream.on('error', function(err) {
              console.log(err);
          });
          
          // .catch(function(error) {
          //   console.log(error);
        // };
  };

  render() {
    const filteredShips = ships.filter(ship => {
      return ship.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='bg-near-white'>        
        <NavBar searchChange={this.onSearchChange} /> 
        <ShipList filteredShips={filteredShips} />    
        <Footer />        
      </div>
    )
  };
}

export default App;
