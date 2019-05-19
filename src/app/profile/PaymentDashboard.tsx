import React from 'react';
import { match } from 'react-router-dom';


interface Props {
    match: match,
};


const PaymentDashboard: React.FC<Props> = ({ match }) => {
    return (
        <h1>{match.url}</h1>
    );
};

export default PaymentDashboard;