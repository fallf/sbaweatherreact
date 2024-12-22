import { useState, useEffect } from "react";
import React from "react";

function Weather({ searchterm }) {
  const apiKey = import.meta.env.VITE_ACCESKEY; // Your API key from the .env file

  const [weather, setWeather] = useState(null); // State for weather data

  // Function to fetch weather data based on the search term
  const getWeather = async (searchterm) => {
    if (!searchterm) return;

    const locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchterm}&limit=5&appid=${apiKey}`;

    try {
      const locationResponse = await fetch(locationUrl);
      const locationData = await locationResponse.json();

      if (locationData.length > 0) {
        const { lat, lon } = locationData[0];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        setWeather(weatherData); // Save weather data to state
      } else {
        setWeather(null); // Clear weather if no results
        console.error("No location data found.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // useEffect to fetch weather when searchterm changes
  useEffect(() => {
    getWeather(searchterm);
  }, [searchterm]);

  // Render weather data
  const loaded = () => {
    return (
      <div className="weatherbox">
        <h2 className="weatherlocation">Weather in {weather.name}</h2>
        <p className="weathertemp">
          Temperature:{" "}
          {((weather.main.temp - 273.15) * (9 / 5) + 32).toFixed(2)} °F
        </p>
        <p className="weatheconditions">
          Condition: {weather.weather[0].description}
        </p>
      </div>
    );
  };

  const loading = () => {
    return <h3>Please enter a city</h3>;
  };

  return weather ? loaded() : loading();
}

export default Weather;
