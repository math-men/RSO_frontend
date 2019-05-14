import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import { AccountCircle, AlternateEmail, VpnKey } from '@material-ui/icons';

import { leadingBlue, darkGray } from '../assets/colors';


export default class RegisterForm extends React.Component {

    render() {
        return (
            <div>
                <h1 className={css(styles.head)}>Create free account</h1>
                <form className={css(styles.form)}>
                    <div className={`input-group mb-3 ${css(styles.row)}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><AccountCircle /></span>
                        </div>
                        <input type="text" className={`form-control ${css(styles.input)}`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className={`input-group mb-3 ${css(styles.row)}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><AlternateEmail /></span>
                        </div>
                        <input type="text" className={`form-control ${css(styles.input)}`} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                    </div>
                    <div className={`input-group mb-3 ${css(styles.row)}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><VpnKey /></span>
                        </div>
                        <input type="text" className={`form-control ${css(styles.input)}`} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>
                    <div className={`input-group mb-3 ${css(styles.row)}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><VpnKey /></span>
                        </div>
                        <input type="text" className={`form-control ${css(styles.input)}`} placeholder="Repeat password" aria-label="Repeat password" aria-describedby="basic-addon1" />
                        <p className={css(styles.formFootnote)}>
                            Password should be 6 or more characters, must contain at least one letter, number, and special character
                        </p>
                    </div>

                    <button className={`btn btn-primary ${css(styles.submit)}`}>Create account</button>
                    <p className={css(styles.buttonFootnote)}>
                            Already have an account? <Link to="/login">Sign in</Link>
                        </p>
                </form>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        textTransform: 'uppercase',
        borderBottom: `1px solid ${leadingBlue}`,
        padding: '40px 33px 10px',
        fontSize: 30,
    },
    form: {
        padding: '30px 38px',
        width: 400,
    },
    row: {
        marginBottom: 30,
    },
    input: {
        padding: 23,
    },
    formFootnote: {
        color: darkGray,
        fontSize: 12,
        textAlign: 'left',
        marginTop: 3,
    },
    submit: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        width: 200,
    },
    buttonFootnote: {
        color: darkGray,
        fontSize: 12,
        marginTop: 3,
    }
})