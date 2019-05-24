import React from 'react';
import { match as matchType } from 'react-router-dom';


interface Props {
    match: matchType,
}

const PaymentDashboard: React.FC<Props> = ({ match }) => (
    <h1>{match.url}</h1>
);

export default PaymentDashboard;
