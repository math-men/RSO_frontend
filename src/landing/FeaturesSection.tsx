import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import FeatureBox from './FeatureBox';

import deliveryImg from '../assets/icons/delivery.svg';
import graphImg from '../assets/icons/graph.svg';
import worldwideImg from '../assets/icons/worldwide.svg';

interface Props {
    style?: Object,
}

const FeaturesSection: React.FC<Props> = ({ style }) => {
    return (
        <div id="features" className={css(style, styles.container)}>
            <h2 className={css(styles.head)}>Learn our features</h2>
            <div className={css(styles.featuresContainer)}>
                <FeatureBox image={graphImg}>
                    Our advanced statistics panel allows you to analyze usage of your links in a simple and intuitive way.
                </FeatureBox>
                <FeatureBox image={deliveryImg}>
                    Management panel gives you quick overview of your links. It allows you to supervise them the way you like.
                </FeatureBox>
                <FeatureBox image={worldwideImg}>
                    Thanks to our worldwide distributed system your links can redirect faster than ever.
                </FeatureBox>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingBottom: 100,
    },
    head: {
        fontSize: 79,
    },
    featuresContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 75,
    },
})

export default FeaturesSection;