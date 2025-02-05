import './App.css';
import { useState, useEffect } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaWind, FaSearch } from 'react-icons/fa';

function App() {

//  Defined the states.
  const [weather,setWeather]=useState(null);
  const [city,setCity]=useState('');
  const [loading,setLoading]=useState(false	);
  const [error,setError]=useState(null);

// Defined the function to get the weather icons related to the weather.
  const getWeatherIcon=(weather)=>{
  switch (weather.toLowerCase()) {
    case 'clear' :
      return <FaSun className='weather-icon'/>;
      case 'clouds' :
        return <FaCloud className='weather-icon'/>;
        case 'rain' :
          return <FaCloudRain className='weather-icon'/>;
          case 'snow' :
            return <FaSnowflake className='weather-icon'/>;
            case 'wind' :
              return <FaWind className='weather-icon'/>;
  }};

// Defined the API key.
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div className='bg-blue-800 h-screen flex justify-center items-center'>
     <div className='bg-blue-300 p-4 rounded-lg w-4/5 grid gap-3 shadow-lg'> 
     <h1 className='text-xl font-bold text-blue-950 text'>Weather App</h1>

     <form action="" className=' search-box flex flex-row '>
     <input type="text" placeholder='Enter city name...' className='p-3 w-full bg-white  border-0 focus:outline-none focus:ring-0 rounded-l-md'  />
 <button type='submit' className='p-3 px-6  bg-blue-800  border-none text-white font-bold hover:bg-blue-900 flex  items-center gap-2 rounded-r-md '>
 <FaSearch/> 
 </button>
     </form>
     </div>
    </div>
  )

}
export default App;
