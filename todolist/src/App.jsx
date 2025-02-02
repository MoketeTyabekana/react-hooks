// Code: App component
import './App.css';
import {useState}  from 'react';

function App() {


  return (
    <div className='w-full h-screen  bg-gray-100'> 
    <div className='bg-blue-500 text-white  p-4 '>
      <h1 className='font-bold text-lg'>To-Do List</h1>
    </div>
      <div className='w-4/5 mx-auto mt-4 bg-blue-500 p-4 rounded-lg shadow-lg grid grid-row gap-2 justify-items-start'>
     
        <input type="text" name='item' placeholder='Enter A New List Item' className='bg-white w-full p-3 rounded outline-none' />
        <button className='bg-blue-900 w-full p-3 rounded text-white font-bold hover:bg-blue-800 ' >
          Add Item
        </button>
        <div className='w-full bg-white p-4 rounded shadow-lg gap-2'>
           <h2 className='text-center font-bold'>Your List</h2>
           <ul className='w-full gap-2'> 

           </ul>
        </div>
      </div>
    </div>
  )
}

export default App
