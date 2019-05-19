import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { whitestWhite } from '../assets/colors';
import alligator from '../assets/icons/alligator.svg'

interface Props {
    style?: Object,
}

interface State {
    compressed: boolean,
}

export default class AlligatorNavbar extends React.Component<Props> {
    state = {
        compressed: false,
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { compressed } = this.state;
        if (window.scrollY > 60 && !compressed) {
            this.setState({ compressed: true })
        } else if (window.scrollY < 60 && compressed) {
            this.setState({ compressed: false })
        }
    }

    render() {
        const { style } = this.props;
        const { compressed } = this.state;
        return (
            <div>
                <div className={css(styles.placeholder)}></div>
                <div className={css(
                    styles.nav,
                    style,
                    compressed && styles.navCompressed,
                )}>
                    <div>
                        <NavLink
                            to="/"
                        >
                            <img
                                src={alligator}
                                className={css(
                                    styles.logo,
                                    compressed && styles.logoCompressed,
                                )}
                                alt="logo"
                            />
                        </NavLink>
                        <NavLink
                            className={css(styles.link)}
                            to="/#try"
                            smooth
                        >Try it now!</NavLink>
                        <NavLink
                            className={css(styles.link)}
                            to="/#features"
                            smooth
                        >Features</NavLink>
                        <NavLink
                            className={css(styles.link)}
                            to="/#pricing"
                            smooth
                        >Pricing</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={css(styles.link)}
                            to="/login"
                            smooth
                        >Login</NavLink>
                        <NavLink
                            className={css(styles.link)}
                            to="/register"
                            smooth
                        >Sign up</NavLink>
                        <NavLink
                            className={`btn btn-primary ${css(styles.button)}`}
                            to=""
                            smooth
                        >Get Enterprise</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

const navHeight = 100
const styles = StyleSheet.create({
    placeholder: {
        height: navHeight,
    },
    navCompressed: {
        height: 60,
    },
    nav: {
        transition: 'height 0.3s',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: navHeight,
        zIndex: 10,
        width: '100%',
        backgroundColor: whitestWhite,
        top: 0,
        boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.16)',
    },
    logo: {
        transition: 'all 0.3s',
        width: 190,
        height: 100,
    },
    logoCompressed: {
        width: 114,
        height: 60,
    },
    link: {
        padding: 10,
        textDecoration: 'none',
    },
    button: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: 20,
    },
})
