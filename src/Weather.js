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
<div class="container">
    <div class="weather-app-wrapper">
    <div class="weather-app">

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

      <div class="overview">
    <h1 id="city">{weatherData.city}</h1>
    <ul>
      <li>Last updated at <span id="date">{weatherData.date}</span></li>
      <li id="description">{weatherData.description}</li>
    </ul>
  </div>
    <div class="row">
      <div class="col-6">
        <div class="clearfix weather-temperature">
        <img 
        src={weatherData.imgUrl}
        alt="Clear"
        class="float-left"
        id="icon" 
        />
        <div class="float-left">
<strong id="temperature">{weatherData.temperature}</strong><span class="units">°C/°F</span>
      </div>
      </div>
    </div>
      <div class="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">{weatherData.humidity}</span> %
          </li>
          <li>
            Wind: <span id="wind">{weatherData.wind}</span> m/h
          </li>
        </ul>
      </div>
    </div>
    <div class="weather-forecast" id="forecast"></div>
  </div>
  <small>
    <a href="https://github.com/gingernapoleon/react-weather" target="_blank">Open-source code</a>, by Ginger
    Napoleon
  </small>
  </div>
  </div>
  )}