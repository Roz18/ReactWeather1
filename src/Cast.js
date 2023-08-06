import { useState } from "react";
import { useEffect } from "react";
import React from "react";

export default function Forecast({ weatherData }) {
  const [forecastData, setForecastData] = useState([]);

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  useEffect(() => {
    if (weatherData) {
      const forecast = weatherData.list.slice(0, 6); // Get the forecast data for the next 6 hours.
      setForecastData(forecast);
    }
  }, [weatherData]);

  return (
    <div>
      <h2>7-Day Weather Forecast</h2>
      <div className="forecast-container">
        {weatherData.map((forecastItem, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-date">
              {formatDay(forecastItem.dt * 1000)}
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`}
              alt={forecastItem.weather[0].description}
            />
            <div className="forecast-temperature">
              <span className="forecast-temp-max">
                {Math.round(forecastItem.temp.max)}°C
              </span>{" "}
              /{" "}
              <span className="forecast-temp-min">
                {Math.round(forecastItem.temp.min)}°C
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
