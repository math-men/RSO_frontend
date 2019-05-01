import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import PricingBox from './PricingBox';

import backgroundImage from './assets/PricingBg.png';
import { whitestWhite } from '../styles/colors';

interface Props {
    style?: Object,
}

const PricingSection: React.FC<Props> = ({ style }) => {
    return (
        <div className={css(style, styles.container)}>
            <h2 className={css(styles.head)}>Pricing</h2>
            <div className={css(styles.pricingContainer)}>
                <PricingBox
                    title="Free version"
                    features={[
                        'Limited number of links',
                        'Links valid only for limited period of time',
                        'Reduced access to statistics panel',
                    ]}
                    link=""
                ></PricingBox>
                <PricingBox
                    title="Premium version"
                    features={[
                        'Unlimited number of links',
                        'Your links are active for as long as you need them',
                        'Full access to statistics panel',
                        '24/7 helpdesk in one of the fastest developing countries',
                    ]}
                    link=""
                ></PricingBox>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingBottom: 100,
        backgroundImage: `url(${backgroundImage})`,
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
})


export default PricingSection;