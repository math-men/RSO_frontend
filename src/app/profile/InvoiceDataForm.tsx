import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { formStyles } from '../../assets/styles';

import ButtonLoader from '../../baseUI/ButtonLoader';


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('This field is required'),
    address: Yup.string()
        .required('This field is required'),
    city: Yup.string()
        .required('This field is required'),
    zip: Yup.string()
        .required('This field is required')
        .matches(/[0-9]{5}/g, 'Enter correct zip code'),
    phone: Yup.string()
        .required('This field is required')
        .matches(/[0-9]{9,10}/, 'Enter correct phone number'),
});

const initialValues = {
    name: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
};

export default class InvoiceDataForm extends React.Component {
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
                <h1 className={css(formStyles.header)}>Invoice data</h1>
                <Formik
                    onSubmit={this.onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting }) => (
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
                                <ErrorMessage name="name">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
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
                                <ErrorMessage name="address">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
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
                                <ErrorMessage name="city">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
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
                                <ErrorMessage name="zip">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
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
                                <ErrorMessage name="phone">
                                    {msg => <span className={css(formStyles.error)}>{msg}</span>}
                                </ErrorMessage>
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary ${css(formStyles.submit)}`}
                            >
                                {
                                    !isSubmitting ? <span>Save</span> : (
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
