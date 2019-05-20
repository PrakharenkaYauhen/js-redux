// reducerJuventus

import {
    REQUEST_JUVENTUS,
    RECEIVE_JUVENTUS
} from './../actions/actions.js';

function reducerJuventus(state = { loadJuventusComplete: false, juventusObject: null, }, action) {
    switch (action.type) {
        case REQUEST_JUVENTUS:
            return Object.assign({}, state, {
                loadJuventusComplete: action.payload.loadJuventusComplete,
                juventusObject: action.payload.juventusObject,
            })
        case RECEIVE_JUVENTUS:
            return Object.assign({}, state, {
                loadJuventusComplete: action.payload.loadJuventusComplete,
                juventusObject: action.payload.juventusObject,
            })

        default:
            return state
    }
}

export { reducerJuventus };