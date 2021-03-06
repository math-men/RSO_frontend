import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ParallaxBanner } from 'react-scroll-parallax';

import PricingBox from './PricingBox';

import backgroundImage from '../assets/background/PricingBg.png';
import { whitestWhite } from '../assets/colors';

interface Props {
    style?: Object,
}

const PricingSection: React.FC<Props> = ({ style }) => (
    <div id="pricing" className={css(style, styles.container)}>
        <ParallaxBanner
            layers={[
                {
                    image: backgroundImage,
                    amount: 0.5,
                    children: <div />,
                },

            ]}
            style={{ height: '778px' }}
            className={css(styles.parallax)}
        >
            <div className={css(styles.parallaxChildren)}>
                <h2 className={css(styles.head)}>Pricing</h2>
                <div className={css(styles.pricingContainer)}>
                    <PricingBox
                        title="Free version"
                        features={[
                            'No link control panel',
                            'Links valid only for limited period of time',
                            'No access to statistics panel',
                        ]}
                        link="/#try"
                    />
                    <PricingBox
                        title="Premium version"
                        features={[
                            'Unlimited number of links',
                            'Your links are active for as long as you need them',
                            'Full access to statistics panel',
                            '24/7 helpdesk in one of the fastest developing countries',
                        ]}
                        link="/register"
                    />
                </div>
            </div>
        </ParallaxBanner>
    </div>
);

const styles = StyleSheet.create({
    container: {
        height: 778,
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
        top: 100,
    },
    pricingContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 75,
    },
    head: {
        fontSize: 79,
        color: whitestWhite,
    },
});


export default PricingSection;
