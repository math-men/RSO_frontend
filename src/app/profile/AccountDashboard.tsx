import React from 'react';
import { match } from 'react-router-dom';

import InvoiceDataForm from './InvoiceDataForm';


interface Props {
    match: match,
};


const AccountDashboard: React.FC<Props> = ({ match }) => {
    return (
        <div>
            <InvoiceDataForm/>
        </div>
    );
};

export default AccountDashboard;