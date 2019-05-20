// reducerWeather

import {
    REQUEST_WEATHER,
    RECEIVE_WEATHER,
} from './../actions/actions.js';

function reducerWeather(state = { loadComplete: false, weatherObject: null }, action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            return Object.assign({}, state, {
                loadComplete: action.payload.loadComplete,
                weatherObject: action.payload.weatherObject,
            })
        case RECEIVE_WEATHER:
            return Object.assign({}, state, {
                loadComplete: action.payload.loadComplete,
                weatherObject: action.payload.weatherObject,
            })
        default:
            return state
    }
}

export { reducerWeather };