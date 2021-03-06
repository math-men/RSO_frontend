import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

import AppNavbar from './AppNavbar';
import NotFound from '../NotFound';
import AppSidebar from './AppSidebar';
import ProfileDashboard from './profile/ProfileDashboard';
import LinksDashboard from './links/LinksDashboard';


interface Props {
    token: string | null,
}

const AppPage: React.FC<Props> = ({ token }) => {
    if (token === null) {
        return (<Redirect to="/login" />);
    }
    return (
        <Route render={({ match }) => (
            <div
                className={css(styles.container)}
            >
                <ToastContainer
                    hideProgressBar
                    newestOnTop
                    pauseOnHover={false}
                    pauseOnFocusLoss={false}
                    closeButton={false}
                />
                <AppNavbar
                    match={match}
                />
                <AppSidebar
                    match={match}
                />
                <div className={css(styles.app)}>
                    <Switch>
                        <Route
                            path={match.url}
                            exact
                            render={() => (<Redirect to={`${match.url}/links`} />)}
                        />
                        <Route
                            path={`${match.url}/profile`}
                            component={ProfileDashboard}
                        />
                        <Route
                            path={`${match.url}/links`}
                            component={LinksDashboard}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '[start] 60px [app] auto [end]',
        gridTemplateColumns: '[start] 300px [app] auto [end]',
    },
    app: {
        gridRowStart: 'app',
        gridRowEnd: 'end',
        gridColumnStart: 'app',
        gridColumnEnd: 'end',
    },
});

const mapStateToProps = (state: { auth: { token: string }; }) => ({ token: state.auth.token });

export default connect(mapStateToProps)(AppPage);
