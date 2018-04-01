import React from 'react'

const SpeechButton = ({selectListen, onListenClick}) => {

    
    if (selectListen === false) {
        return (
            <li className="nav-item ml2">  
                <button 
                    className='form-control nav-link mybtn' 
                    style={{color:'#0A89BB'}}
                    onClick = {onListenClick}>
                    Listen
                </button>
            </li>
        )
    } else {
        return (
            <li className="nav-item ml2">  
                <button 
                    className='form-control nav-link mybtn' 
                    style={{color:'#0A89BB'}}
                    onClick = {onListenClick}>
                    Stop
                </button>
            </li>
        )
    }
}

export default SpeechButton