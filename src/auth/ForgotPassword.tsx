import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import { AlternateEmail } from '@material-ui/icons';

import { authFormStyles as styles } from '../assets/styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <h1 className={css(styles.head)}>Forgot password</h1>
                <form className={css(styles.form)}>
                    <div className={`input-group mb-3 ${css(styles.row)}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><AlternateEmail /></span>
                        </div>
                        <input type="text" className={`form-control ${css(styles.input)}`} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                    </div>

                    <button
                        className={`btn btn-primary ${css(styles.submit)}`}
                        type="submit"
                    >
                        Send
                    </button>
                    <p className={css(styles.buttonFootnote)}>
                        <Link to="/login">Log in</Link>
                        <span className={css(styles.separator)}>|</span>
                        <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        );
    }
}
