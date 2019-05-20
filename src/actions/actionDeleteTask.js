// actionDeleteTask

import { store } from './../index.js';

const DATE_CHANGE_CALENDAR = 'DATE_CHANGE_CALENDAR';
let actionDeleteTask = e => {
    let target = e.target;

    const state = store.getState();
    const currentLocalStorageKey = state.reducerDateChangeCalendar.currentLocalStorageKey;

    if (!(target.classList.contains('todo__tasks__button_delete') || target.classList.contains('icon-cross'))) return;

    let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));

    let newTasks;
    if (target.tagName === "SPAN") {
        newTasks = todaysTasks.filter(function (object) {
            return target.parentElement.parentElement.firstChild.innerHTML !== object.content;
        });
    } else {
        newTasks = todaysTasks.filter(function (object) {
            return target.parentElement.firstChild.innerHTML !== object.content;
        });
    }

    newTasks.length ? 
    localStorage.setItem(state.reducerDateChangeCalendar.currentLocalStorageKey, 
    JSON.stringify(newTasks)) : localStorage.removeItem(state.reducerDateChangeCalendar.currentLocalStorageKey);

    store.dispatch({
        type: DATE_CHANGE_CALENDAR,
        payload: {
            currentDate: state.reducerDateChangeCalendar.currentDate,
            currentDayInTheCalendar: state.reducerDateChangeCalendar.currentDayInTheCalendar,
            currentLocalStorageKey: state.reducerDateChangeCalendar.currentLocalStorageKey,
            task: newTasks,
        },
    })
}

export {
    actionDeleteTask
}