import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { ParallaxBanner } from 'react-scroll-parallax';

import backgroundImage from '../assets/background/ShortenerBg.png';
import { whitestWhite } from '../assets/colors';

import AlligatorInput from './AlligatorInput';

interface Props {
    style?: Object,
}

const ShortenerSection: React.FC<Props> = ({ style }) => {
    return (
        <div id="try" className={css(style, styles.container)}>
            <ParallaxBanner
                layers={[
                    {
                        image: backgroundImage,
                        amount: 0.5,
                        children: <div></div>
                    },

                ]}
                style={{height: '621px'}}
                className={css(styles.parallax)}
            >
                <div className={css(styles.parallaxChildren)}>
                    <h2 className={css(styles.head)}>Try it out!</h2>
                    <div className={css(styles.input)}>
                        <AlligatorInput></AlligatorInput>
                    </div>
                    <Link
                        className={`btn btn-outline-light ${css(styles.btn)}`}
                        to=""
                    >Get started for free ></Link>
                </div>
            </ParallaxBanner>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 621,
        position: 'relative',
    },
    parallax: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    parallaxChildren: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 140,
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