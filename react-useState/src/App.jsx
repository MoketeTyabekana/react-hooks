import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function IncreaseCount() {
    setCount((prev) => prev + 1);
  }

  function DecreaseCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <div 
         style={{
       textAlign: "center",
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       gap: "10px",
     }
   }
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }
      }
      >
        <h1>Counter:{count}</h1>
        <button onClick={IncreaseCount}>Increase</button>
        <button onClick={DecreaseCount}>Increase</button>
      </div>

      <form action="">
        <label htmlFor="">Name: </label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name"/>
        <p>hello , {name}</p>

      </form>
    </div>
  );
};

export default App;
