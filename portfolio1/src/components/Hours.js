import React,{useState} from 'react';
// NEW COMPONENT FOR PORTFOLIO 1
// useState for function

function Hours (){
    const [hours, setHours] = useState(0);

    return(
        <div>
            <h2>Total Hours: {hours}</h2>
            <button class="button" onClick ={() => setHours(hours +1)}>Add A Hour</button>
            <button class="button" onClick ={() => setHours(hours +.5)}>Add Half A Hour</button>
            <button class="button" onClick ={() => setHours(0)}>Reset</button>
        </div>
         // Three buttons : Add 1. add 1/2. and Reset
        // Tracks Hours spent
    );
}

export default Hours;