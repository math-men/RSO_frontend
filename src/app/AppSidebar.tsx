import React from 'react';
import { css } from 'aphrodite';
import { match as matchType, Route } from 'react-router-dom';

import ProfileSidebar from './profile/ProfileSidebar';
import LinksSidebar from './links/LinksSidebar';

import { sidebarStyles as styles } from '../assets/styles';


interface Props {
    match: matchType,
}


const AppSidebar: React.FC<Props> = ({ match }) => (
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

export default AppSidebar;
