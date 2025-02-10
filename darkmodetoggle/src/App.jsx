import './App.css';
import { createContext, useContext, useState, useEffect } from 'react';

function App() {


  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='px-8 py-2 bg-blue-800 hover:bg-blue-400 shadow-xl text-white rounded-full uppercase'>Toggle Theme</button>
    </div>
  )
}

export default App
