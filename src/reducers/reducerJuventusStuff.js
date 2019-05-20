// reducerJuventusStuff

import {
    REQUEST_JUVENTUS_STUFF,
    RECEIVE_JUVENTUS_STUFF
} from './../actions/actions.js';

function reducerJuventusStuff(state = { loadJuventusStuffComplete: false, juventusStuff: null }, action) {
    switch (action.type) {
        case REQUEST_JUVENTUS_STUFF:
            return Object.assign({}, state, {
                loadJuventusStuffComplete: action.payload.loadJuventusStuffComplete,
                juventusStuff: action.payload.juventusStuff,
            })
        case RECEIVE_JUVENTUS_STUFF:
            return Object.assign({}, state, {
                loadJuventusStuffComplete: action.payload.loadJuventusStuffComplete,
                juventusStuff: action.payload.juventusStuff,
            })

        default:
            return state
    }
}

export { reducerJuventusStuff };