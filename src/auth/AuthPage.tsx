import React from 'react';
import { Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
// import ForgotPassword from './ForgotPassword';
import Logout from './Logout';

import { smartestBeige, whitestWhite, darkGray } from '../assets/colors';
import linkIcon from '../assets/icons/link-symbol.png';
import alligator from '../assets/icons/alligator.svg';

const AuthPage: React.FC = () => (
    <div className={css(styles.container)}>
        <div className={css(styles.contentBox)}>
            <Link to="/">
                <img src={alligator} className={css(styles.logo)} alt="home" />
            </Link>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            {/* <Route path="/forgot" component={ForgotPassword} /> */}
            <Route path="/logout" component={Logout} />
        </div>
    </div>
);

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
    logo: { width: 115 },
});

export default AuthPage;
