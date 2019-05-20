// reducerAddNumber

// import { ADD_NUMBER } from './../actions/some action.js';
import { ADD_NUMBER } from './../actions/actions.js';

function reducerAddNumber(state = 0, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return action.payload.number;
        default:
            return state
    }
}

export { reducerAddNumber };