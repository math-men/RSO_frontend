import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import auth from './auth';

const reducers = combineReducers({ auth });

export default createStore(
    reducers,
    applyMiddleware(thunk),
);
