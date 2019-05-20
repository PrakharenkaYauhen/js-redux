// reducerDateChangeCalendar

import {
    DATE_CHANGE_CALENDAR
} from './../actions/actions.js';

const currentDate = new Date();
const currentDayInTheCalendar = new Date().getDate();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;

const initialState = {
    currentDate,
    currentDayInTheCalendar,
    currentLocalStorageKey,
    task: JSON.parse(localStorage.getItem(currentLocalStorageKey))
}

function reducerDateChangeCalendar(state = initialState, action) {
    switch (action.type) {
        case DATE_CHANGE_CALENDAR:
            return Object.assign({}, state, {
                currentDate: action.payload.currentDate,
                currentDayInTheCalendar: action.payload.currentDayInTheCalendar,
                currentLocalStorageKey: action.payload.currentLocalStorageKey,
                task: action.payload.task,
            })
            
        default:
            return state
    }
}

export { reducerDateChangeCalendar };