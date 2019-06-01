import React from 'react';
import { css } from 'aphrodite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { formStyles } from '../../assets/styles';

import BackendError from '../../baseUI/BackendError';
import SubmitButton from '../../baseUI/SubmitButton';


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
                <h1 className={css(formStyles.header)}>Invoice data</h1>
                <Formik
                    onSubmit={this.onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
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
                            <ErrorMessage
                                name="name"
                                className={css(formStyles.error)}
                                component="span"
                            />
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
                            <ErrorMessage
                                name="address"
                                className={css(formStyles.error)}
                                component="span"
                            />
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
                            <ErrorMessage
                                name="city"
                                className={css(formStyles.error)}
                                component="span"
                            />
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
                            <ErrorMessage
                                name="zip"
                                className={css(formStyles.error)}
                                component="span"
                            />
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
                            <ErrorMessage
                                name="phone"
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
                            Save
                        </SubmitButton>
                    </Form>
                </Formik>
            </div>
        );
    }
}
