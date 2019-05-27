// ContainerWeather

import { connect } from 'react-redux'
import { ComponentWeather } from '../components/ComponentWeather'
import { actionFillWeather } from '../actions'

const mapStateToProps = (state) => {
    const { currentDate, currentDayInTheCalendar, weatherObject, weatherIsLoaded, weatherError } = state.reducerCalendar;

    return {
        currentDate,
        currentDayInTheCalendar,
        weatherObject,
        weatherIsLoaded,
        weatherError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (currentDate, currentDayInTheCalendar) => {
            let weatherDatesPromise = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    if (position) {
                        resolve(position.coords);
                    } else {
                        reject(new Error('Weather dates is not received'));
                    }
                    // console.log(position.coords);
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
                                let action = {
                                    weatherObject: result,
                                    weatherIsLoaded: true,
                                    weatherError: null,
                                }
                                dispatch(actionFillWeather(action))
                            },
                            (error) => {
                                console.log(error);
                                let action = {
                                    weatherObject: null,
                                    weatherIsLoaded: true,
                                    weatherError: error,
                                }
                                dispatch(actionFillWeather(action))
                            }
                        )
                })

        },

        fetchDaysLengtData: (currentDate, currentDayInTheCalendar, weatherObject) => {
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
                                // console.log(result);
                                let action = {
                                    weatherObject: weatherObject,
                                    weatherIsLoaded: true,
                                    weatherError: null,
                                }
                                dispatch(actionFillWeather(action))
                            },
                            (error) => {
                                console.log(error);
                                let action = {
                                    weatherObject: null,
                                    weatherIsLoaded: true,
                                    weatherError: error,
                                }
                                dispatch(actionFillWeather(action))
                            }
                        )
                })

        }
    }
}

const ContainerWeather = connect(mapStateToProps, mapDispatchToProps)(ComponentWeather);

export { ContainerWeather }