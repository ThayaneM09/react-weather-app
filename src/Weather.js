import React, { useState }/*, {useState}*/ from 'react';
import './Weather.css';
import axios from 'axios';
import FormattedDate from './FormattedDate';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });

    function displayWeather(response) {

        setWeatherData({
            ready: true,
            tempNow: response.data.main.temp,
            tempMin: response.data.main.temp_min,
            wind: response.data.wind.speed,
            city: response.data.name,
            country: response.data.sys.country,
            humidity: response.data.main.humidity,
            iconUrl: '',
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000)
        });
    }

    if (weatherData.ready) {
        return (
            <div className='mainContainer'>
                <div className='infoWeather'>
                    <div className='menu'>

                        <div className="row">
                            <div className="col-3">
                                <button className="localizationButton">
                                    <i className="fas fa-map-marker-alt" />
                                </button>
                            </div>

                            <div className="col-9">
                                <form className="formTypeCity">
                                    <input
                                        type="search"
                                        name="city"
                                        placeholder="Enter a city..."
                                        autocomplete="off"
                                        className="inputCity"
                                    />
                                    {" "}
                                    <button type="submit" className="submitIcon">
                                        <i className="fas fa-search" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='city'>
                        <div className="row">
                            <div className="col">
                                <h1 className="cityName">{weatherData.city}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2 className="country">{weatherData.country}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='weather'>
                        <div className='todayInfo'>
                            <div className="row">
                                <div className="col">
                                    <p className="buttons">
                                        <span>
                                            <a href="/" className="active">
                                                ºC{' '}
                                            </a>
                                        </span>|
                                    <span>
                                            <a href="/" className="fahreinheitButton">
                                                {' '}ºF
                                        </a>
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p className="day"><FormattedDate date={weatherData.date} /></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={weatherData.iconUrl} className="weatherIcon" width="100px" alt={weatherData.description} />
                                </div>
                                <div className="col">
                                    <p className="weatherDescription">{weatherData.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="tempNow">
                                        <span className='temperatureValue'>{Math.round(weatherData.tempNow)}</span>ºC
                                </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p className="tempMinToday"><span className='tempMin'>{Math.round(weatherData.tempMin)}</span>ºC
                            </p>
                                </div>
                            </div>
                        </div>

                        <div className="row additionalInfo">
                            <div className="col">
                                <i className="fas fa-wind" title="Wind Speed" />
                                <p className="windSpeed">{weatherData.wind}</p>
                            </div>
                            <div className="col">
                                <i className="fas fa-cloud-rain" title="Humidity" />
                                <p className="preciptation">{weatherData.humidity}%</p>
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col">
                                <p className="tipMessage">
                                    <span className="tip">You might need this</span>{' '}
                                    <i className="fas fa-umbrella" title="Umbrella" />
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <button
                                className="btn btn-primary collapseButton"
                                type="button"
                                data-toggle="collapse"
                                data-target="#forecast"
                                aria-expanded="false"
                                aria-controls="forecast"
                            >
                                <i className="fas fa-angle-down" />
                            </button>
                        </div>
                    </div >

                </div>
                <small className='openSourceLink'><a href='https://github.com/ThayaneM09/react-weather-app'>Open-source code</a> by Thayane Marcelino</small>
            </div>)
    } else {
        let apiKey = '9f983349ddb8c26dfc6cae681695c977';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
        return ("Loading...");
    }



}