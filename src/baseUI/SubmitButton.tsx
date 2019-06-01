import React from 'react';
import { connect, FormikContext } from 'formik';

import ButtonLoader from './ButtonLoader';

interface Props {
    className?: string,
    children: React.ReactNode,
}

const ErrorMessage: React.FC<Props & { formik: FormikContext<any> }> = props => {
    const { formik, children, className } = props;
    return (
        <button
            className={className}
            type="submit"
            disabled={formik.isSubmitting}
        >
            {
                !formik.isSubmitting ? children : (
                    <ButtonLoader />
                )
            }
        </button>
    );
};

export default connect<Props, Props & { formik: FormikContext<any> }>(ErrorMessage);
