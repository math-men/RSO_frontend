import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';


import { smartestBeige } from "./assets/colors";
import alligatorEatingImg from './assets/animation/alligatorEating.gif';

const NotFound: React.FC = () => {
    return (
        <div className={css(styles.container)}>
            <img
                src={alligatorEatingImg}
                className={css(styles.alligator)}
                alt="alligator"
            />
            <h1 className={css(styles.bigHead)}>404</h1>
            <h2 className={css(styles.mediumHead)}>
                There's nothing to eat here
            </h2>
            <h4 className={css(styles.smallHead)}>
                Let's <Link to="/">go home</Link>
            </h4>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: smartestBeige,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alligator: {
        width: 400,
    },
    bigHead: {
        fontFamily: 'LatoWebHeavy',
        fontSize: 120,
    },
    mediumHead: {
        fontFamily: 'LatoWebBold',
        fontSize: 40,
        marginBottom: 20,
    },
    smallHead: {
        fontSize: 20,
    },
});

export default NotFound;
