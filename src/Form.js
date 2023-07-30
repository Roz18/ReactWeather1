import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6e4f482e556dcb5907649d27e126fdf&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setWeatherData(data);
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {loading && <p>Loading for {city}...</p>}
      {weatherData && !loading && <Weather data={weatherData} />}
    </div>
  );
}
