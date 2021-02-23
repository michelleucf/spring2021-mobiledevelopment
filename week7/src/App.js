import Repetitions from './components/Repetitions'
import Miles from './components/Miles'

function App(){
  return(
    <div>
      <h1>Exercise Tracker</h1>
      <Repetitions/> 
      <Miles/>
    </div>
    // Repetitions is a class. Miles is a functional. 
  );
}
export default App;
