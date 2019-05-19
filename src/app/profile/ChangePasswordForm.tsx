import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field } from 'formik';

import { formStyles } from '../../assets/styles';


const initialValues = {
    old: '',
    new: '',
    repeat: '',
};

export default class ChangePasswordForm extends React.Component {

    submit = () => { }

    render() {
        return (
            <div className={css(formStyles.formWrapper)}>
                <h1 className={css(formStyles.header)}>Change password</h1>
                <Formik
                    onSubmit={this.submit}
                    initialValues={initialValues}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                        <Form className={css(formStyles.form)}>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>Old password</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="old"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>New password</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="new"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>Repeat password</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="repeat"
                                    />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary ${css(formStyles.submit)}`}
                            >Change</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
};
