// actionSelectChange

import { store } from './../index.js';
// import { receiveJuventus } from './actions.js';
import { actionGetJuventus } from './actionGetJuventus.js';
import { actionGetCurrentStuff } from './actionGetCurrentStuff.js';

let actionSelectChange = e => {

    store.dispatch(actionGetJuventus(e.target.value));
    store.dispatch(actionGetCurrentStuff());

}

export {
    actionSelectChange
}