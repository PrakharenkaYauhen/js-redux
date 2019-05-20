// actionTheCalendar

import { store } from './../index.js';

const DATE_CHANGE_CALENDAR = 'DATE_CHANGE_CALENDAR';
let actionDateChangeCalendar = e => {
    var target = e.target;

    const state = store.getState();
    const currentDate = state.reducerDateChangeCalendar.currentDate;
    let currentDayInTheCalendar = state.reducerDateChangeCalendar.currentDayInTheCalendar;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    if (target.tagName !== 'TD' || parseFloat(target.innerHTML) === currentDayInTheCalendar || isNaN(parseFloat(target.innerHTML))) return;

    currentDayInTheCalendar = parseFloat(target.innerHTML);
    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;

    console.log(currentLocalStorageKey);

    let task = JSON.parse(localStorage.getItem(currentLocalStorageKey));

    console.log(task);

    store.dispatch({
        type: DATE_CHANGE_CALENDAR,
        payload: {
            currentDate,
            currentDayInTheCalendar,
            currentLocalStorageKey,
            task: task,
        },
    })
}

export {
    actionDateChangeCalendar, DATE_CHANGE_CALENDAR
}