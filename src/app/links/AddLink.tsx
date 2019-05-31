import React from 'react';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import { Redirect, match as matchType } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { formStyles } from '../../assets/styles';
import { createLink as createLinkAction } from '../../redux/links';

import ButtonLoader from '../../baseUI/ButtonLoader';


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

    onSubmit = async (data: any) => {
        const { createLink } = this.props;
        const link = await createLink(data);
        if (link) {
            this.setState({ redirectId: link.id });
        }
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
                    {({ isSubmitting }) => (
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
                                <ErrorMessage name="url">
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

const mapDispatchToProps = { createLink: createLinkAction };

export default connect(null, mapDispatchToProps)(AddLink);
