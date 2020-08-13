import React from 'react';
import FormattedDate from './FormattedDate';
import './WeatherInfo.css';

export default function WeatherInfo(props) {
    return (
        <div className='weatherInfo'>
            <div className='city'>
                <div className="row">
                    <div className="col">
                        <h1 className="cityName">{props.data.city}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="country">{props.data.country}</h2>
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
                            <p className="day"><FormattedDate date={props.data.date} /></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={props.data.iconUrl} className="weatherIcon" width="100px" alt={props.data.description} />
                        </div>
                        <div className="col">
                            <p className="weatherDescription">{props.data.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="tempNow">
                                <span className='temperatureValue'>{Math.round(props.data.tempNow)}</span>ºC
                                </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="tempMinToday"><span className='tempMin'>{Math.round(props.data.tempMin)}</span>ºC
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row additionalInfo">
                    <div className="col">
                        <i className="fas fa-wind" title="Wind Speed" />
                        <p className="windSpeed">{props.data.wind}</p>
                    </div>
                    <div className="col">
                        <i className="fas fa-cloud-rain" title="Humidity" />
                        <p className="preciptation">{props.data.humidity}%</p>
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
            <small className='openSourceLink'><a href='https://github.com/ThayaneM09/react-weather-app'>Open-source code</a> by Thayane Marcelino</small>
        </div >
    );

}