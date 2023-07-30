import React from "react";
import "./App.css";
import Weather from "./Weather";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="Contanier">
        <h1>WeatherUmbrela</h1>
        <Weather />
        <Form />
        <div className="castBox">
          <div className="day">
            <lu>
              <p>Mon 10°C</p>
              <p>☀️</p>
            </lu>
          </div>{" "}
          <div className="day">
            <lu>
              <p>Tue 10°C</p>
              <p>🌤️</p>
            </lu>
          </div>{" "}
          <div className="day">
            <lu>
              <p>Wed 10°C</p>
              <p>🌈</p>
            </lu>
          </div>{" "}
          <div className="day">
            <lu>
              <p>Thu 10°C</p>
              <p>🌥️</p>
            </lu>
          </div>{" "}
          <div className="day">
            <lu>
              <p>Fri 10°C</p>
              <p>🌀</p>
            </lu>
          </div>{" "}
          <div className="day">
            <lu>
              <p>Sat 10°C</p>
              <p>☁️</p>
            </lu>
          </div>
          <div className="day">
            <lu>
              <p>Sun 10°C</p>
              <p>☀️</p>
            </lu>
          </div>
        </div>
      </div>

      <footer>
        <a
          href="https://github.com/Roz18/ReactWeather"
          alt="github"
          target="blank"
        >
          {" "}
          Linkto Github{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
