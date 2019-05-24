import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { match as matchType } from 'react-router-dom';

import InvoiceDataForm from './InvoiceDataForm';
import ChangePasswordForm from './ChangePasswordForm';


interface Props {
    match: matchType,
}


const AccountDashboard: React.FC<Props> = () => (
    <div className={css(styles.container)}>
        <InvoiceDataForm />
        <ChangePasswordForm />
    </div>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default AccountDashboard;
