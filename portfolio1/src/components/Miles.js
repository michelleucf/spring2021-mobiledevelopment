import React,{useState} from 'react';
// useState for function

function Miles (){
    const [miles, setMiles] = useState(0);

    return(
        <div>
            <h2>Total Miles: {miles}</h2>
            <button onClick ={() => setMiles(miles +1)}>Add A Mile</button>
            <button onClick ={() => setMiles(0)}>Reset</button>
        </div>
    );
}

export default Miles;