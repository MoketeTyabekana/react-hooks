import React,{useState} from 'react';

const App = () => { 
 const [count,setCount]=useState(0);

function IncreaseCount(){
  setCount(count+1);
}

function DecreaseCount(){
  setCount(count-1);
}

  return (
    <div>
     <h1>Counter:{count}</h1>
     <button onClick={IncreaseCount}>Increase</button>
     <button onClick={DecreaseCount}>Increase</button>
    </div>
  )
}

export default App;
