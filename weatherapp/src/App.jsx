import './App.css';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaWind, FaSearch } from 'react-icons/fa';

function App() {


  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div className='bg-blue-800 h-screen flex justify-center items-center'>
     <div className='bg-blue-300 p-4 rounded-lg w-4/5 grid gap-3 shadow-lg'> 
     <h1 className='text-xl font-bold text-blue-950 text'>Weather App</h1>

     <form action="" className=' search-box flex flex-row '>
     <input type="text" placeholder='Enter city name...' className='p-3 w-full bg-white  border-0 focus:outline-none focus:ring-0'  />
 <button type='submit' className='p-3 px-6  bg-blue-800  border-none text-white font-bold hover:bg-blue-900 flex  items-center gap-2  '>
 <FaSearch/> 
 </button>
     </form>
     </div>
    </div>
  )
}

export default App
