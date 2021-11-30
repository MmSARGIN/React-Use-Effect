import Counter from './components/counter';
import {useState} from 'react';
import './App.css';

function App() { 
  const[isVisible, setIsVisible] = useState(true)


  return (
  <div >
   {isVisible && <Counter /> }
   <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
  </div>
);
}


 

export default App;
