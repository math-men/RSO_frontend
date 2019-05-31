import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import auth from './auth';
import links from './links';


const reducers = combineReducers({
    auth,
    links,
});

export default createStore(
    reducers,
    applyMiddleware(thunk),
);
