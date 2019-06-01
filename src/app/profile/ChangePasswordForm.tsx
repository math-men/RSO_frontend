import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { formStyles } from '../../assets/styles';

import BackendError from '../../baseUI/BackendError';
import SubmitButton from '../../baseUI/SubmitButton';


const validationSchema = Yup.object().shape({
    old: Yup.string()
        .required('This field is required'),
    new: Yup.string()
        .required('This field is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            'Password should be 6 or more characters, must contain at least '
            + 'one uppercase letter, one lowercase letter and one number',
        ),
    repeat: Yup.string()
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
        data: Object,
        { setErrors, setSubmitting }: { setErrors: Function, setSubmitting: Function },
    ) => {
        try {
            await new Promise(r => setTimeout(r, 5000));
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
                                    name="old"
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
                                    name="new"
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
                                name="repeat"
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
