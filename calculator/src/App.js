import { useReducer } from 'react'
import DigitButton from './components/DigitButton.js'
import OperationButton from './components/OperationButton.js'
import './App.css';

const actions = {
  ADD_DIGIT: 'add-digit', 
  CHOOSE_OPERATION: 'choose-operation', 
  CLEAR: 'clear', 
  DELETE_DIGIT: 'delete-digit', 
  EVALUATE: 'evaluate'
}

function reducer(state, { type, payload}) {
  switch(type){
    case actions.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') return state
      if (payload.digit === '.' && state.currentOperand.includes === '0') return state
    return {
        ...state, 
        currentOperand: `${currentOperand  || ""}${payload.digit}`
      }
  }

}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer)
  return (
    <div className="calculator-grid">
      <div className ="output">
        <div className="previous-operand"> {previousOperand} {operation} </div>
        <div className="current-operand"> {currentOperand} </div>

      </div>

      <button className="span-two">AC</button>
      <button>DEL</button>
      < OperationButton operation = "/" dispatch = {dispatch} />
      < DigitButton digits = "1" dispatch={dispatch} />
      < DigitButton digits = "2" dispatch={dispatch} />
      < DigitButton digits = "3" dispatch={dispatch} />
      < OperationButton operation = "*" dispatch = {dispatch} />
      < DigitButton digits = "4" dispatch={dispatch} />
      < DigitButton digits = "5" dispatch={dispatch} />
      < DigitButton digits = "6" dispatch={dispatch} />
      < OperationButton operation = "+" dispatch = {dispatch} />
      < DigitButton digits = "7" dispatch={dispatch} />
      < DigitButton digits = "8" dispatch={dispatch} />
      < DigitButton digits = "9" dispatch={dispatch} />
      < OperationButton operation = "-" dispatch = {dispatch} />
      < DigitButton digits = "0" dispatch={dispatch} />
      < DigitButton digits = "." dispatch={dispatch} />
      <button className="span-two">=</button>

    </div>
  );
}

export default App;
