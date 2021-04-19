import Repetitions from './components/Repetitions'
import Miles from './components/Miles'
import {state,reducer} from './components/ApplicationState';
import React, { useReducer } from 'react';

function App(){

  const [currentState, dispatch] = useReducer(reducer, state);

  return(
    <div>
      <h1>Exercise Tracker</h1>
      <Repetitions state={currentState} dispatch={dispatch}/> 
      <Miles state={currentState} dispatch={dispatch}/>
    </div>
  );
}
export default App;
