import React, { useState }/*, {useState}*/ from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function displayWeather(response) {
        console.log(response);
        setWeatherData({
            ready: true,
            tempNow: response.data.main.temp,
            tempMin: response.data.main.temp_min,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            country: response.data.sys.country,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000)
        });
    }
    function search() {
        let apiKey = '9f983349ddb8c26dfc6cae681695c977';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();


    }
    function handleCityChange(event) {
        setCity(event.target.value);

    }
    function showForecast(event) {
        event.preventDefault();
        return (<WeatherForecast city={weatherData.city} />);
    }

    if (weatherData.ready) {
        return (
            <div className='mainContainer'>
                <div className='infoWeather'>
                    <div className='menu'>
                        <form className="formTypeCity" onSubmit={handleSubmit}>
                            <input
                                type="search"
                                name="city"
                                placeholder="Enter a city..."
                                autocomplete="off"
                                className="inputCity"
                                onChange={handleCityChange}
                            />
                            {" "}
                            <button type="submit" className="submitIcon">
                                <i className="fas fa-search" />
                            </button>
                        </form>

                    </div>

                    <WeatherInfo data={weatherData} />
                    <button type='button' onClick={showForecast} className='showMoreButton'>Show more</button>
                </div>
                <small className='openSourceLink'><a href='https://github.com/ThayaneM09/react-weather-app'>Open-source code</a> by Thayane Marcelino</small>
            </div>

        );
    } else {
        search();
        return ("Loading...");
    }



}