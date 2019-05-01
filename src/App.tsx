import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import LandingPage from './landing/LandingPage';

import { writerBlack } from './styles/colors';


const App: React.FC = () => {
  return (
    <div className={css(styles.app)}>
      <Router>
        <Route path="/" exact component={LandingPage} />
      </Router>
    </div>
  );
}

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
    color: writerBlack,
  }
})

export default App;
