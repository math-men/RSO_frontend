import React from 'react';
import { css } from 'aphrodite';
import { NavLink, match } from 'react-router-dom';

import { styles } from '../AppSidebar';


interface Props {
    match: match
};

const ProfileSidebar: React.FC<Props> = ({ match }) => {
    return (
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
                <NavLink
                    to={`${match.url}/payment`}
                    className={css(styles.link)}
                    activeClassName={css(styles.linkActive)}
                >
                    <li>
                        Payment
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default ProfileSidebar;