import React,{useState} from 'react';
// useState for function

function Hours (){
    const [hours, setHours] = useState(0);

    return(
        <div>
            <h2>Total Hours: {hours}</h2>
            <button onClick ={() => setHours(hours +1)}>Add A Hour</button>
            <button onClick ={() => setHours(0)}>Reset</button>
        </div>
        // Tracks Hours spent
    );
}

export default Hours;