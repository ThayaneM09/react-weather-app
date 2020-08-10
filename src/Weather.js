import React/*, {useState}*/ from 'react';
import './Weather.css';
//import axios from 'axios';

export default function Weather() {
    /*let [city,setCity] = useState(' ');
    let [country, setCountry] = useState(' ');
    let [iconWeather, setIconWeather] = useState(' ');
    let [tempNow, settempNow] = useState(' ');
    let [tempMin, setTempMin] = useState(' ');
    let [umidity, setUmidity] = useState(' ');
    let [wind, setWind] = useState(' ');
    
    
    function submitCity(event){
        event.preventDefault();
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        let apiKey = '9f983349ddb8c26dfc6cae681695c977';
        axios.get(apiUrl).then(displayWeather);
    }
    function displayWeather(response) {

    }*/

    return (
        <div className='container'>
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
                                type="text"
                                name="city"
                                placeholder="City"
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
                        <h1 className="cityName" >Paris</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="country">Fr</h2>
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
                            <p className="day"> Friday 20:12</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="/" className="weatherIcon" width="100px" alt="weather-icon" />
                        </div>
                        <div className="col">
                            <p className="weatherDescription">Clear</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="tempNow">5ºC
                    </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="tempMinToday">6ºC
                    </p>
                        </div>
                    </div>
                </div>

                <div className="row additionalInfo">
                    <div className="col">
                        <i className="fas fa-wind" title="Wind Speed" />
                        <p className="windSpeed">20km/h</p>
                    </div>
                    <div className="col">
                        <i className="fas fa-cloud-rain" title="Humidity" />
                        <p className="preciptation">20%</p>
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
                        aria-controls="forecast">
                        <i className="fas fa-angle-down" />
                    </button>
                </div>
                <div />

            </div>
        </div>


    )
}