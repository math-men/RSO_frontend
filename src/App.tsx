import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './assets/Lato/latofonts.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/toasts.css';

import store, { persistor } from './redux/store';

import LandingPage from './landing/LandingPage';
import AuthPage from './auth/AuthPage';
import AppPage from './app/AppPage';
import NotFound from './NotFound';

import { writerBlack } from './assets/colors';


const App: React.FC = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <div className={css(styles.app)}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/(register|login|forgot|logout)" component={AuthPage} />
                        <Route path="/app" component={AppPage} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        </PersistGate>
    </Provider>
);

const styles = StyleSheet.create({
    app: {
        textAlign: 'center',
        color: writerBlack,
        fontFamily: 'LatoWeb',
    },
});

export default App;
