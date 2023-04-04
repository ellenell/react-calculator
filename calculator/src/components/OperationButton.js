import { actions } from './App.js'

function OperationButton ({ dispatch, digit }) {
  return
  <button 
  onClick={() => dispatch({ type: actions.CHOOSE_OPERATION, payload: {digit} })}>{operation}</button>
}





export default OperationButton