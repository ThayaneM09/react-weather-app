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
                            <FormattedDate date={props.data.date} />
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
                    <WeatherTemperature celsiusNow={props.data.tempNow} celsiusMin={props.data.tempMin} units={props.units} setUnits={props.setUnits} />

                </div>

                <div className="row additionalInfo">
                    <div className="col">
                        <span className='miniIcons'><i className="fas fa-wind" title="Wind Speed" /></span>
                        <p className="windSpeed">{Math.round(props.data.wind)}Km/h</p>
                    </div>
                    <div className="col">
                        <span className='miniIcons'><i className="fas fa-cloud-rain" title="Humidity" /></span>
                        <p className="preciptation">{Math.round(props.data.humidity)}%</p>
                    </div>
                </div>
                <hr />
            </div >
        </div >
    );

}