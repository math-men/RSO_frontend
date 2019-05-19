import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link, match } from 'react-router-dom';


import alligator from '../assets/icons/alligator.svg';

interface Props {
    match: match,
}


const AppNavbar: React.FC<Props> = ({ match }) => {
    return (
        <div className={css(styles.container)}>
            <img
                src={alligator}
                className={css(styles.logo)}
                alt="alligator"
            />
            <div>
                <Link
                    to={`${match.url}/links`}
                    className={css(styles.link)}
                >Your links</Link>
                <Link
                    to={`${match.url}/profile`}
                    className={css(styles.link)}
                >Profile</Link>
                <Link
                    to="/logout"
                    className={`btn btn-primary ${css(styles.button)}`}
                >Log out</Link>
            </div>
        </div>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 100,
        paddingRight: 100,
        boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.16)',
    },
    logo: {
        width: 114,
        height: 60,
    },
    link: {
        padding: 10,
        textDecoration: 'none',
    },
    button: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default AppNavbar;