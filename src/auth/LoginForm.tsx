import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { AccountCircle, VpnKey } from '@material-ui/icons';

import { authFormStyles as styles } from '../assets/styles';
import api from '../api';

import { setToken as setTokenAction } from '../redux/auth';

import BackendError from '../baseUI/BackendError';
import SubmitButton from '../baseUI/SubmitButton';


const initialValues = {
    username: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('This field is required'),
    password: Yup.string()
        .required('This field is required'),
});

interface Props {
    setToken: (token: string) => void,
    token: string | null,
}

class LoginForm extends React.Component<Props> {
    onSubmit = async (
        data: Object,
        { setErrors, setSubmitting }: { setErrors: Function, setSubmitting: Function },
    ) => {
        const { setToken } = this.props;
        try {
            const response = await api.post(
                '/api/user/token',
                data,
            );
            setToken(response.data.token);
        } catch (error) {
            if (error.response.data.message) {
                setErrors({ backendError: error.response.data.message });
            } else {
                setErrors({ backendError: 'Something went wrong! Please try again.' });
            }
        }
        setSubmitting(false);
    }

    render() {
        const { token } = this.props;
        if (token) {
            return (<Redirect to="/app" />);
        }
        return (
            <div>
                <h1 className={css(styles.head)}>Log in</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className={css(styles.form)}>
                        <div className={css(styles.row)}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><AccountCircle /></span>
                                </div>
                                <Field
                                    type="text"
                                    className={`form-control ${css(styles.input)}`}
                                    placeholder="Username"
                                    name="username"
                                />
                            </div>
                            <ErrorMessage
                                name="username"
                                className={css(styles.error)}
                                component="span"
                            />
                        </div>
                        <div className={css(styles.row)}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><VpnKey /></span>
                                </div>
                                <Field
                                    type="password"
                                    className={`form-control ${css(styles.input)}`}
                                    placeholder="Password"
                                    name="password"
                                />
                            </div>
                            <ErrorMessage
                                name="password"
                                className={css(styles.error)}
                                component="span"
                            />
                            <BackendError
                                name="backendError"
                                className={css(styles.error)}
                            />
                        </div>
                        <SubmitButton
                            className={`btn btn-primary ${css(styles.submit)}`}
                        >
                            Log in
                        </SubmitButton>
                        <p className={css(styles.buttonFootnote)}>
                            Don&apos;t have an account?
                            {' '}
                            <Link to="/register">Register</Link>
                            <br />
                            Forgot your password?
                            {' '}
                            <Link to="/forgot">Reset</Link>
                        </p>
                    </Form>
                </Formik>
            </div>
        );
    }
}

const mapStateToProps = (state: { auth: { token: string }; }) => ({ token: state.auth.token });
const mapDispatchToProps = { setToken: setTokenAction };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
