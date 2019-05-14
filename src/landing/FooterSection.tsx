import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Link } from 'react-router-dom';

import { writerBlack } from '../assets/colors';

interface Props {
    style?: Object,
}

const FooterSection: React.FC<Props> = ({ style }) => {
    return (
        <div className={css(style, styles.container)}>
            <ul className={css(styles.list)}>
                <li className={css(styles.listElement)}>Copyright © 2019 Firma. All rights reserved.</li>
                <li className={css(styles.listElement)}>
                    <Link
                        to="/login"
                        className={css(styles.link)}
                    >Login</Link>
                </li>
                <li className={css(styles.listElement)}>
                    <Link
                        to="/register"
                        className={css(styles.link)}
                    >Register</Link>
                </li>
                <li className={css(styles.listElement)}>
                    <Link
                        to=""
                        className={css(styles.link)}
                    >Terms of use</Link>
                </li>
            </ul>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingBottom: 80,
        textAlign: 'right'
    },
    link: {
        color: writerBlack,
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    listElement: {
        display: 'inline-block',
        padding: 0,
        margin: 0,
        ':not(:last-child)::after': {
            content: '"/"',
            margin: '0 10px',
        },
    },
});

export default FooterSection;