import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { formStyles } from '../../assets/styles';
import api from '../../api';

import BackendError from '../../baseUI/BackendError';
import SubmitButton from '../../baseUI/SubmitButton';


const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('This field is required'),
    newPassword: Yup.string()
        .required('This field is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            'Password should be 6 or more characters, must contain at least '
            + 'one uppercase letter, one lowercase letter and one number',
        ),
    repeatPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('new')], 'Passwords must match'),
});

const initialValues = {
    old: '',
    new: '',
    repeat: '',
};

export default class ChangePasswordForm extends React.Component {
    onSubmit = async (
        data: any,
        { setErrors, setSubmitting }: { setErrors: Function, setSubmitting: Function },
    ) => {
        const { oldPassword, newPassword } = data;
        try {
            await api.post(
                '/api/user/password',
                {
                    oldPassword,
                    newPassword,
                },
            );
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
        return (
            <div className={css(formStyles.formWrapper)}>
                <h1 className={css(formStyles.header)}>Change password</h1>
                <Formik
                    onSubmit={this.onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    <Form className={css(formStyles.form)}>
                        <div className="form-group">
                            <label className={css(formStyles.formRow)}>
                                <span className={css(formStyles.label)}>Old password</span>
                                <Field
                                    className={`form-control ${css(formStyles.input)}`}
                                    type="password"
                                    name="oldPassword"
                                />
                            </label>
                            <ErrorMessage
                                name="old"
                                className={css(formStyles.error)}
                                component="span"
                            />
                        </div>
                        <div className="form-group">
                            <label className={css(formStyles.formRow)}>
                                <span className={css(formStyles.label)}>New password</span>
                                <Field
                                    className={`form-control ${css(formStyles.input)}`}
                                    type="password"
                                    name="newPassword"
                                />
                            </label>
                            <ErrorMessage
                                name="new"
                                className={css(formStyles.error)}
                                component="span"
                            />
                        </div>
                        <div className="form-group">
                            <label className={css(formStyles.formRow)}>
                                <span className={css(formStyles.label)}>Repeat password</span>
                                <Field
                                    className={`form-control ${css(formStyles.input)}`}
                                    type="password"
                                    name="repeat"
                                />
                            </label>
                            <ErrorMessage
                                name="repeatPassword"
                                className={css(formStyles.error)}
                                component="span"
                            />
                            <BackendError
                                name="backendError"
                                className={css(formStyles.error)}
                            />
                        </div>
                        <SubmitButton
                            className={`btn btn-primary ${css(formStyles.submit)}`}
                        >
                            Change
                        </SubmitButton>
                    </Form>
                </Formik>
            </div>
        );
    }
}
