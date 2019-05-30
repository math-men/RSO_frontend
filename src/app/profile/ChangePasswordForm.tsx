import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { formStyles } from '../../assets/styles';

import ButtonLoader from '../../baseUI/ButtonLoader';


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
        setTimeout(() => setSubmitting(false), 5000);
        console.log(data);
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
                    {({ isSubmitting }) => (
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
                                <ErrorMessage name="old">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
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
                                <ErrorMessage name="new">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
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
                                <ErrorMessage name="repeat">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary ${css(formStyles.submit)}`}
                            >
                                {
                                    !isSubmitting ? <span>Change</span> : (
                                        <ButtonLoader />
                                    )
                                }
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}
