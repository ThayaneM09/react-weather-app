import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}h`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        if (props.units === "celsius") {
            return `${temperature}°C`;
        } else {
            const fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
            return `${fahrenheitTemperature}°F`;
        }

    }

    return (
        <div className="WeatherForecastPreview col">
            <span className='forecastHour'>{hours()}</span> {' '}
            <WeatherIcon code={props.data.weather[0].icon} />
            <p className='forecastTemperature'>{temperature()}</p>
        </div>
    );
}