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
    <div className="weather-app-wrapper">
    <div className="weather-app">

<form id="search-form" className="mb-3">
  <div className="row">
    <div className="col-9">
  <input 
  type="search" 
  placeholder="Type a city name..." 
  className="form-control"
  id="city-input"
  autocomplete="off" />
</div>
  <div className="col-3">
  <input type="submit" 
  vaule="Search"
  className="btn btn-outline-light w-100" />
</div>
</div>
</form>

      <div className="overview">
    <h1 id="city"></h1>
    <ul>
      <li>Last updated at <span id="date"></span></li>
      <li id="description"></li>
    </ul>
  </div>

    <div classNameName="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
        <img 
        src="" 
        alt="Clear"
        className="float-left"
        id="icon" 
        />
        <div className="float-left">
<strong id="temperature"></strong><span className="units">°F</span>
      </div>
      </div>
    </div>

      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity"></span> %
          </li>
          <li>
            Wind: <span id="wind"></span> m/h
          </li>
        </ul>
      </div>
    <div className="weather-forecast" id="forecast"></div>
</div>
<div classNameName="open-source">
  <small>
    <a href="https://github.com/gingernapoleon/Vanilla-weather-app.git" target="_blank">Open-source code</a>, by Ginger
    Napoleon
  </small>
  </div>

  </div>
  </div>
  </div>
  )}