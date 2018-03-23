import React from 'react';
import ships from '../ships';
import {Popover, Modal, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';
import ShipSpecs from './ShipSpecs';
const ShipModal = ({show, onClose, shipID}) => {    
  
    if(!show) {        
        return null;
      }
      
      const ship = ships.find(ship => ship.id === shipID)

      return (
        <div>          
  
          <Modal show={show} onHide={onClose} bsSize="large">
            <Modal.Header closeButton>
              <Modal.Title>{ship.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`https://robertsspaceindustries.com${ship.media[0].images.store_slideshow_small}`}/>
              <div> 
                  <h4 className='tc'>{`${ship.manufacturer.name} (${ship.manufacturer.code})`}</h4>
                  <p>{ship.description}</p>
              </div>
              <hr />
              <ShipSpecs ship={ship} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    
}

// ShipModal.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     show: PropTypes.bool,
//     children: PropTypes.node
//   };
  

export default ShipModal;