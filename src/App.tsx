import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import './assets/Lato/latofonts.css';

import LandingPage from './landing/LandingPage';
import AuthPage from './auth/AuthPage';
import AppPage from './app/AppPage';
import NotFound from './NotFound';

import { writerBlack } from './assets/colors';


const App: React.FC = () => {
    return (
        <div className={css(styles.app)}>
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/(register|login|forgot)" component={AuthPage}/>
                    <Route path="/app" component={AppPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
};

const styles = StyleSheet.create({
    app: {
        textAlign: 'center',
        color: writerBlack,
        fontFamily: 'LatoWeb',
    }
});

export default App;
