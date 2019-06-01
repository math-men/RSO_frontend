import React from 'react';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { formStyles } from '../../assets/styles';
import { createLink as createLinkAction } from '../../redux/links';

import BackendError from '../../baseUI/BackendError';
import SubmitButton from '../../baseUI/SubmitButton';


const validationSchema = Yup.object().shape({
    url: Yup.string()
        .required('This field is required'),
});

const initialValues = { url: '' };

interface State {
    redirectId?: string,
}

interface Props {
    createLink: Function,
}

class AddLink extends React.Component<Props, State> {
    state = { redirectId: undefined };

    onSubmit = async (
        data: any,
        { setSubmitting }: { setSubmitting: Function },
    ) => {
        const { createLink } = this.props;
        try {
            const link = await createLink(data);
            if (link) {
                this.setState({ redirectId: link.id });
            }
            toast.success('New link created');
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
        const { redirectId } = this.state;
        if (redirectId) {
            return (<Redirect to={`/app/links/${redirectId}`} />);
        }
        return (
            <div className={css(formStyles.formWrapper)}>
                <h1 className={css(formStyles.header)}>Shorten link</h1>
                <Formik
                    onSubmit={this.onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    <Form className={css(formStyles.form)}>
                        <div className="form-group">
                            <label className={css(formStyles.formRow)}>
                                <span className={css(formStyles.label)}>URL</span>
                                <Field
                                    className={`form-control ${css(formStyles.input)}`}
                                    type="text"
                                    name="url"
                                />
                            </label>
                            <ErrorMessage
                                name="url"
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

const mapDispatchToProps = { createLink: createLinkAction };

export default connect(null, mapDispatchToProps)(AddLink);
