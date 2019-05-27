// ContainerJuventus

import { connect } from 'react-redux'
import { ComponentJuventus } from '../components/ComponentJuventus'
import { actionFillJuventus } from '../actions'
import { actionChangeTeam } from '../actions'
import { actionJuventusStuff } from '../actions'
import { actionJuventusStuffModal } from '../actions'

const mapStateToProps = (state) => {
    const { currentDate,
        currentDayInTheCalendar,
        juventusObject,
        juventusIsLoaded,
        juventusError,
        clubName,
        juventusStuffObject,
        juventusStuffIsLoaded,
        juventusStuffError,
        juventusStuffModal } = state.reducerCalendar;

    return {
        currentDate,
        currentDayInTheCalendar,
        juventusObject,
        juventusIsLoaded,
        juventusError,
        clubName,
        juventusStuffObject,
        juventusStuffIsLoaded,
        juventusStuffError,
        juventusStuffModal
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
                fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=CSKA'),
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

        onChangeTeam: e => {
            let action = {
                clubName: e.target.value,
            }
            dispatch(actionChangeTeam(action))
        },

        onClickStuff: (juventusStuffIsLoaded, juventusStuffModal) => {
            if (!juventusStuffIsLoaded) return;
            let action = {
                juventusStuffModal: juventusStuffModal ? false : true,
            }
            dispatch(actionJuventusStuffModal(action))
        },
    }
}

const ContainerJuventus = connect(mapStateToProps, mapDispatchToProps)(ComponentJuventus);
// const ContainerJuventus = connect()(ComponentJuventus);

export { ContainerJuventus }