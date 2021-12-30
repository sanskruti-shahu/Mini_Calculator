import React from 'react'

function DigitButtons({digit, dispatch}) {
    return (
        <button onClick={() => dispatch({type: 'add-digits' , value: {digit}})}>{digit}</button>
    )
}

export default DigitButtons
