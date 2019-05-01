import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import backgroundImage from './assets/ShortenerBg.png';
import { whitestWhite } from '../styles/colors';

import AlligatorInput from './AlligatorInput';

interface Props {
    style?: Object,
}

const ShortenerSection: React.FC<Props> = ({ style }) => {
    return (
        <div className={css(style, styles.container)}>
            <h2 className={css(styles.head)}>Try it out!</h2>
            <div className={css(styles.input)}>
                <AlligatorInput></AlligatorInput>
            </div>
            <Link
                className={`btn btn-outline-light ${css(styles.btn)}`}
                to=""
            >Get started for free ></Link>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 140,
        paddingBottom: 150,
        backgroundImage: `url(${backgroundImage})`,
    },
    head: {
        fontSize: 79,
        color: whitestWhite,
    },
    input: {
        padding: 52,
        margin: 'auto',
        width: 700,
    },
    btn: {
        padding: '10px 20px',
    }
})

export default ShortenerSection;