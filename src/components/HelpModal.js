import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../styles/ShipSpecs.css';
const HelpModal = ({helpModal, helpClose, startSpeaking}) => {
    
  if(!helpModal) {        
      return null;
    }

  let helpText = "This is the best place to come for information on ships in the Star Citizen Universe. You can navigate this site with the search field at the top, the filters on the side panel, or you can click \"Listen\" and interact with the site using voice commands. You can say keywords like \"transport\" or \"combat\", you can say the names of manufacturers like \"Anvil Aerospace\" or \"Drake Interplanetary\", or you can say names of ships like \"Aurora\" or \"Avenger\". You can also say \"scroll down\", \"scroll up \", \"clear search\", or \"help\". Make sure to use the site with the volume turned up, as this site will interact with you vocally as well."
  
  startSpeaking(helpText)
  
  return (
    <div>          

      <Modal show={helpModal} onHide={helpClose} bsSize="large" className="modal">
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <div> 
            <h2 className='tc'> Terek's Starship Compendium </h2>
            <p>{helpText} </p>
            <div className='tc'>
              <p>&copy; Justin Schneider, 2018</p>
              <p>View this project on <a className='underline' href="https://github.com/slarti-42/tereks-starship-compendium">Github</a></p>
              <h5>Disclaimer</h5>
              <p>This is a fansite and is not affiliated with Cloud Imperium Games &reg;</p>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button className='mybtn' onClick={helpClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
    
}

export default HelpModal;