import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

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
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
            'Password should be 6 or more characters, must contain at least '
            + 'one uppercase letter, one lowercase letter and one number',
        ),
    repeatPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const initialValues = {
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
};

export default class ChangePasswordForm extends React.Component {
    onSubmit = async (
        data: any,
        { setSubmitting }: { setSubmitting: Function },
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
            toast.success('Password changed');
        } catch (error) {
            if (error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Uh-oh! Something went wrong. Please try again');
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
                                name="oldPassword"
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
                                name="newPassword"
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
                                    name="repeatPassword"
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
