import React from 'react';
import {Panel, PanelGroup} from 'react-bootstrap'
import '../styles/ShipSpecs.css'
import SpecParser from './SpecParser'



const ShipSpecs = ({ship}) => {
    return (
        
        <PanelGroup accordion id="1">
            
            <Panel eventKey="1">
                <Panel.Heading style={{color: '#0A89BB', backgroundColor:'#05263E', textAlign: 'center'}}> 
                    <Panel.Title toggle><div className='specBlock'>Specifications</div></Panel.Title>
                </Panel.Heading>                
                <Panel.Body collapsible>
                    <div className="outer-grid-container">
                        <div className="inner-grid-container">
                            <div className="gridTitle"><h4>Dimensions</h4></div>                           
                            <div><p>Length</p></div>
                            <div className='tr'><p>{ship.length}m</p></div>
                            <div><p>Beam</p></div>
                            <div className='tr'><p>{ship.beam}m</p></div>
                            <div><p>Height</p></div>
                            <div className='tr'><p>{ship.height}m</p></div> 
                            <div><p>Size</p></div>
                            <div className='tr'><p>{ship.size}</p></div> 
                            <div><p>Mass</p></div>
                            <div className='tr'><p>{ship.mass}kg</p></div>
                            <div><p>Cargo</p></div>
                            <div className='tr'><p>{ship.cargocapacity === null ? "0" : ship.cargocapacity}</p></div> 
                            <div><p>Min Crew</p></div>
                            <div className='tr'><p>{ship.min_crew}</p></div> 
                            <div><p>Max Crew</p></div>
                            <div className='tr'><p>{ship.max_crew}</p></div>  
                            
                        </div>
                        <div className="inner-grid-container">
                            <div className="gridTitle"><h4>Maneuvering</h4></div>
                            <div className="gridTitle"><h5>Speed</h5></div>
                            <div><p>SCM Speed</p></div>
                            <div className='tr'><p>{ship.scm_speed}m/s</p></div> 
                            <div><p>Afterburner Speed</p></div>
                            <div className='tr'><p>{ship.afterburner_speed}m/s</p></div>
                            <div className="gridTitle"><h5>Acceleration</h5></div>
                            <div><p>X-Axis:</p></div> 
                            <div className='tr'><p>{ship.xaxis_acceleration}m/s/s</p></div>
                            <div><p>Y-Axis</p></div> 
                            <div className='tr'><p>{ship.yaxis_acceleration}m/s/s</p></div>
                            <div><p>Z-Axis</p></div> 
                            <div className='tr'><p>{ship.zaxis_acceleration}m/s/s</p></div> 
                            <div className="gridTitle"><h5>Rotation</h5></div>
                            <div><p>Pitch</p></div>
                            <div className='tr'><p>{ship.pitch_max}deg/s</p></div>
                            <div><p>Yaw</p></div>
                            <div className='tr'><p>{ship.yaw_max}deg/s</p></div>
                            <div><p>Roll</p></div>
                            <div className='tr'><p>{ship.roll_max}deg/s</p></div>
                        </div>   
                    </div>                                          
                </Panel.Body>
            </Panel>
            <Panel eventKey="2">
                <Panel.Heading style={{color: '#0A89BB', backgroundColor:'#05263E', textAlign: 'center'}}>
                    <Panel.Title toggle className='panelHeading'><div className='specBlock'>Weapons</div></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <div className="outer-grid-container">                          
                        <div><p>Guns</p></div>           
                        <SpecParser itemArray={ship.compiled.RSIWeapon.weapons} />
                        <div><p>Turrets</p></div>
                        <SpecParser itemArray={ship.compiled.RSIWeapon.turrets} />
                        <div><p>missiles</p></div>
                        <SpecParser itemArray={ship.compiled.RSIWeapon.missiles} /> 
                        <div><p>Utility Items</p></div>
                        <SpecParser itemArray={ship.compiled.RSIWeapon.utility_items} />
                    </div>                                      
                </Panel.Body>
            </Panel>
            <Panel eventKey="3">
                <Panel.Heading style={{color: '#0A89BB', backgroundColor:'#05263E', textAlign: 'center'}}>
                    <Panel.Title toggle className='panelHeading'><div className='specBlock'>Systems</div></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <div className="outer-grid-container">                          
                        <div><p>Radar</p></div>           
                        <SpecParser itemArray={ship.compiled.RSIAvionic.radar} />
                        <div><p>Computers</p></div>
                        <SpecParser itemArray={ship.compiled.RSIAvionic.computers} />
                        <div><p>Power Plants</p></div>
                        <SpecParser itemArray={ship.compiled.RSIModular.power_plants} /> 
                        <div><p>Coolers</p></div>
                        <SpecParser itemArray={ship.compiled.RSIModular.coolers} />
                        <div><p>Shield Generators</p></div>
                        <SpecParser itemArray={ship.compiled.RSIModular.shield_generators} />
                    </div>                                     
                </Panel.Body>
            </Panel>
            <Panel eventKey="4">
                <Panel.Heading style={{color: '#0A89BB', backgroundColor:'#05263E', textAlign: 'center'}}>
                    <Panel.Title toggle className='panelHeading'><div className='specBlock'>Propulsion</div></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <div className="outer-grid-container">                                                                       
                        <div><p>Main Thrusters</p></div>           
                        <SpecParser itemArray={ship.compiled.RSIThruster.main_thrusters} />
                        <div><p>Maneuvering Thrusters</p></div>
                        <SpecParser itemArray={ship.compiled.RSIThruster.maneuvering_thrusters} />                        
                        <div><p>Fuel Intakes</p></div>
                        <SpecParser itemArray={ship.compiled.RSIPropulsion.fuel_intakes} /> 
                        <div><p>Fuel Tanks</p></div>
                        <SpecParser itemArray={ship.compiled.RSIPropulsion.fuel_tanks} />
                        <div><p>Quantum Drives</p></div>
                        <SpecParser itemArray={ship.compiled.RSIPropulsion.quantum_drives} />
                        <div><p>Jump Modules</p></div>
                        <SpecParser itemArray={ship.compiled.RSIPropulsion.jump_modules} />
                        <div><p>Quantum Fuel Tanks</p></div>
                        <SpecParser itemArray={ship.compiled.RSIPropulsion.quantum_fuel_tanks} />
                    </div>     
                </Panel.Body>
            </Panel>
           
        </PanelGroup>
    )
}

export default ShipSpecs;