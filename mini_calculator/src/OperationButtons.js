import React from 'react'

function OperationButtons({operator, dispatch}) {
    return (
        <button onClick={() => dispatch({type: 'operations' , value: {operator}})}>{operator}</button>
    )
}

export default OperationButtons
