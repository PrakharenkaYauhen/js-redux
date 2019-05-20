// actionGetCurrentStuff

import { store } from './../index.js';
import { requestJuventusStuff, receiveJuventusStuff } from './actions.js';

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

let actionGetCurrentStuff = () => {
    console.log('JuventusStuff');

    const state = store.getState();
    const club = state.reducerJuventus.club;

    return dispatch => {

        console.log('JuventusStuffThunk');
        dispatch(requestJuventusStuff());

        Promise.all([
            fetch(teamsObject[club].players),
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
                            setTimeout(() => dispatch(receiveJuventusStuff(arrStuff)), 5000);
                            // store.dispatch(receiveJuventusStuff(arrStuff));
                        },
                        (error) => {
                            console.log(error);
                        }
                    )
            })
        // }
    }
}

export {
    actionGetCurrentStuff
}