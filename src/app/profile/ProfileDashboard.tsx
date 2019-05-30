import React from 'react';
import { Switch, Route, Redirect, match as matchType } from 'react-router-dom';

import AccountDashboard from './AccountDashboard';
import PaymentDashboard from './PaymentDashboard';
import NotFound from '../../NotFound';


interface Props {
    match: matchType,
}


const ProfileDashboard: React.FC<Props> = ({ match }) => (
    <Switch>
        <Route
            path={match.url}
            exact
            render={() => (<Redirect to={`${match.url}/account`} />)}
        />
        <Route
            path={`${match.url}/account`}
            component={AccountDashboard}
        />
        <Route
            path={`${match.url}/payment`}
            component={PaymentDashboard}
        />
        <Route
            component={NotFound}
        />
    </Switch>
);

export default ProfileDashboard;
