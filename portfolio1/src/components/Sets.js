import React,{useState} from 'react';
// useState for function

function Sets (){
    const [sets, setSets] = useState(0);

    return(
        <div>
            <h2>Total Sets: {miles}</h2>
            <button onClick ={() => setSets(sets +1)}>Add A Set</button>
            <button onClick ={() => setSets(0)}>Reset</button>
        </div>
    );
}

export default Sets;
