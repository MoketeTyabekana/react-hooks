import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const[isOpen, setIsOpen] = useState(false);

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

      <div>
        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        {isOpen && (
          <div style={{ 
            position: "fixed", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            backgroundColor: "white", 
            padding: "20px", 
            boxShadow: "0 0 10px rgba(0,0,0,0.5)" 
          }}>
            <h2>Modal Content</h2>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
