// someListener

import { store } from './../index.js';

function someListener() {
    let state = store.getState();
    document.getElementById('button').innerHTML = state.reducerAddNumber;
}

export { someListener };