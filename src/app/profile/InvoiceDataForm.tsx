import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field } from 'formik';

import { formStyles } from '../../assets/styles';


const initialValues = {
    name: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
};

export default class InvoiceDataForm extends React.Component {

    submit = () => { }

    render() {
        return (
            <div className={css(formStyles.formWrapper)}>
                <h1 className={css(formStyles.header)}>Invoice data</h1>
                <Formik
                    onSubmit={this.submit}
                    initialValues={initialValues}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                        <Form className={css(formStyles.form)}>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>Name</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="name"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>Address</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="address"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>City</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="city"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>Zip code</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="zip"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className={css(formStyles.formRow)}>
                                    <span className={css(formStyles.label)}>Phone</span>
                                    <Field
                                        className={`form-control ${css(formStyles.input)}`}
                                        type="text"
                                        name="phone"
                                    />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary ${css(formStyles.submit)}`}
                            >Save</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
};
