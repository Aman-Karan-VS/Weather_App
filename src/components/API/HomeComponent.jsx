import React, { useEffect, useState } from "react";
import "../../index.css";
import "./HomeComponent.css";
import Currentweather from "../Current/  Currentweather";
import Forecast from "../Forecast/Forecast";
function HomeComponent() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [forecastData,setForecastData]=useState('');
  const getWeather = (e) => {
    e.preventDefault();
    const apiKey = "57037d58a6159f5582923358e24e2b5b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    // Using async/await 
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("data is not ok");
        }
        const data = await res.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    
      const apiKey1 = "57037d58a6159f5582923358e24e2b5b";
      const url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey1}`;
      try {
        const res = await fetch(url1);
        if (!res.ok) {
          throw new Error("data is not ok");
        }
        const data = await res.json();
        setForecastData(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData();
    
    // using promises
    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("data is not ok");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setWeatherData(data);
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));

    //   const apiKey1 = "57037d58a6159f5582923358e24e2b5b";
    //   const url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey1}`;
    //   fetch(url1)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("data is not ok");
    //     }
    //     return res.json();1
    //   })
    //   .then((data) => {
    //     setForecastData(data);
    //   })
    //   .catch((error) => console.log(error));
  };
  
  return (
    <div className="container">
      <form onSubmit={getWeather} className="input">
        <input
          type="text"
          placeholder="enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Search</button>
      </form>
      <Currentweather weatherData={weatherData}/>
      <Forecast forecastData={forecastData}/>
    </div>
  );
}

export default HomeComponent;
