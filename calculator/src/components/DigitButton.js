import { actions } from './App.js'

function DigitButton ({ dispatch, digit }) {
  return
  <button 
  onClick={() => dispatch({ type: actions.ADD_DIGIT, payload: {digit} })}>{digit}</button>
}





export default DigitButton