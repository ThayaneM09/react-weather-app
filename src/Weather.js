import React, { useState }/*, {useState}*/ from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    const [showForecast, setShowForecast] = useState(false);
    const [units, setUnits] = useState("celsius");

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
    function handleForecastView(event) {
        setShowForecast(!showForecast);
        if (showForecast) {
            event.target.innerHTML = "Show more";
        } else {
            event.target.innerHTML = "Show less";
        }
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

                    <WeatherInfo data={weatherData} units={units} setUnits={setUnits} />
                    <button
                        type="button"
                        onClick={(e) => handleForecastView(e)}
                        className="showMoreButton"
                    >
                        Show more
                    </button>

                    {showForecast ? <WeatherForecast city={weatherData.city} units={units} /> : <></>}

                </div>
                <small className='openSourceLink'><a href='https://github.com/ThayaneM09/react-weather-app'>Open-source code</a> by <a href='https://www.linkedin.com/in/thayane-marcelino-6529a058/'>Thayane Marcelino</a></small>
            </div>

        );
    } else {
        search();
        return ("Loading...");
    }

}