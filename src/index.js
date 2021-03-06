import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
// import logger from 'redux-logger';
import todoApp from './reducers'
import App from './components/App'

import './styles/index.scss';

const store = createStore(todoApp, applyMiddleware(thunk));
// const store = createStore(todoApp, applyMiddleware(thunk, logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)