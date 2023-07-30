import React from "react";

export default function Weather({ data }) {
  if (data) {
    const weatherIconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    return (
      <div className="maintempBox">
        <div className="mainTemp">
          <h2>{Math.round(data.main.temp)}°C</h2>
        </div>
        <div className="mainIcon">
          <img src={weatherIconUrl} alt="Weather Icon" />
          <p> {data.weather[0].description}</p>
        </div>

        <div className="humidAwind">
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed}km/h</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
