// actionGetJuventus

import { store } from './../index.js';
import { REQUEST_JUVENTUS, RECEIVE_JUVENTUS, requestJuventus, receiveJuventus } from './actions.js';

let teamsObject = {
    'juventus': {
        team: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus',
        id: 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676',
        players: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Juventus'
    },
    'ajax': {
        team: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Ajax',
        id: 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133772',
        players: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Ajax'
    },
    'arsenal': {
        team: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal',
        id: 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133604',
        players: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal'
    },
    'cska': {
        team: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=CSKA',
        id: 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=134120',
        players: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=CSKA'
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
                // fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=CSKA'),
                // fetch( 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133772'),
                // fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Ajax'),
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
                                console.log(localStorage);
                                console.log(Object.keys(localStorage));

                                // Checking tasks wich don't contain games and take them from localStorage to distinct object
                                let localStorageKeys = Object.keys(localStorage);
                                let notGamesTasks = [];
                                for (let i = 0; i < localStorageKeys.length; i++) {
                                    for (let j = 0; j < JSON.parse(localStorage.getItem(localStorageKeys[i])).length; j++) {
                                        // console.log(JSON.parse(localStorage.getItem(localStorageKeys[i]))[j]);
                                        if (!JSON.parse(localStorage.getItem(localStorageKeys[i]))[j].game) {
                                            let object = {};
                                            object.key = localStorageKeys[i];
                                            object.content = JSON.parse(localStorage.getItem(localStorageKeys[i]))[j];
                                            // notGamesTasks.push(JSON.parse(localStorage.getItem(localStorageKeys[i]))[j]);
                                            notGamesTasks.push(object);
                                        }
                                    }
                                }
                                // 

                                localStorage.clear();

                                 // Adding tasks wich don't contain games again in our localStorage
                                for (let i = 0; i < notGamesTasks.length; i++) {
                                    let todaysTasks = JSON.parse(localStorage.getItem(notGamesTasks[i].key));
                                    let tasksList = todaysTasks ? todaysTasks : [];
                                    tasksList.push(notGamesTasks[i].content);
                                    localStorage.setItem(notGamesTasks[i].key, JSON.stringify(tasksList))
                                }
                                // 

                                // console.log(notGamesTasks);

                                if (result[1].events === null) {
                                    dispatch(receiveJuventus(result, club));
                                    return;
                                }

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