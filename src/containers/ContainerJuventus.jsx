// ContainerJuventus

import { connect } from 'react-redux'
import { ComponentJuventus } from '../components/ComponentJuventus'
import { actionFillJuventus } from '../actions'
import { actionChangeTeam } from '../actions'
import { actionJuventusStuff } from '../actions'

const mapStateToProps = (state) => {
    const { currentDate,
        currentDayInTheCalendar,
        juventusObject,
        juventusIsLoaded,
        juventusError,
        clubName,
        juventusStuffObject,
        juventusStuffError,
    } = state.reducerCalendar;

    return {
        currentDate,
        currentDayInTheCalendar,
        juventusObject,
        juventusIsLoaded,
        juventusError,
        clubName,
        juventusStuffObject,
        juventusStuffError,
    }
}

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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: clubName => {

            Promise.all([
                fetch(teamsObject[clubName].team),
                fetch(teamsObject[clubName].id),
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

                                // Checking tasks wich don't contain games and take them from localStorage to distinct object, to get them back after clearing of localStorage
                                let localStorageKeys = Object.keys(localStorage);
                                let notGamesTasks = [];
                                for (let i = 0; i < localStorageKeys.length; i++) {
                                    for (let j = 0; j < JSON.parse(localStorage.getItem(localStorageKeys[i])).length; j++) {
                                        if (!JSON.parse(localStorage.getItem(localStorageKeys[i]))[j].game) {
                                            let object = {};
                                            object.key = localStorageKeys[i];
                                            object.content = JSON.parse(localStorage.getItem(localStorageKeys[i]))[j];
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

                                if (result[1].events === null) {
                                    let action = {
                                        juventusObject: result,
                                        juventusIsLoaded: true,
                                        juventusError: null,
                                    }
                                    dispatch(actionFillJuventus(action))
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

                                let action = {
                                    juventusObject: result,
                                    juventusIsLoaded: true,
                                    juventusError: null,
                                }
                                dispatch(actionFillJuventus(action))
                            },
                            (error) => {
                                console.log(error);
                                let action = {
                                    juventusObject: null,
                                    juventusIsLoaded: true,
                                    juventusError: error,
                                }
                                dispatch(actionFillJuventus(action))
                            }
                        )
                })

        },

        fetchTeamsStuff: clubName => {

            Promise.all([
                fetch(teamsObject[clubName].players),
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
                                let arrStuff = [];
                                for (let i = 0; i < result[0].player.length; i++) {
                                    arrStuff.push([result[0].player[i].strPlayer, result[0].player[i].strPosition, result[0].player[i].dateBorn, result[0].player[i].strNationality]);
                                }

                                let action = {
                                    juventusStuffObject: arrStuff,
                                    juventusStuffIsLoaded: true,
                                    juventusStuffError: null,
                                }
                                setTimeout(() => dispatch(actionJuventusStuff(action)), 4000);
                                // dispatch(actionJuventusStuff(action))
                            },
                            (error) => {
                                console.log(error);
                                let action = {
                                    juventusStuffObject: null,
                                    juventusStuffIsLoaded: true,
                                    juventusStuffError: error,
                                }
                                dispatch(actionJuventusStuff(action))
                            }
                        )
                })

        },

        onChangeTeam: (e) => {
            let action = {
                clubName: e.target.value,
                juventusStuffIsLoaded: false,
            }
            dispatch(actionChangeTeam(action))
        },
    }
}

const ContainerJuventus = connect(mapStateToProps, mapDispatchToProps)(ComponentJuventus);

export { ContainerJuventus }