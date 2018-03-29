import React from 'react';
import ships from '../ships';
import {Modal, Button} from 'react-bootstrap';
import ShipSpecs from './ShipSpecs';
import '../styles/ShipSpecs.css';
const ShipModal = ({show, onClose, shipID}) => {    
  
    if(!show) {        
        return null;
      }
      
      const ship = ships.find(ship => ship.id === shipID)

      return (
        <div>          
  
          <Modal show={show} onHide={onClose} bsSize="large" className="modal">
            <Modal.Header closeButton>
              <Modal.Title>{ship.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img alt='Ship' src={`https://robertsspaceindustries.com${ship.media[0].images.store_slideshow_small}`}/>
              <div> 
                  <h4 className='tc'>{`${ship.manufacturer.name} (${ship.manufacturer.code})`}</h4>
                  <p>{ship.description}</p>
              </div>
              <hr />
              <ShipSpecs ship={ship} />
            </Modal.Body>
            <Modal.Footer>
              <Button className='mybtn' onClick={onClose}>Close</Button>
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