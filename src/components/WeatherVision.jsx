import React from 'react';
import './WeatherVision.css';

// WeatherVision Component

function WeatherVision(props) {
    const { error, isLoaded, todayWeather } = props;
    if (error) {
        return <div className='weather'>
            <h2 className='weather__header'>Weather</h2>
            <div className='weather__content'>
                <p>Error: {error.message}</p>
            </div>
        </div>;
    } else if (!isLoaded) {
        return <div className='weather'>
            <h2 className='weather__header'>Weather</h2>
            <div className='weather__content'>
                <p>Loading...</p>
            </div>
        </div>;
    } else {
        return (
            <div className='weather'>
                <h2 className='weather__header'>Weather</h2>
                <div className='weather__content'>
                    <p className='weather__paragraph'>Temperature in {todayWeather.name} now: {todayWeather.main.temp}°C</p>
                    <img className='weather__icon'
                        src={"https://openweathermap.org/img/w/" + todayWeather.weather['0'].icon + ".png"}
                        alt="icon of weather" />
                    <p className='weather__paragraph'>"{todayWeather.weather['0'].description}"</p>
                    <p className='weather__paragraph'>Wind: {todayWeather.wind.speed}м/c»</p>
                    <p className='weather__paragraph'>Humidity: {todayWeather.main.humidity}%»</p>
                </div>
            </div>
        );
    }
}

export { WeatherVision };