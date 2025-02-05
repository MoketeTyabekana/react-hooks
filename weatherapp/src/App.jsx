import "./App.css";
import { useState, useEffect } from "react";
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaSnowflake,
  FaWind,
  FaSearch,
} from "react-icons/fa";

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
        return <FaSun className="weather-icon" />;
      case "clouds":
        return <FaCloud className="weather-icon" />;
      case "rain":
        return <FaCloudRain className="weather-icon" />;
      case "snow":
        return <FaSnowflake className="weather-icon" />;
      case "wind":
        return <FaWind className="weather-icon" />;
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
    <div className="bg-blue-800 h-screen flex justify-center items-center">
      <div className="bg-blue-300 p-4 rounded-lg w-4/5 grid gap-3 shadow-lg">
        <h1 className="text-xl font-bold text-blue-950 text">Weather App</h1>

        <form
          action=""
          onSubmit={getWeather}
          className=" search-box flex flex-row "
        >
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter city name..."
            className="p-3 w-full bg-white  border-0 focus:outline-none focus:ring-0 rounded-l-md"
          />
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
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info bg-amber-50 p-8 rounded-lg flex flex-col  gap-4">
            <h2 className="weather-main text-blue-800 text-lg font-bold text-center"> 
              {weather.name}, {weather.sys.country}
            </h2> 
            <div className="weather-main text-blue-800 text-3xl flex gap-6 font-bold justify-between items-center">
              {getWeatherIcon(weather.weather[0].main)}
              <span className="temp">{Math.round(weather.main.temp)}°C</span>
            </div>
            <p className="description">{weather.weather[0].description}</p>
            <div className="details">
              <div className="detail-item">
                <FaWind />
                <span>{weather.wind.speed} m/s</span>
              </div>
              <div className="detail-item">
                <FaCloud />
                <span>{weather.clouds.all}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
