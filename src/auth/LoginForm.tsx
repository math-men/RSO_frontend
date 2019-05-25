import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { AccountCircle, VpnKey } from '@material-ui/icons';

import { leadingBlue, darkGray, errorRed } from '../assets/colors';
import api from '../api';


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

export default class LoginForm extends React.Component {
    onSubmit = async (data: Object, { setErrors }: { setErrors: Function }) => {
        try {
            const response = await api.post(
                '/api/user/token',
                data,
            );
            console.log(response);
        } catch (error) {
            setErrors({ password: error.response.data.message });
        }
    }

    render() {
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
                            <ErrorMessage name="username">
                                {msg => <span className={css(styles.error)}>{msg}</span>}
                            </ErrorMessage>
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
                            <ErrorMessage name="password">
                                {msg => <span className={css(styles.error)}>{msg}</span>}
                            </ErrorMessage>
                        </div>
                        <button
                            className={`btn btn-primary ${css(styles.submit)}`}
                            type="submit"
                        >
                            Log in
                        </button>
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

const styles = StyleSheet.create({
    head: {
        textTransform: 'uppercase',
        borderBottom: `1px solid ${leadingBlue}`,
        padding: '40px 33px 10px',
        fontSize: 30,
    },
    form: {
        padding: '30px 38px',
        width: 400,
    },
    row: { marginBottom: 30 },
    input: { padding: 23 },
    formFootnote: {
        color: darkGray,
        fontSize: 12,
        textAlign: 'left',
        marginTop: 3,
    },
    submit: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        width: 200,
    },
    buttonFootnote: {
        color: darkGray,
        fontSize: 12,
        marginTop: 3,
    },
    error: {
        color: errorRed,
        display: 'block',
        textAlign: 'left',
    },
});
