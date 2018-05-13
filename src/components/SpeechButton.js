import React from 'react'

const SpeechButton = ({selectListen, onListenClick}) => {
    
    if (selectListen === false) {
        return (
              
                <button 
                    className='form-control nav-link mybtn' 
                    style={{color:'#0A89BB'}}
                    onClick = {onListenClick}>
                    Listen
                </button>            
        )
    } else {
        return (
             
                <button 
                    className='form-control nav-link mybtn' 
                    style={{color:'#0A89BB'}}
                    onClick = {onListenClick}>
                    Stop
                </button>            
        )
    }
}

export default SpeechButton