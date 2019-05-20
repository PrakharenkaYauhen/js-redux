// actionGetJuventus

import { store } from './../index.js';
import { REQUEST_JUVENTUS, RECEIVE_JUVENTUS, requestJuventus, receiveJuventus } from './actions.js';

let teamsObject = {
    'juventus' : {
        team: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus',
        id: 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676',
        players: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Juventus'
    },
    'ajax' : {
        team: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Ajax',
        id: 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133772',
        players: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Ajax'
    },
    'arsenal' : {
        team: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal',
        id: 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133604',
        players: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal'
    }
}

let previousClub;

let actionGetJuventus = (club = 'juventus') => {

    console.log('Juventus');
    console.log(club);

    return dispatch => {

        console.log('JuventusThunk');

        const state = store.getState();
        // const club = state.reducerJuventus.club;
        const currentJuventusObject = state.reducerJuventus.juventusObject;

        if (currentJuventusObject && previousClub === club) {
            console.log(11111111111111111111111111111)
            dispatch(receiveJuventus(currentJuventusObject, club));
        } else {
            previousClub = club;
            dispatch(requestJuventus(club));
            Promise.all([
                fetch(teamsObject[club].team),
                fetch(teamsObject[club].id),
                // fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal'),
                // fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676'),
                // fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133604'),
            ])
                .then(res => {
                    // console.log(res);
                    return res.map(juventusObject => juventusObject.json())
                })
                .then(res => {
                    // console.log(res);
                    Promise.all(res)
                        .then(
                            (result) => {
                                console.log(result);

                                outer: for (let i = 0; i < result[1].events.length; i++) {
                                    let localStorageKeyString = result[1].events[i].dateEvent.split('-');
                                    let localStorageKey = `${+localStorageKeyString[0]} ${+localStorageKeyString[1] - 1} ${+localStorageKeyString[2]}`;
                                    let todaysTasks = JSON.parse(localStorage.getItem(localStorageKey));

                                    let tasksList = todaysTasks ? todaysTasks : [];
                                    let newTask = {};

                                    newTask.id = new Date().getTime();
                                    newTask.content = `Game: ${result[1].events[i].strEvent}`;
                                    newTask.game = true;

                                    if (localStorage.getItem(localStorageKey)) {
                                        for (let i = 0; i < (JSON.parse(localStorage.getItem(localStorageKey))).length; i++) {
                                            if (JSON.parse(localStorage.getItem(localStorageKey))[i].content === newTask.content) break outer;
                                        }
                                    }

                                    tasksList.push(newTask);

                                    localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
                                }

                                // localStorage.setItem(state.currentLocalStorageKey, JSON.stringify(newTasks))

                                // setTimeout(() => dispatch(receiveJuventus(result)), 5000);
                                dispatch(receiveJuventus(result, club));
                            },
                            (error) => {
                                console.log(error);
                            }
                        )
                })
        }
    }
}

export {
    actionGetJuventus, REQUEST_JUVENTUS, RECEIVE_JUVENTUS
}