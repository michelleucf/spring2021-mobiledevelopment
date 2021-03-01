import React, {Component} from 'react'

class Repetitions extends Component{
    constructor(props) {
        super(props);
        this.state = {
            reps: 0
        };
    };

    render(){

        return(
            <body>
            <div>
               <h2>Total Repetitions: {this.state.reps}</h2>
                <button class="button" onClick={() => this.setState({reps: this.state.reps + 1})}>Add A Rep</button>
                <button class="button" onClick={() => this.setState({reps: 0})}>Reset</button>
            </div>
            </body>
        );
        //two buttons : Add 1 and Reset
        // tracks total reps
    }
}

export default Repetitions;