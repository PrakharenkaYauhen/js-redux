// listenerFillTheCalendar

import { store } from './../index.js';
import { actionGetWeather } from './../actions/actionGetWeather.js';
import { actionGetJuventus } from './../actions/actionGetJuventus.js';
import imgPinBoardURL from './../pin-board150.png';
import imgBallURL from './../ball150.png';

let previousDate = null;
let previousYear = null;
let previousMonth = null;

function listenerFillTheCalendar() {
    const state = store.getState();
    const currentDate = state.reducerDateChangeCalendar.currentDate;
    const currentDayInTheCalendar = state.reducerDateChangeCalendar.currentDayInTheCalendar;
    const weatherObject = state.reducerWeather.weatherObject;

    // console.log(state);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let tableBody = document.getElementById('table-body');

    if (currentDayInTheCalendar !== previousDate) {
        previousDate = currentDayInTheCalendar;
        // actionGetWeather();
        store.dispatch(actionGetWeather());
        store.dispatch(actionGetJuventus());
    }

    let headerYearMonth = document.getElementById('table-header-year-month');
    headerYearMonth.innerHTML = `${monthes[currentMonth]} ${currentYear}`;
    if (((currentYear !== previousYear || currentMonth !== previousMonth) && !tableBody.innerHTML)
        || ((currentYear !== previousYear || currentMonth !== previousMonth) && tableBody.innerHTML)) {
        console.log('subscribeFillTheCalendar full');
        tableBody.innerHTML = '';
        let rowOfDays = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            let td = document.createElement('td');
            td.innerHTML = week[i];
            td.classList.add('todo__table__data');
            td.classList.add('todo__table__data_name');
            rowOfDays.appendChild(td);
        }
        tableBody.appendChild(rowOfDays);

        for (let j = 0; j < 6; j++) {
            let row = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                let td = document.createElement('td');
                td.innerHTML = null;
                td.classList.add('todo__table__data');
                td.classList.add('todo__table__data_cells');
                row.appendChild(td);
                tableBody.appendChild(row);
            }
        }

        previousYear = currentYear;
        previousMonth = currentMonth;
    }

    console.log('subscribeFillTheCalendar short');

    const tableRows = document.querySelectorAll('.todo__table__data_cells');

    for (let i = 0; i < daysInThisMonth; i++) {
        if (firstDayOfTheMonth !== 0) {
            tableRows[firstDayOfTheMonth - 1 + i].innerHTML = i + 1;
        } else {
            tableRows[6 + i].innerHTML = i + 1;
        }
    }

    let localStorageKeysArray = Object.keys(localStorage);
    let checkingLocalStorageKey;

    for (let i = 0; i < tableRows.length; i++) {
        if (parseFloat(tableRows[i].innerHTML) === currentDayInTheCalendar) {
            tableRows[i].classList.add('todo__table__data_choisen');
        } else {
            tableRows[i].classList.remove('todo__table__data_choisen');
        }

        for (let j = 0; j < localStorageKeysArray.length; j++) {
            checkingLocalStorageKey = localStorageKeysArray[j].split(' ');
            if (+checkingLocalStorageKey[2] === +tableRows[i].innerHTML
                && +checkingLocalStorageKey[1] === currentMonth
                && +checkingLocalStorageKey[0] === currentYear) {
                let imgPinBoard = document.createElement('img');
                imgPinBoard.setAttribute('src', imgPinBoardURL);
                imgPinBoard.classList.add('todo__table__pin');
                tableRows[i].appendChild(imgPinBoard);
                if (JSON.parse(localStorage.getItem(localStorageKeysArray[j]))[0].game) {
                    let imgBall = document.createElement('img');
                    imgBall.setAttribute('src', imgBallURL);
                    imgBall.classList.add('todo__table__ball');
                    tableRows[i].appendChild(imgBall);
                }
            }
        }
    }

    if (weatherObject) {
        for (let i = 0; i < tableRows.length; i++) {
            if (parseFloat(tableRows[i].innerHTML) === new Date().getDate()
                && +currentDate.getMonth() === new Date().getMonth()
                && +currentDate.getFullYear() === new Date().getFullYear()) {

                let img = document.createElement('img');
                img.setAttribute('src', "https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png");
                img.classList.add('todo__table__sun');
                tableRows[i].appendChild(img);
                for (let j = 1; j <= 4; j++) {
                    let img = document.createElement('img');
                    img.setAttribute('src', "https://openweathermap.org/img/w/" + weatherObject[1].list[j * 8 + 1 + ''].weather['0'].icon + ".png");
                    img.classList.add('todo__table__sun');
                    tableRows[i + j].appendChild(img);
                }
                break;
            }
        }
    }
}

export { listenerFillTheCalendar };