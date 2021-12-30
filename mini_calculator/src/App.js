import './App.css';
import React, { useReducer } from 'react';
import DigitButtons from './DigitButtons';
import OperationButtons from './OperationButtons';


//This formatter is use to format integer (formatted integer -> 23,222 non-formatted -> 23222)
const IntFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
function operandFormatting(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split('.')  // sperating operand into integer and decimal parts so operand.split(".") says split at "." into integer and decimal parts
  console.log("Operand "+integer+" "+decimal)
  if (decimal == null) return IntFormatter.format(integer)  // if decimal part not present so format integer and return integer
  return `${IntFormatter.format(integer)}.${decimal}` // if decimal part present so format integer and return integer.decimal as decimal need not to be formatted
}

function reducer(state, { type, value }) {    //actions is objct contains type and value
  switch (type) {
    case 'add-digits':
      //edge cases like adding multiple 0s at front (eg. 000005 ) or adding more than one decimal points (eg. 23.22.22....) doesnt make sense so we will use some if statements and will return the unchanged state for such cases
      if (value.digit === "0" && state.currOperand === "0") return state // if currentoperand is already zero and present digit that to be added is also zero then don't add anything jst return unchanged state
      if (state.currOperand != null && value.digit === "." && state.currOperand.includes(".")) return state //if current digit to be added is "." and our operand already contains "." they don't add anything jst return unchanged state
      if (state.isEvaluated === true) {
        return {
          ...state,
          currOperand: value.digit,
          isEvaluated: false,
        }
      }
      return {
        ...state,
        currOperand: `${state.currOperand || ""}${value.digit}`, //if currOperand is null then use empty string("") else add value.digit i.e.,digit
      }
    case 'operations':
      if (state.prevOperand === undefined || state.prevOperand === null) {
        return {
          ...state,
          operation: value.operator,
          prevOperand: state.currOperand,
          currOperand: null,
        }
      }
      if (state.currOperand === null) {
        return {
          ...state,
          operation: value.operator,   //when we entered prevOperand and operator but we want to change our operator so this is used in this case prevoperand and operation will not be null but curroperand will be null
        }
      }
      return {
        ...state,
        prevOperand: evaluate(state),
        operation: value.operator,
        currOperand: null,
      }
    case 'evaluate':
      if (state.currOperand === null || state.prevOperand === null || state.operation === null) return state // if complete info not present return unchanged state
      return {
        ...state,
        isEvaluated: true,
        prevOperand: null,
        operation: null,
        currOperand: evaluate(state),
      }
    case 'delete':
      if (state.isEvaluated === true) {
        return {
          ...state,
          currOperand: null,
          isEvaluated: false,
        }
      }
      if (state.currOperand === null) return state
      if (state.currOperand.length === 1) {
        return {
          ...state,
          currOperand: null,  //if deleting last element that will leave currOperand with empty string and we do not want empty string rather we want null so this if statement is used
        }
      }
      return {
        ...state,
        currOperand: state.currOperand.slice(0, state.currOperand.length - 1),
      }
    case 'clear':
      return {}  //return nothing i.e., clearing everything
    default:
      return state
  }
}

function evaluate(state) {
  let operand1 = parseFloat(state.prevOperand);
  let operand2 = parseFloat(state.currOperand);
  let result ;
  switch (state.operation) {
    case "+":
      result = operand1 + operand2;
      break;
    case "−":
      result = operand1 - operand2;
      break;
    case "x":
      result = operand1 * operand2;
      break;
    case "÷":
      result = operand1 / operand2;
      break;
    case "%":
      result = operand1 % operand2;
      break;
    default :
      result = null;
      break;
  }
  return result.toString();   // as after getting this result we also have to format it and formatting can be done only on string not float value so here converting to string
}

function App() {
  const [{ prevOperand, currOperand, operation }, dispatch] = useReducer(reducer, {});
  return (
    <div className="App">
      <h1>Mini Calculator</h1>
      <div className="outerbox">
        <div className="inputArea">
          <div className="upper">
            {operandFormatting(prevOperand)} {operation}
          </div>
          <div className="lower">
            {operandFormatting(currOperand)}
          </div>
        </div>
        <button onClick={() => dispatch({ type: 'clear' })}>C</button>
        <OperationButtons operator="%" dispatch={dispatch} ></OperationButtons>
        <button onClick={() => dispatch({ type: 'delete' })} >Del</button>
        <OperationButtons operator="÷" dispatch={dispatch} ></OperationButtons>
        <DigitButtons digit="7" dispatch={dispatch} ></DigitButtons>
        <DigitButtons digit="8" dispatch={dispatch} ></DigitButtons>
        <DigitButtons digit="9" dispatch={dispatch} ></DigitButtons>
        <OperationButtons operator="x" dispatch={dispatch} ></OperationButtons>
        <DigitButtons digit="4" dispatch={dispatch} ></DigitButtons>
        <DigitButtons digit="5" dispatch={dispatch} ></DigitButtons>
        <DigitButtons digit="6" dispatch={dispatch} ></DigitButtons>
        <OperationButtons operator="−" dispatch={dispatch} ></OperationButtons>
        <DigitButtons digit="1" dispatch={dispatch} ></DigitButtons>
        <DigitButtons digit="2" dispatch={dispatch} ></DigitButtons>
        <DigitButtons digit="3" dispatch={dispatch} ></DigitButtons>
        <OperationButtons operator="+" dispatch={dispatch} ></OperationButtons>
        <DigitButtons digit="0" dispatch={dispatch} ></DigitButtons>
        <DigitButtons digit="." dispatch={dispatch} ></DigitButtons>
        <button className="equalSign" onClick={() => dispatch({ type: 'evaluate' })} >=</button>
      </div>
    </div>
  );
}

export default App;
