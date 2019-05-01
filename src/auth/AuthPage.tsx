import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

import { smartestBeige, whitestWhite, darkGray } from '../assets/colors';
import linkIcon from '../assets/icons/link-symbol.png';
import crocodile from '../assets/icons/crocodile.svg';

const RegisterPage: React.FC = () => {
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.contentBox)}>
                <Link to="">
                    <img src={crocodile} className={css(styles.logo)} alt="home" />
                </Link>
                <Route path='/register' component={RegisterForm} />
                <Route path='/login' component={LoginForm} />
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: smartestBeige,
        backgroundImage: `url(${linkIcon})`,
        backgroundPosition: 'left 10px top 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    contentBox: {
        backgroundColor: whitestWhite,
        borderRadius: 5,
        border: `1px solid ${darkGray}`,

        padding: '60px 40px',

        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        width: 115,
    },
})

export default RegisterPage;