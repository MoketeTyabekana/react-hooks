// Code: App component
import './App.css';
import {useState, useEffect}  from 'react';
import { MdPlaylistAdd, MdDeleteForever } from "react-icons/md";

function App() {
// State for the to-do list
  const [todos, setTodos] = useState(() => {
    const savedTodos=localStorage.getItem('todos');

// If there are saved to-dos, load them, otherwise return an empty array
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState('');

  // Save the to-dos to local storage
useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos));
},[todos]);

  // Add a new to-do item
  const addToDo = () => {
    if (input.trim()){
      setTodos([...todos, {
        text:input,completed:false
      }]);
// Clear the input field
      setInput('');
    }
  }
// Return the JSX for the App component
  return (
    <div className='w-full h-screen  bg-gray-100'> 
    <div className='bg-blue-500 text-white  p-4 '>
      <h1 className='font-bold text-lg'>To-Do List</h1>
    </div>
      <div className='md:w-3/5 mx-auto mt-4 bg-blue-500 p-4 rounded-lg shadow-lg grid grid-row gap-2 justify-items-start'>
     
     {/* Add the input field and button */}
        <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" name='item' placeholder='Enter A New List Item' className='bg-white w-full p-3 rounded outline-none' />
        <button onClick={addToDo} className='bg-blue-900 w-1/3 p-2 rounded text-white  font-bold hover:bg-blue-800 inline-flex items-center justify-center' >
        <span className='pr-3'><MdPlaylistAdd size="2em" /></span> Add Item 
        </button>
        <div className='w-full bg-white p-4 rounded shadow-lg gap-2'>
           <h2 className='text-center font-bold text-lg'>Your List</h2>
           <hr  />
           
           {/* Add the to do list */}
           <ul className='w-full gap-2 mt-2'> 
            {todos.map((todo,index)=>(
              <li key={index} className='justify-between bg-gray-200 p-2 mt-2  rounded-lg flex items-center w-full '>
                 {todo.text}
                 <button onClick={()=>setTodos(todos.filter((_,i)=>i !==index))} className='bg-red-600  p-2 rounded text-white  font-bold hover:bg-blue-800 inline-flex items-center justify-center'>
                  <MdDeleteForever size="2em"/>
                 </button>
              </li>

            ))}
           </ul>
        </div>
      </div>
    </div>
  )
}

export default App
