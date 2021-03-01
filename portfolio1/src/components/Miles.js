import React,{useState} from 'react';
// useState for function

function Miles (){
    const [miles, setMiles] = useState(0);

    return(
        <div>
            <h2>Total Miles: {miles}</h2>
            <button class="button" onClick ={() => setMiles(miles +1)}>Add A Mile</button>
            <button class="button" onClick ={() => setMiles(miles +.5)}>Add Half A Mile</button>
            <button class="button" onClick ={() => setMiles(0)}>Reset</button>
        </div>
        // Three buttons : Add 1. add 1/2. and Reset
        // Tracks Miles
    );
}

export default Miles;