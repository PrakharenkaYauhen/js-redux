// reducerJuventus

import {
    REQUEST_JUVENTUS,
    RECEIVE_JUVENTUS
} from './../actions/actions.js';

function reducerJuventus(state = { loadJuventusComplete: false, juventusObject: null, club: 'juventus',}, action) {
    switch (action.type) {
        case REQUEST_JUVENTUS:
            return Object.assign({}, state, {
                club: action.payload.club,
                loadJuventusComplete: action.payload.loadJuventusComplete,
                juventusObject: action.payload.juventusObject,
            })
        case RECEIVE_JUVENTUS:
            return Object.assign({}, state, {
                club: action.payload.club,
                loadJuventusComplete: action.payload.loadJuventusComplete,
                juventusObject: action.payload.juventusObject,
            })

        default:
            return state
    }
}

export { reducerJuventus };