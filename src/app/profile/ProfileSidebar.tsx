import React from 'react';
import { css } from 'aphrodite';
import { NavLink, match as matchType } from 'react-router-dom';

import { sidebarStyles as styles } from '../../assets/styles';


interface Props {
    match: matchType,
}

const ProfileSidebar: React.FC<Props> = ({ match }) => (
    <div>
        <h2 className={css(styles.header)}>Profile</h2>
        <ul className={css(styles.list)}>
            <NavLink
                to={`${match.url}/account`}
                className={css(styles.link)}
                activeClassName={css(styles.linkActive)}
            >
                <li>
                    Account data
                </li>
            </NavLink>
            {/* <NavLink
                to={`${match.url}/payment`}
                className={css(styles.link)}
                activeClassName={css(styles.linkActive)}
            >
                <li>
                    Payment
                </li>
            </NavLink> */}
        </ul>
    </div>
);

export default ProfileSidebar;
