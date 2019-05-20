import './index.css';
import './style.css';
import { App } from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger  from 'redux-logger';

import { someListener } from './listeners/someListener.js';
import { listenerTaskList } from './listeners/listenerTaskList.js';
import { listenerFillTheCalendar } from './listeners/listenerFillTheCalendar.js';
import { listenerWeatherRequest } from './listeners/listenerWeatherRequest.js';
import { listenerJuventusRequest } from './listeners/listenerJuventusRequest.js';
import { listenerPreloader } from './listeners/listenerPreloader.js';
import { reducer } from './reducers/reducer.js';
import { someAction } from './actions/some action.js';
import { actionDateChangeCalendar } from './actions/actionDateChangeCalendar.js';
import { actionMonthYearChange } from './actions/actionMonthYearChange.js';
import { actionAddTaskModal } from './actions/actionAddTaskModal.js';
import { actionAddTaskInTheList } from './actions/actionAddTaskInTheList.js';
import { actionDeleteTask } from './actions/actionDeleteTask.js';
import { actionGetCurrentStuff } from './actions/actionGetCurrentStuff.js';

// const weather = document.querySelector('.weather__content');

document.getElementById('root').innerHTML += App();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger )));

store.subscribe(someListener);
store.subscribe(listenerTaskList);
store.subscribe(listenerFillTheCalendar);
store.subscribe(listenerWeatherRequest);
store.subscribe(listenerJuventusRequest);
store.subscribe(listenerPreloader);

store.dispatch({ type: 'INITIAL', });

const table = document.getElementById('todo__table');
table.addEventListener('click', actionDateChangeCalendar);
table.addEventListener('click', actionMonthYearChange);
table.addEventListener('dblclick', actionAddTaskModal);

const addTaskModalButton = document.querySelector('.modal-button__button');
addTaskModalButton.addEventListener('click', actionAddTaskModal);

const addTaskInTheListButton = document.querySelector('.modal__button_enter');
addTaskInTheListButton.addEventListener('click', actionAddTaskInTheList);

const listTasksLeft = document.getElementById('todo__tasks__left');
listTasksLeft.addEventListener('click',  actionDeleteTask);

let button = document.getElementById('button');
button.addEventListener('click', someAction);

store.dispatch(actionGetCurrentStuff());

export { store };