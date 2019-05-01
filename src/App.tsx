import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import LandingPage from './landing/LandingPage';
import AuthPage from './auth/AuthPage';

import { writerBlack } from './assets/colors';


const App: React.FC = () => {
  return (
    <div className={css(styles.app)}>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/(register|login)" component={AuthPage} />
      </Router>
    </div>
  );
}

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
    color: writerBlack,
    fontFamily: 'Roboto',
  }
})

export default App;
