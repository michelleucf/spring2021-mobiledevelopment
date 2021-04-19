import React from 'react';
// useState for function

function Miles (props){
    
    return(
        <div>
            <h2>Total Miles: {props.state.miles}</h2>
            <button onClick ={() => props.dispatch({"type": "increment1"})}>Add A Mile</button>
            <button onClick ={() => props.dispatch({"type": "decrement1"})}>Remove A Mile</button>
        </div>
    );
}

export default Miles;