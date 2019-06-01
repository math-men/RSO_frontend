import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetToken as resetTokenAction } from '../redux/auth'; 

interface Props {
    resetToken: Function,
}

const Logout: React.FC<Props> = ({ resetToken }) => {
    resetToken();
    return (<Redirect to="/login" />);
};

const mapDispatchToProps = { resetToken: resetTokenAction };

export default connect(null, mapDispatchToProps)(Logout);
