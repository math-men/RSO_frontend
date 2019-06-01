import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import links from './links';


const persistConfig = {
    key: 'auth',
    storage,
};

const reducers = combineReducers({
    auth: persistReducer(persistConfig, auth),
    links,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

export default store;
export const persistor = persistStore(store);
