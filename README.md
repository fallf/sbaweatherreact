# Weather App

## Introduction

This Weather App allows users to search for current weather information by city name. It uses the OpenWeatherMap API to fetch real-time weather data.

### Features

---

Search for weather by city.

Displays current temperature in Fahrenheit.

Shows weather icons and descriptions.

## Technologies Used

React.js

OpenWeatherMap API

Vite

---

### Setup

Clone the repository:

git clone <repository-url>

Navigate to the project folder:

cd weather-app

Install dependencies:

npm install

Create a .env file with your OpenWeatherMap API key:

VITE_ACCESKEY=your_api_key_here

Start the development server:

npm run dev

Open http://localhost: in your browser.

Usage

Enter a city name in the search bar.

Click "Submit" to view weather details.

## Environment Variables

VITE_ACCESKEY: Your OpenWeatherMap API key.

API Integration

Geocoding API: Fetches latitude and longitude for a city.

Current Weather API: Retrieves weather data using coordinates.

## License

This project is licensed under the MIT License.
