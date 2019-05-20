// listenerJuventusRequest

import { store } from './../index.js';
import { actionShowCurrentStuff } from './../actions/actionShowCurrentStuff.js';

let previousJuventusString;
let getTodaysGame = (currentDate, currentDayInTheCalendar, juventusObject, loadJuventusStuffComplete, juventusStuff) => {
    const juventusTodayGame = document.querySelector('.juventus__today-game');

    if (!juventusTodayGame) return;

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    let eventsArray = [];
    let todayGame = '';

    if (juventusObject) {
        for (let i = 0; i < juventusObject[1].events.length; i++) {
            eventsArray.push(juventusObject[1].events[i].dateEvent);
        }
    }

    for (let i = 0; i < eventsArray.length; i++) {
        let newArray = eventsArray[i].split('-');
        if (currentYear === +newArray[0] && (currentMonth + 1) === +newArray[1] && currentDayInTheCalendar === +newArray[2]) {
            for (let i = 0; i < juventusObject[1].events.length; i++) {
                if (juventusObject[1].events[i].dateEvent === newArray.join('-')) {
                    todayGame = `<h3 class='juventus__header3'>Today's game:</h3>
                                        <p class='juventus__paragraph'>Date: ${juventusObject[1].events[i].dateEvent}</p>
                                        <p class='juventus__paragraph'>Event: ${juventusObject[1].events[i].strEvent}</p>
                                        <p class='juventus__paragraph'>Tornament: ${juventusObject[1].events[i].strLeague}</p>
                                        <p class='juventus__paragraph'>Round: ${juventusObject[1].events[i].intRound}</p>
                                        <p class='juventus__paragraph'>Time: ${juventusObject[1].events[i].strTime}</p>`;
                };
            }
            break;
        } else {
            todayGame = `<h3 class='juventus__header3'>Today's game:</h3>
                                <p class='juventus__paragraph'>There is no games today</p>`
        }
    }

    if (loadJuventusStuffComplete) {
        todayGame += `<div class='juventus__stuff'>
                <button class='current-stuff' id='current-stuff'>Current stuff <span class='current-stuff__available'>(is available)</span></button>
                </div>`;
    } else {
        todayGame += `<div class='juventus__stuff'>
        <button class='current-stuff' id='current-stuff'>Current stuff <span class='current-stuff__not-available'>(isn't available)</span></button>
        </div>`;
    }

    juventusTodayGame.innerHTML = todayGame;

    const currentStuff = document.getElementById('current-stuff');
    currentStuff.addEventListener('click', actionShowCurrentStuff);
}

let listenerJuventusRequest = () => {
    const state = store.getState();
    const currentDate = state.reducerDateChangeCalendar.currentDate;
    const currentDayInTheCalendar = state.reducerDateChangeCalendar.currentDayInTheCalendar;
    const loadJuventusComplete = state.reducerJuventus.loadJuventusComplete;
    const juventusObject = state.reducerJuventus.juventusObject;
    const loadJuventusStuffComplete = state.reducerJuventusStuff.loadJuventusStuffComplete;
    const juventusStuff = state.reducerJuventusStuff.juventusStuff;
    const juventus = document.querySelector('.juventus__content');

    let currentJuventusString = JSON.stringify(juventusObject);

    if (previousJuventusString !== currentJuventusString) {
        previousJuventusString = currentJuventusString;
        console.log('subscribeJuventusRequest 1-st load');
    } else {
        getTodaysGame(currentDate, currentDayInTheCalendar, juventusObject, loadJuventusStuffComplete, juventusStuff);
        console.log('subscribeJuventusRequest 2-nd load');
        return
    }

    if (!loadJuventusComplete) return;

    let string = `<div class='juventus__team'>
                        <h3 class='juventus__header3'>Team: ${juventusObject[0].teams[0].strTeam}</h3>     
                        <img class='juventus__badge' src="${juventusObject[0].teams[0].strTeamBadge}">                   
                        <img class='juventus__logo' src="${juventusObject[0].teams[0].strTeamLogo}">
                        <img class='juventus__jersey' src="${juventusObject[0].teams[0].strTeamJersey}">
                        <p class='juventus__paragraph'>Location: ${juventusObject[0].teams[0].strStadiumLocation}</p>
                        <p class='juventus__paragraph'>Tornament: ${juventusObject[0].teams[0].strLeague}</p>
                        <p class='juventus__paragraph'>Manager: ${juventusObject[0].teams[0].strManager}</p>
                        </div>`;

    // string += `<div class='juventus__stuff'>
    //                 <button class='current-stuff' id='current-stuff'>Current stuff</button>
    //                 </div>`;

    string += `<div class='juventus__stadium'>
                        <h3 class='juventus__header3'>Stadium: ${juventusObject[0].teams[0].strStadium}</h3>
                        <img class='juventus__stadium-photo' src="${juventusObject[0].teams[0].strStadiumThumb}">
                        <p class='juventus__paragraph'>Location: ${juventusObject[0].teams[0].strStadiumLocation}</p>
                        </div>`;

    string += `<div class='juventus__today-game'></div>`;

    string += `<div class='juventus__next-game'>
                        <h3 class='juventus__header3'>Next game:</h3>
                        <p class='juventus__paragraph'>Date: ${juventusObject[1].events[0].dateEvent}</p>
                        <p class='juventus__paragraph'>Event: ${juventusObject[1].events[0].strEvent}</p>
                        <p class='juventus__paragraph'>Tornament: ${juventusObject[1].events[0].strLeague}</p>
                        <p class='juventus__paragraph'>Round: ${juventusObject[1].events[0].intRound}</p>
                        <p class='juventus__paragraph'>Time: ${juventusObject[1].events[0].strTime}</p>
                        </div>`;

    juventus.innerHTML = string;
    getTodaysGame(currentDate, currentDayInTheCalendar, juventusObject, loadJuventusStuffComplete, juventusStuff);

    // const currentStuff = document.getElementById('current-stuff');
    // // currentStuff.addEventListener('click', actionShowCurrentStuff);
    // currentStuff.addEventListener('click', store.dispatch(actionShowCurrentStuff));
}

export {
    listenerJuventusRequest
}