import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';


import { smartestBeige } from './assets/colors';
import alligatorEatingImg from './assets/animation/alligatorEating.gif';

const NotFound: React.FC = () => (
    <div className={css(styles.container)}>
        <img
            src={alligatorEatingImg}
            className={css(styles.alligator)}
            alt="alligator"
        />
        <h1 className={css(styles.bigHead)}>404</h1>
        <h2 className={css(styles.mediumHead)}>
            There&apos;s nothing to eat here
        </h2>
        <h4 className={css(styles.smallHead)}>
            Let&apos;s
            {' '}
            <Link to="/">go home</Link>
        </h4>
    </div>
);

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: smartestBeige,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
    },
    alligator: { width: 400 },
    bigHead: {
        fontFamily: 'LatoWebHeavy',
        fontSize: 120,
    },
    mediumHead: {
        fontFamily: 'LatoWebBold',
        fontSize: 40,
        marginBottom: 20,
    },
    smallHead: { fontSize: 20 },
});

export default NotFound;
