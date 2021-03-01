import Repetitions from './components/Repetitions'
import Miles from './components/Miles'
import Hours from './components/Hours'
import Sets from './components/Sets'
import './App.css';

const chalk = require('chalk');
const log = console.log;


//var hour = Hours.hours;

log(chalk.black.bgYellow.underline('Exercise Tracker'));
// print exercise tracker into the console log
function App(){
  return(
    <div>
      <div class="Div1"> 
        <h1><div class="bouncy">Exercise Tracker </div></h1>
       </div>
          <div class="Div2">
            <Hours/>
            <Repetitions/> 
            <Sets/>
            <Miles/>

          </div>
    </div>
    // Repetitions, Hours, and Sets are classes. Miles is a functional. 
  );
} 
log(chalk.red('Tracking the following:'));
log(chalk.green('Repetitions'));
log(chalk.green('Sets'));
log(chalk.green('Miles'));
log(chalk.green('Hours'));
// print each type into the console log
export default App;