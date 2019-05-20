// some reducer

import { combineReducers } from 'redux';
import { reducerWeather } from './reducerWeather.js';
import { reducerJuventus } from './reducerJuventus.js';
import { reducerDateChangeCalendar } from './reducerDateChangeCalendar.js';
import { reducerAddNumber } from './reducerAddNumber.js';
import { reducerJuventusStuff } from './reducerJuventusStuff.js';

const reducer = combineReducers({
    reducerDateChangeCalendar,
    reducerAddNumber,
    reducerWeather,
    reducerJuventus,
    reducerJuventusStuff,
})


export { reducer };