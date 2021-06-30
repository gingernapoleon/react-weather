import React from "react";
import axios from 'axios';

export default function Weather() {
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

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div className="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div className="col-2">
        <div className="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span className="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "da16df2d631e0a7dbbac5c7b96916177";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

function search(city) {
  let apiKey = "da16df2d631e0a7dbbac5c7b96916177";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("New York");

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
  )