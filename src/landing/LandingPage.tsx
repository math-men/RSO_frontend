import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
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
                <AlligatorNavbar style={styles.block}></AlligatorNavbar>
                <ShortenerSection style={styles.block}></ShortenerSection>
                <FeaturesSection style={styles.block}></FeaturesSection>
                <PricingSection style={styles.block}></PricingSection>
                <FooterSection style={styles.block}></FooterSection>
            </ParallaxProvider>
        </div>
    )
}

const styles = StyleSheet.create({
    block: {
        paddingLeft: 100,
        paddingRight: 100,
    }
})

export default LandingPage;