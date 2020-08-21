import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');

    function convertToFahreinheit(event) {
        event.preventDefault();
        setUnit('fahreinheit');

    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    if (unit === 'celsius') {

        return (
            <div className='weatherTemperature'>
                <div className="row">
                    <div className="col">
                        <span className='temperatureValue'>{Math.round(props.celsiusNow)}</span>
                        <span className='unit'>ºC |<a href='/' onClick={convertToFahreinheit}> ºF </a>
                        </span>

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="tempMinToday"><span className='tempMin'>{Math.round(props.celsiusMin)}º</span>
                        </p>
                    </div>
                </div>

            </div >
        );
    } else {
        let fahreinheitTempNow = (props.celsiusNow * 9 / 5) + 32;
        let fahreinheitTempMin = (props.celsiusMin * 9 / 5) + 32;

        return (
            <div className='weatherTemperature'>
                <div className="row">
                    <div className="col">
                        <span className='temperatureValue'>{Math.round(fahreinheitTempNow)}</span>
                        <span className='unit'><a href='/' onClick={showCelsius}>ºC</a> | ºF </span>

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="tempMinToday"><span className='tempMin'>{Math.round(fahreinheitTempMin)}º</span>
                        </p>
                    </div>
                </div>

            </div >);
    }



}