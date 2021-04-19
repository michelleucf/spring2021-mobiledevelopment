import React, {Component} from 'react'

function Repetitions (props){


        return(
            <div>
            <h2>Total Repetitions: {props.state.reps}</h2>
            <button onClick ={() => props.dispatch({"type": "increment2"})}>Add A Rep</button>
            <button onClick ={() => props.dispatch({"type": "decrement2"})}>Remove A Rep</button>
            </div>
        );
    }
export default Repetitions;