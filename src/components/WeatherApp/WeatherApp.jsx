import React, { useState } from 'react';
import './WeatherApp.css';

//img
import clear from '../../Assets/clear.png'; 
import cloud from '../../Assets/cloud.png'; 
import drizzle from '../../Assets/drizzle.png'; 
import humidity from '../../Assets/humidity.png'; 
import rain from '../../Assets/rain.png'; 
import searchIcon from '../../Assets/search.png'; 
import snow from '../../Assets/snow.png';
import wind from '../../Assets/wind.png';


// api key


const WeatherApp = () => {
  
  let API_KEY = "8fbea50f46a079c132edf1fb7aaaff8f";

  const [wicon ,setWicon] = useState(cloud);

  const search = async () => {
      const element = document.getElementsByClassName('cityInput')
      if(element[0].value==="")
      //Value from input data 
      {
        return 0;
      } 

      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=8fbea50f46a079c132edf1fb7aaaff8f`;
      
      // FEATCH Api
      let response = await fetch(URL);
      let data = await response.json();

      const humidity = document.getElementsByClassName('humidity-percent');
      const wind = document.getElementsByClassName('wind-rate');
      const temperature = document.getElementsByClassName('weather-temp');
      const location = document.getElementsByClassName('weather-location');
      
      // update
      humidity[0].innerHTML = data.main.humidity+ " %";
      wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
      temperature[0].innerHTML = data.main.temp+ " c";
      location[0].innerHTML = data.name;


      if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {

        setWicon(clear); 
      }
      else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
        setWicon(cloud);
      }
       
    
      else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
      setWicon(drizzle);
      }
      
      else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
        setWicon(drizzle);
      }
      else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
        setWicon(rain);
      }
      else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
          setWicon(rain);
      }
      else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
          setWicon(snow);
      }
      else {
        setWicon(clear);
      }
}   




  return (
    <div className='card-weather'>
      
        <div className="top-search">
          <input type="text" className="cityInput" placeholder='search' />
          
          <div className="serach-icon" onClick={() => {search()}}>
            <img src={searchIcon} alt="search icon" />
          </div>
        </div>

        <div className="weather-image">
          <img src={wicon} alt="" />
        </div>

        <div className="weather-temp">24c</div>
        <div className="weather-location">London</div>
        
        <div className="data-card">
          
          <div className="elememt">
             <img src={humidity} alt="" className='icon' />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">HUmidity</div>
            </div>
          </div>

          <div className="elememt">
             <img src={wind} alt="" className='icon' />
            <div className="data">
                <div className="wind-rate">18 km/h</div>
                <div className="text">Wind speed</div>
            </div>
          </div>


        </div>
    </div>
  )
}

export default WeatherApp