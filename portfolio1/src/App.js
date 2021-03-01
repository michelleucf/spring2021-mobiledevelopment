import Repetitions from './components/Repetitions'
import Miles from './components/Miles'
import Hours from './components/Hours'
import Sets from './components/Sets'

const chalk = require('chalk');
const log = console.log;


//var hour = Hours.hours;

log(chalk.black.bgYellow.underline('Exercise Tracker'));
// print exercise tracker into the console log
function App(){
  return(
    <div>
      <h1>Exercise Tracker</h1>
      <Repetitions/> 
      <Sets/>
      <Miles/>
      <Hours/>
    </div>
    // Repetitions, Hours, and Sets are classes. Miles is a functional. 
  );
} 
log(chalk.green('Repetitions'));
log(chalk.green('Sets'));
log(chalk.green('Miles'));
log(chalk.green('Hours'));
// print each type into the console log
export default App;