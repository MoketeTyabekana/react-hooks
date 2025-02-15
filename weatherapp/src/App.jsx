import "./App.css";
import { useState } from "react";
import sun from "./assets/sun.png";
import snow from "./assets/snow.png";
import rain from "./assets/rain.png";
import cloudy from "./assets/cloudy.png";
import wind from "./assets/wind.png";

import {FaSun,FaCloud,FaCloudRain,FaSnowflake,FaWind,FaSearch,} from "react-icons/fa";

function App() {
  // Defined the API key.
  const apiKey = import.meta.env.VITE_API_KEY;

  //  Defined the states.
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Defined the function to get the weather icons related to the weather.
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return <img className="weather-icon" src={sun} alt="sun" />;
      case "clouds":
        return <img className="weather-icon" src={cloudy} alt="cloudy" />;
      case "rain":
        return <img className="weather-icon" src={rain} alt="rain" />;
      case "snow":
        return <img className="weather-icon" src={snow} alt="snow" />;
      case "wind":
        return <img className="weather-icon" src={wind} alt="wind" />;
    }
  };

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    // Defined the try block to fetch the data from the API.
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      // Defined the if block to check if the response is ok.
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      // Defined the catch block to catch the error.
      setError(error.message);
      setWeather(null);
    } finally {
      // Defined the finally block to set the loading to false.
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-300 to-blue-800 h-screen flex justify-center items-center px-2">
      <div
        className="backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/40 h-auto	
 p-4 rounded-lg lg:w-3/5 md:w-4/5 w-full grid gap-3 shadow-lg"
      >
        <h1 className="text-xl font-bold text-blue-800 text-center">Weather App</h1>

        <form
          action=""
          onSubmit={getWeather}
          className=" search-box flex flex-row "
        >
          {/* Defined the input field to get the city name. */}
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter city name..."
            className="p-3 w-full bg-white  border-0 focus:outline-none focus:ring-0 rounded-l-md"
          />
          {/* Defined the search button */}
          <button
            type="submit"
            className="p-3 px-6  bg-blue-800  border-none text-white font-bold hover:bg-blue-900 flex  items-center gap-2 rounded-r-md "
          >
            <FaSearch />
          </button>
        </form>

        {/* Defined the Loading state */}
        {loading && (
          <p className="text-blue-800 text-center font-bold">Loading...</p>
        )}

        {/* Defined the error state */}
        {error && <p className="error text-white">{error}</p>}

        {/* Defined the weather state */}
        {weather && (
          <div className="weather-info rounded-lg flex flex-col  gap-5 mt-10">
            <h2 className="weather-main text-blue-800 text-lg font-bold text-center p-4 bg-gray-200/20 rounded">
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="weather-main text-white  flex flex-col gap-6 font-bold justify-between items-center ">
              <span className="text-9xl">
                {getWeatherIcon(weather.weather[0].main)}
              </span>
              <span className="temp text-6xl">
                {Math.round(weather.main.temp)}°C
              </span>
            </div>

            <div className="details flex items-center justify-around text-white">
              <FaWind />
              <span>{weather.wind.speed} m/s</span>
              <FaCloud />
              <p className="description">{weather.weather[0].description}</p>

              <span>{weather.clouds.all}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
