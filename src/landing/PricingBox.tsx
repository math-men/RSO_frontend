import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

import { whitestWhite, lightGray } from '../assets/colors';


interface Props {
    title: string,
    features: Array<string>,
    link: string,
}

const PricingBox: React.FC<Props> = ({ title, features, link }) => {
    return (
        <div className={css(styles.container)}>
            <h2 className={css(styles.head)}>{title}</h2>
            <li className={css(styles.list)}>
                {
                    features.map(feature => (
                        <ul
                            className={css(styles.listElement)}
                            key={feature}
                        >{feature}</ul>
                    ))
                }
            </li>
            <Link
                to={link}
                className={`btn btn-primary ${css(styles.button)}`}
            >Get started</Link>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 362,
        backgroundColor: whitestWhite,
        borderRadius: 5,
        padding: '21px 13px 30px',
        display: 'flex',
        flexDirection: 'column',
    },
    head: {
        marginBottom: 20,
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: '0 0 10px 0',
        textAlign: 'left',
    },
    listElement: {
        padding: 10,
        margin: 0,
        borderTop: `1px solid ${lightGray}`,
    },
    button: {
        marginTop: 'auto',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        width: 200,
        alignSelf: 'center',
    },
})


export default PricingBox;