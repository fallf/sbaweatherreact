import { useState, useEffect } from "react";
import { useParams } from "react-router";

import React from "react";

function Weather() {
  const apiKey = import.meta.env.VITE_ACCESKEY;
  const params = useParams();
  const cityName = params.name;

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`;

  // State to hold the location data
  const [location, setLocation] = useState("null");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // State to hold weather data
  const [weather, setWeather] = useState(null);
  //function to fetch the location data

  const getLocation = async () => {
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      setLocation(data);

      // Extract lat/lon from the first result
      if (data.length > 0) {
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getWeather = async (lat, lon) => {
    if (lat && lon) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      try {
        const response = await fetch(weatherUrl);
        const weatherData = await response.json();
        setWeather(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    getLocation(getLocation);
  }, []);

  console.log(location[0]);

  useEffect(() => {
    if (latitude && longitude) {
      getWeather(latitude, longitude);
    }
  }, [latitude, longitude]);

  console.log(weather);

  const loaded = () => {
    return (
      <div>
        <h2>Weather in {cityName}</h2>
        <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Condition: {weather.weather[0].description}</p>
      </div>
    );
  };
  const loading = () => {
    return <h1> Loading...</h1>;
  };
  return weather &&
    weather.main &&
    weather.main.temp &&
    weather.weather &&
    weather.weather[0] &&
    weather.weather[0].description
    ? loaded()
    : loading();
}
export default Weather;
