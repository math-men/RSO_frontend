import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavHashLink } from 'react-router-hash-link';

import crocodile from './assets/crocodile.svg'

interface Props {
    style?: Object,
}

const AlligatorNavbar: React.FC<Props> = ({ style }) => {
    return (
        <div className={css(styles.nav, style)}>
            <div>
                <img src={crocodile} className={css(styles.logo)} alt="logo" />
                <NavHashLink
                    className={css(styles.link)}
                    to=""
                >Home</NavHashLink>
                <NavHashLink
                    className={css(styles.link)}
                    to=""
                >Features</NavHashLink>
                <NavHashLink
                    className={css(styles.link)}
                    to=""
                >Pricing</NavHashLink>
            </div>
            <div>
                <NavHashLink
                    className={css(styles.link)}
                    to=""
                >Login</NavHashLink>
                <NavHashLink
                    className={css(styles.link)}
                    to=""
                >Sign up</NavHashLink>
                <NavHashLink
                    className={`btn btn-primary ${css(styles.button)}`}
                    to=""
                >Get Enterprise</NavHashLink>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 100,
    },
    logo: {
        width: 114,
        height: 60,
    },
    link: {
        padding: 10,
        textDecoration: 'none',
    },
    button: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default AlligatorNavbar;