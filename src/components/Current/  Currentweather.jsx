import React, { useState } from "react";
import "./Currentweather.css";

function Currentweather({weatherData}) {
  

  return (weatherData &&

    <div className="report">
      <div className="today">
        <i id="icon"className={"wi wi-day-sunny"}></i>
        <p>city: {weatherData.name}</p>
        <p>temp: {(weatherData.main.temp-273.15).toFixed(2)}℃</p>
        <p>windspeed: {weatherData.wind.speed} km/h</p>
        <p>Humidity : {weatherData.main.humidity}g.m-3</p>
        <p>Weather Mood : {weatherData.weather[0].main} </p>
      </div>
      <h1>Weather ForeCast Report </h1>
    </div>
  );
}
export default Currentweather;
