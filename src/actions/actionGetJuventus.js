// actionGetJuventus

import { store } from './../index.js';
import { REQUEST_JUVENTUS, RECEIVE_JUVENTUS, requestJuventus, receiveJuventus } from './actions.js';

let actionGetJuventus = () => {

    console.log('Juventus');

    return dispatch => {

        console.log('JuventusThunk');

        const state = store.getState();
        const currentJuventusObject = state.reducerJuventus.juventusObject;

        if (currentJuventusObject) {
            dispatch(receiveJuventus(currentJuventusObject));
        } else {
            dispatch(requestJuventus());
            Promise.all([
                fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus'),
                fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676'),
                fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Juventus'),
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
                                dispatch(receiveJuventus(result));
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