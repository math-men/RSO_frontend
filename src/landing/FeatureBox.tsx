import React, { ReactNode } from 'react';
import { StyleSheet, css } from 'aphrodite';

interface Props {
    image: string,
    children: ReactNode,
}

const FeatureBox: React.FC<Props> = ({ image, children }) => {
    return (
        <div className={css(styles.featureBox)}>
            <img src={image} className={css(styles.featureImage)} />
            <p className={css(styles.featureText)}>
                {children}
            </p>
        </div>
    );
}

const styles = StyleSheet.create({
    featureBox: {
        padding: 21,
    },
    featureImage: {
        marginBottom: 57,
    },
    featureText: {
        textAlign: 'left',
        fontSize: 24,
    },
})

export default FeatureBox;

