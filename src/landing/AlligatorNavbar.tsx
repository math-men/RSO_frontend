import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import crocodile from './assets/crocodile.svg'

interface Props {
    style?: Object,
}

const AlligatorNavbar: React.FC<Props> = ({ style }) => {
    return (
        <div className={css(styles.nav, style)}>
            <div>
                <img src={crocodile} className={css(styles.logo)} alt="logo" />
                <NavLink
                    className={css(styles.link)}
                    to="/#try"
                    smooth={true}
                >Try it now!</NavLink>
                <NavLink
                    className={css(styles.link)}
                    to="/#features"
                    smooth={true}
                >Features</NavLink>
                <NavLink
                    className={css(styles.link)}
                    to="/#pricing"
                    smooth={true}
                >Pricing</NavLink>
            </div>
            <div>
                <NavLink
                    className={css(styles.link)}
                    to=""
                    smooth={true}
                >Login</NavLink>
                <NavLink
                    className={css(styles.link)}
                    to=""
                    smooth={true}
                >Sign up</NavLink>
                <NavLink
                    className={`btn btn-primary ${css(styles.button)}`}
                    to=""
                    smooth={true}
                >Get Enterprise</NavLink>
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