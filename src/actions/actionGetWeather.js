// actionGetWeather

import { store } from './../index.js';
import { REQUEST_WEATHER, RECEIVE_WEATHER, requestWeather, receiveWeather } from './actions.js';

function actionGetWeather() {

    console.log('Weather');

    return dispatch => {

        console.log('WeatherThunk');
        // store.dispatch(requestWeather());
        dispatch(requestWeather());

        const state = store.getState();
        const currentDate = state.reducerDateChangeCalendar.currentDate;
        const currentDayInTheCalendar = state.reducerDateChangeCalendar.currentDayInTheCalendar;
        const weatherObject = state.reducerWeather.weatherObject;

        if (weatherObject) {
            let weatherDatesPromise = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    if (position) {
                        resolve(position.coords)
                    } else {
                        reject(new Error('Weather dates is not received'));
                    }
                })
            });

            weatherDatesPromise.then(coords => {
                return Promise.all([
                    fetch('https://api.sunrise-sunset.org/json?lat=' + coords.latitude.toFixed(6) + '&lng=' + coords.longitude.toFixed(6) + '&date=' + currentDate.getFullYear() + '-' + (1 + currentDate.getMonth()) + '-' + currentDayInTheCalendar + '&formatted=0'),
                ])
            })
                .then(res => {
                    return res.map(wetherObject => wetherObject.json())
                })
                .then(res => {
                    Promise.all(res)
                        .then(
                            (result) => {
                                weatherObject[2] = result[0];
                                // store.dispatch(receiveWeather(result));
                                dispatch(receiveWeather(result));
                            },
                            (error) => {
                                console.log(error);
                            }
                        )
                })
        } else {
            let weatherDatesPromise = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    if (position) {
                        // setTimeout(() => resolve(position.coords), 2000);
                        resolve(position.coords)
                    } else {
                        reject(new Error('Weather dates is not received'));
                    }
                })
            });

            weatherDatesPromise.then(coords => {
                let city = (coords) ? 'lat=' + coords.latitude.toFixed(6) + '&lon=' + coords.longitude.toFixed(6) : 'q=Minsk';
                return Promise.all([
                    fetch('http://api.openweathermap.org/data/2.5/weather?' + city + '&units=metric&lang=en&APPID=2d009bc907c3f547b59f7129beb7c9ee'),
                    fetch('http://api.openweathermap.org/data/2.5/forecast?' + city + '&units=metric&lang=en&APPID=2d009bc907c3f547b59f7129beb7c9ee'),
                    fetch('https://api.sunrise-sunset.org/json?lat=' + coords.latitude.toFixed(6) + '&lng=' + coords.longitude.toFixed(6) + '&date=' + currentDate.getFullYear() + '-' + (1 + currentDate.getMonth()) + '-' + currentDayInTheCalendar + '&formatted=0'),
                ])
            })
                .then(res => {
                    // console.log(res);
                    return res.map(wetherObject => wetherObject.json())
                })
                .then(res => {
                    // console.log(res);
                    Promise.all(res)
                        .then(
                            (result) => {
                                console.log(result);
                                // store.dispatch(receiveWeather(result));
                                dispatch(receiveWeather(result));
                            },
                            (error) => {
                                console.log(error);
                            }
                        )
                })
        }
    }
}

export { REQUEST_WEATHER, RECEIVE_WEATHER, actionGetWeather }