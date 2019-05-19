import React from 'react';
import { Switch, Route, match } from 'react-router-dom';

import AccountDashboard from './AccountDashboard';
import PaymentDashboard from './PaymentDashboard';
import NotFound from '../../NotFound';


interface Props {
    match: match,
};


const ProfileDashboard: React.FC<Props> = ({ match }) => {
    return (
        <Switch>
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
};

export default ProfileDashboard;