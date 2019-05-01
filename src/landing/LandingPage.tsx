import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import AlligatorNavbar from './AlligatorNavbar';
import ShortenerSection from './ShortenerSection';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import FooterSection from './FooterSection';


const LandingPage: React.FC = () => {
    return (
        <div className={css(styles.mainContainer)}>
            <AlligatorNavbar style={styles.block}></AlligatorNavbar>
            <ShortenerSection style={styles.block}></ShortenerSection>
            <FeaturesSection style={styles.block}></FeaturesSection>
            <PricingSection style={styles.block}></PricingSection>
            <FooterSection style={styles.block}></FooterSection>
        </div>
    )
}

const styles = StyleSheet.create({
    mainContainer: {    },
    block: {
        padding: '0 100px',
    }
})

export default LandingPage;