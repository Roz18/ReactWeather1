import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  const apiKey = "32ecda5bta3bd6bc964176affb080o6a";
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemprature] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(Handelrespond)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setTemprature(data);
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {loading && <p>Loading for {city}...</p>}
      {temperature && !loading && <Weather data={temperature} />}
    </div>
  );
}
