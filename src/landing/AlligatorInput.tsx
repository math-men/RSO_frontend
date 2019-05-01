import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { leadingBlue, whitestWhite } from '../styles/colors';


export default class AlligatorInput extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input
                    type="text"
                    className={`form-control ${css(styles.input)}`}
                    placeholder="Enter link to shorten"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                    <button
                        className={`btn ${css(styles.btn)}`}
                        type="button"
                    >Shorten</button>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: leadingBlue,
        color: whitestWhite,
    },
    input: {
        padding: 25,
    }
})