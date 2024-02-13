import React from 'react';
import '../../components/Current/Currentweather.css'
function Forecast({forecastData}) {
    console.log(forecastData);
  return (forecastData &&
    <div className="forcast">
        <div className="first">
          <i id="icon"className={"wi wi-day-cloudy-high"}></i>
          <p>Date: {forecastData.city.name}</p>
          <p>Temp: {(forecastData.list[0].main.temp-273.15).toFixed(2)}℃</p>
          <p>Weather: {forecastData.list[0].weather[0].main} </p>
          <p>Windspeed: {forecastData.list[0].wind.speed}</p>
          <p>Humidity: {forecastData.list[0].main.humidity}g.m-3</p>
        </div>
        <div className="first">
          <i id="icon"className={"wi wi-day-fog"}></i>
          <p>Date: {forecastData.city.name}</p>
          <p>Temp: {(forecastData.list[1].main.temp-273.15).toFixed(2)}℃</p>
          <p>Weather : {forecastData.list[1].weather[0].main} </p>
          <p>Windspeed: {forecastData.list[1].wind.speed}</p>
          <p>Humidity: {forecastData.list[1].main.humidity}g.m-3</p>
        </div>
        <div className="first">
          <i id="icon"className={"wi wi-day-cloudy-gusts"}></i>
          <p>Date: {forecastData.city.name}</p>
          <p>Temp: {(forecastData.list[2].main.temp-273.15).toFixed(2)}℃</p>
          <p>Weather : {forecastData.list[2].weather[0].main} </p>
          <p>Windspeed: {forecastData.list[2].wind.speed}</p>
          <p>Humidity: {forecastData.list[2].main.humidity}g.m-3</p>
        </div>
      </div>
  );
}

export default Forecast;