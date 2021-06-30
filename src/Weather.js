import React from "react";
import axios from 'axios';

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className="container">
      <div className="weather-app">
        <div className="row">
          <div className="row justify-content-end">
            <form className="search-bar">
              <div className="search-entry">
                <input
                  type="search"
                  name="city-entry"
                  placeholder="Type a city.."
                  className="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="search-submit">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="overview">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>Last updated: {weatherData.date}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="description">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>

            <div className="description">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
