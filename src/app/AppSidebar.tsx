import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { match, Route } from 'react-router-dom';

import ProfileSidebar from './profile/ProfileSidebar';
import LinksSidebar from './links/LinksSidebar';

import { writerBlack, whitestWhite, leadingBlue, transparentize } from '../assets/colors';


interface Props {
    match: match,
}


const AppSidebar: React.FC<Props> = ({ match }) => {
    return (
        <div className={css(styles.container)}>
            <Route
                path={`${match.url}/profile`}
                component={ProfileSidebar}
            />
            <Route
                path={`${match.url}/links`}
                component={LinksSidebar}
            />
        </div>
    );
};

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 300,
        backgroundColor: writerBlack,
        color: whitestWhite,
        padding: '35px 50px 10px',
        textAlign: 'left',
    },
    header: {
        fontFamily: 'LatoWebHeavy',
        fontSize: 24,
        color: leadingBlue,
        marginLeft: 0,
        marginBottom: 20,
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: '0 -50px',
    },
    link: {
        color: whitestWhite,
        fontFamily: 'LatoWebHeavy',
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px',
        width: '100%',
        height: 80,
        textDecoration: 'none',
        ':hover': {
            backgroundColor: transparentize(leadingBlue, 0.5),
        },
    },
    linkActive: {
        backgroundColor: leadingBlue,
        ':hover': {
            backgroundColor: leadingBlue,
        },
    },
});

export default AppSidebar;
