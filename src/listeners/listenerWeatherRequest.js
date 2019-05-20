// listenerWeatherRequest

import { store } from './../index.js';

let listenerWeatherRequest = () => {
    const state = store.getState();
    const currentDayInTheCalendar = state.reducerDateChangeCalendar.currentDayInTheCalendar;
    const loadComplete = state.reducerWeather.loadComplete;
    const weatherObject = state.reducerWeather.weatherObject;

    let weather = document.querySelector('.weather__content');

    console.log('listenerWeatherRequest');

    if (!loadComplete) return;

    let differentInDays = currentDayInTheCalendar - new Date().getDate();
    let positionInObject = differentInDays * 8 + 1;
    let string;

    if (weatherObject) {
        if (currentDayInTheCalendar === new Date().getDate()) {
            string = `<p class='weather__paragraph'>Temperature in ${weatherObject[0].name} now: ${weatherObject[0].main.temp}°C</p>
                        <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png"}
                            alt="icon of weather" />
                        <p class='weather__paragraph'>"${weatherObject[0].weather['0'].description}"</p>
                        <p class='weather__paragraph'>Wind: ${weatherObject[0].wind.speed}m/s»</p>
                        <p class='weather__paragraph'>Humidity: ${weatherObject[0].main.humidity}%»</p>`
        } else {
            if (positionInObject > 40) {
                string = `<p class='weather__paragraph'>Sorry, but we don't have an information for so long period of time.</p>`
            } else if (positionInObject < 40 && positionInObject > 2) {
                string = `<p class='weather__paragraph'>Temperature in ${weatherObject[1].city.name} will be: ${weatherObject[1].list['' + positionInObject].main.temp}°C</p>
                            <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject[1].list['' + positionInObject].weather['0'].icon + ".png"}
                                alt="icon of weather" />
                            <p class='weather__paragraph'>"${weatherObject[1].list['' + positionInObject].weather['0'].description}"</p>
                            <p class='weather__paragraph'>Wind: ${weatherObject[1].list['' + positionInObject].wind.speed}m/s»</p>
                            <p class='weather__paragraph'>Humidity: ${weatherObject[1].list['' + positionInObject].main.humidity}%»</p>`
            } else {
                string = `<p class='weather__paragraph'>Sorry, we don't forecast weather for past.</p>`
            }
        }
    }

    let options = {
        timezone: 'Europe/Minsk',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    let hours = Math.floor(weatherObject[2].results.day_length/60/60);
    let minutes = Math.floor(weatherObject[2].results.day_length/60 - hours*60);
    let seconds = weatherObject[2].results.day_length - hours*60*60 - minutes*60;

    string += `<hr />
    <p class='weather__paragraph'>Day length: ${hours + ':' + minutes + ':' + seconds}</p>
    <p class='weather__paragraph'>Sunrise: ${new Date(Date.parse(weatherObject[2].results.sunrise)).toLocaleString("en-US", options)}</p>
    <p class='weather__paragraph'>Sunset: ${new Date(Date.parse(weatherObject[2].results.sunset)).toLocaleString("en-US", options)}</p>`
    weather.innerHTML = string;
}

export {
    listenerWeatherRequest
}