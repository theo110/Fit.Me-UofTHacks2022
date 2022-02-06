import React from 'react'

function Alert(props){
    return(
        <div className='alert'>
            <div className = 'close' onClick = {props.onClose}>x</div>
            <div>{props.children}</div>
        </div>
    )
}

export default Alert;