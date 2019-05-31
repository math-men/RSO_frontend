import React from 'react';
import { match as matchType, Switch, Route } from 'react-router-dom';

import LinkDetails from './LinkDetails';
import LinksSummary from './LinksSummary';
import AddLink from './AddLink';
import NotFound from '../../NotFound';


interface Props {
    match: matchType,
}

const LinksDashboard: React.FC<Props> = ({ match }) => (
    <Switch>
        <Route
            path={match.url}
            exact
            component={LinksSummary}
        />
        <Route
            path={`${match.url}/add`}
            component={AddLink}
        />
        <Route
            path={`${match.url}/:id`}
            component={LinkDetails}
        />
        <Route component={NotFound} />
    </Switch>
);

export default LinksDashboard;
