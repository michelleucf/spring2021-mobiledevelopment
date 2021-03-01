import React,{useState} from 'react';
// NEW COMPONENT FOR PORTFOLIO 1
// useState for function

function Sets (){
    const [sets, setSets] = useState(0);

    return(
        <div>
            <h2>Total Sets: {sets}</h2>
            <button class="button" onClick = {() => setSets(sets +1)}>Add A Set</button>
            <button class="button" onClick ={() => setSets(0)}>Reset</button>
        </div>
         // Two buttons : Add 1 and Reset
         // Tracks Sets
    );
}

export default Sets;
