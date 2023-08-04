import React from "react";

export default function Weather({ data }) {
  if (data) {
    const IconSheCode = `https://api.shecodes.io/weather/v1/current?query=${city}&key=32ecda5bta3bd6bc964176affb080o6a&units=metric`;

    return (
      <div className="maintempBox">
        <div className="mainTemp">
          <h2>{Math.round(data.main.temperature)}°C</h2>
        </div>
        <div className="mainIcon">
          <img src={IconSheCode} alt="Weather Icon" />
          <p> {data.weather[0].temperature}</p>
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
// "coordinates"
// condition"
//  "temperature": {
// "day": 27.13,
// "minimum": 19.33,
// "maximum": 27.32,
// "humidity": 56
// "wind"
