import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { AccountCircle, AlternateEmail, VpnKey } from '@material-ui/icons';

import { authFormStyles as styles } from '../assets/styles';
import api from '../api';

import BackendError from '../baseUI/BackendError';
import SubmitButton from '../baseUI/SubmitButton';


const initialValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
};

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('This field is required'),
    email: Yup.string()
        .required('This field is required')
        .email('Value must be correct email')
        .trim(),
    password: Yup.string()
        .required('This field is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            'Password should be 6 or more characters, must contain at least '
            + 'one uppercase letter, one lowercase letter and one number',
        ),
    repeatPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
});


interface State {
    redirect: boolean,
}

export default class RegisterForm extends React.Component<{}, State> {
    state = { redirect: false }

    onSubmit = async (
        data: any,
        { setErrors, setSubmitting }: { setErrors: Function, setSubmitting: Function },
    ) => {
        const { username, email, password } = data;
        try {
            await api.post(
                '/api/user',
                {
                    username,
                    email,
                    password,
                },
            );
            this.setState({ redirect: true });
        } catch (error) {
            if (error.response.data.message) {
                setErrors({ backendError: error.response.data.message });
            } else {
                setErrors({ backendError: 'Undefined error' });
            }
        }
        setSubmitting(false);
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return (<Redirect to="/login" />);
        }
        return (
            <div>
                <h1 className={css(styles.head)}>Create free account</h1>
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
                                    <span className="input-group-text"><AlternateEmail /></span>
                                </div>
                                <Field
                                    type="email"
                                    className={`form-control ${css(styles.input)}`}
                                    placeholder="Email"
                                    name="email"
                                />
                            </div>
                            <ErrorMessage
                                name="email"
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
                        </div>
                        <div className={css(styles.row)}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><VpnKey /></span>
                                </div>
                                <Field
                                    type="password"
                                    className={`form-control ${css(styles.input)}`}
                                    placeholder="Repeat password"
                                    name="repeatPassword"
                                />
                            </div>
                            <ErrorMessage
                                name="repeatPassword"
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
                            Create account
                        </SubmitButton>
                        <p className={css(styles.buttonFootnote)}>
                            Already have an account?
                            {' '}
                            <Link to="/login">Sign in</Link>
                        </p>
                    </Form>
                </Formik>
            </div>
        );
    }
}
