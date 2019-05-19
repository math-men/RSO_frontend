import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppNavbar from './AppNavbar';
import NotFound from '../NotFound';
import AppSidebar from './AppSidebar';
import ProfileDashboard from './profile/ProfileDashboard';
import LinksDashboard from './links/LinksDashboard';


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
                    <Switch>
                        <Route
                            path={match.url}
                            exact
                            render={() => (<Redirect to={`${match.url}/links`}/>)}
                        />
                        <Route
                            path={`${match.url}/profile`}
                            component={ProfileDashboard}
                        />
                        <Route
                            path={`${match.url}/links`}
                            component={LinksDashboard}
                        />
                        <Route component={NotFound}/>
                    </Switch>
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