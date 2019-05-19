import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppNavbar from './AppNavbar';
import AppSidebar from './AppSidebar';

const AppPage: React.FC = () => {
    return (
        <Route render={({ match }) => (
            <div
                className={css(styles.container)}
            >
                <AppNavbar
                    match={match}
                />
                <div
                    className={css(styles.app)}
                >
                    <AppSidebar
                        match={match}
                    />
                </div>
            </div>
        )}/>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    app: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
});

export default AppPage;
