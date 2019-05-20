// actionAddTaskInTheList

import { store } from './../index.js';
import { getDateAndTasks } from './actions.js';

let actionAddTaskInTheList = () => {
    const addTaskInTheListInput = document.querySelector('.modal__textarea');
    const state = store.getState();

    if (addTaskInTheListInput.value.length !== 0) {
        let todaysTasks = JSON.parse(localStorage.getItem(state.reducerDateChangeCalendar.currentLocalStorageKey));

        let tasksList = todaysTasks ? todaysTasks : [];
        let newTask = {};

        newTask.id = new Date().getTime();
        newTask.content = addTaskInTheListInput.value;

        tasksList.push(newTask);

        localStorage.setItem(state.reducerDateChangeCalendar.currentLocalStorageKey, JSON.stringify(tasksList));

        store.dispatch(getDateAndTasks(state.reducerDateChangeCalendar.currentDate,
            state.reducerDateChangeCalendar.currentDayInTheCalendar,
            state.reducerDateChangeCalendar.currentLocalStorageKey,
            tasksList));

        addTaskInTheListInput.focus();
        addTaskInTheListInput.value = '';
    } else {
        addTaskInTheListInput.focus();
        return
    }

}

export {
    actionAddTaskInTheList
}