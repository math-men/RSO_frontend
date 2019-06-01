import React from 'react';
import { connect, getIn, FormikContext } from 'formik';

interface Props {
    className?: string,
    name: string,
}

const ErrorMessage: React.FC<Props & { formik: FormikContext<any> }> = props => {
    const { formik, name, className } = props;
    const error = getIn(formik.errors, name);
    return error ? (
        <span
            className={className}
        >
            {error}
        </span>
    ) : null;
};

export default connect<Props, Props & { formik: FormikContext<any> }>(ErrorMessage);
