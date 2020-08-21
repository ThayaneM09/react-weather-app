import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

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
                            <p className="day">
                                <FormattedDate date={props.data.date} /></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className='weathericon'>
                                <WeatherIcon code={props.data.icon} />
                            </div>
                        </div>
                        <div className="col">
                            <p className="weatherDescription">{props.data.description}</p>
                        </div>
                    </div>
                    <WeatherTemperature celsiusNow={props.data.tempNow} celsiusMin={props.data.tempMin} />

                </div>

                <div className="row additionalInfo">
                    <div className="col">
                        <i className="fas fa-wind" title="Wind Speed" />
                        <p className="windSpeed">{Math.round(props.data.wind)}Km/h</p>
                    </div>
                    <div className="col">
                        <i className="fas fa-cloud-rain" title="Humidity" />
                        <p className="preciptation">{Math.round(props.data.humidity)}%</p>
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

        </div >
    );

}