// some action

import { store } from './../index.js';
import { someActionNumber } from './actions.js';

let someAction = () => {
    const state = store.getState();
    store.dispatch(someActionNumber(state));
}

export { someAction };