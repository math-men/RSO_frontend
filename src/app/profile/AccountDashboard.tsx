import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { match } from 'react-router-dom';

import InvoiceDataForm from './InvoiceDataForm';
import ChangePasswordForm from './ChangePasswordForm';


interface Props {
    match: match,
};


const AccountDashboard: React.FC<Props> = ({ match }) => {
    return (
        <div className={css(styles.container)}>
            <InvoiceDataForm/>
            <ChangePasswordForm/>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default AccountDashboard;