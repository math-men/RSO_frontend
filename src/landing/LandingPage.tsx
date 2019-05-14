import React from 'react';
import { StyleSheet } from 'aphrodite';
import { ParallaxProvider } from 'react-scroll-parallax';

import AlligatorNavbar from './AlligatorNavbar';
import ShortenerSection from './ShortenerSection';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import FooterSection from './FooterSection';


const LandingPage: React.FC = () => {
    return (
        <div>
            <ParallaxProvider>
                <AlligatorNavbar style={styles.block} />
                <ShortenerSection style={styles.block} />
                <FeaturesSection style={styles.block} />
                <PricingSection style={styles.block} />
                <FooterSection style={styles.block} />
            </ParallaxProvider>
        </div>
    )
};

const styles = StyleSheet.create({
    block: {
        paddingLeft: 100,
        paddingRight: 100,
    }
});

export default LandingPage;