// ContainerJuventus

import { connect } from 'react-redux'
import { ComponentJuventus } from '../components/ComponentJuventus'
import { actionFillJuventus } from '../actions'

const mapStateToProps = (state) => {
    const { currentDate, currentDayInTheCalendar, juventusObject, juventusIsLoaded, juventusError } = state.reducerCalendar;

    return {
        // currentDate,
        // currentDayInTheCalendar,
        juventusObject,
        juventusIsLoaded,
        juventusError
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

let club = 'juventus';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {

            Promise.all([
                fetch(teamsObject[club].team),
                fetch(teamsObject[club].id),
            ])
                .then(res => {
                    // console.log(res);
                    return res.map(juventusObject => juventusObject.json())
                })
                .then(res => {
                    console.log(res);
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

        }
    }
}

const ContainerJuventus = connect(mapStateToProps, mapDispatchToProps)(ComponentJuventus);
// const ContainerJuventus = connect()(ComponentJuventus);

export { ContainerJuventus }