// actionGetCurrentStuff

import { requestJuventusStuff, receiveJuventusStuff } from './actions.js';

let actionGetCurrentStuff = () => {
    console.log('JuventusStuff');

    return dispatch => {

        console.log('JuventusStuffThunk');
        dispatch(requestJuventusStuff());

        Promise.all([
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