import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { match as matchType } from 'react-router-dom';

import api from '../../api';

import { leadingBlue, darkGray } from '../../assets/colors';

interface Link {
    id: string,
    url: string,
    shortened_url: string,
    expiration_date: string,
    clicks: Number,
}

interface State {
    link?: Link,
}

interface Props {
    match: matchType<{id: string}>,
}

export default class LinkDetails extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { link: undefined };

        const { match: { params: { id } } } = props;
        this.getLink(id);
    }

    componentWillReceiveProps(newProps: Props) {
        const { match: { params: { id } } } = newProps;
        this.setState({ link: undefined });
        this.getLink(id);
    }

    getLink = async (id: string) => {
        const response = await api.get(`/api/link/${id}`);
        this.setState({ link: response.data });
    }

    copyText = async () => {
        const { link } = this.state;
        if (link) {
            await navigator.clipboard.writeText(link.shortened_url);
        }
    };

    render() {
        const { link } = this.state;
        if (!link) {
            return (
                <div className={`lds-ring ${css(styles.loader)}`}>
                    <div className={css(styles.loaderElement)} />
                    <div className={css(styles.loaderElement)} />
                    <div className={css(styles.loaderElement)} />
                    <div className={css(styles.loaderElement)} />
                </div>
            );
        }
        return (
            <div className={css(styles.container)}>
                <span className={css(styles.linkName)}>
                    {link.shortened_url}
                    <button
                        className={`btn btn-outline-primary ${css(styles.copyButton)}`}
                        onClick={this.copyText}
                        type="button"
                    >
                        Copy
                    </button>
                </span>
                <span className={css(styles.originalLink)}>
                    {link.url}
                </span>
                <span className={css(styles.date)}>
                    Expiration date:
                    <span className={css(styles.dateValue)}>{link.expiration_date}</span>
                </span>
                <div className={css(styles.clicksContainer)}>
                    <span className={css(styles.clicksNumber)}>{link.clicks}</span>
                    <span className={css(styles.clicksLabel)}>Total clicks</span>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        margin: 'auto',
        height: '100vh',
    },
    loaderElement: {
        borderColor: `${leadingBlue} transparent transparent transparent`,
        width: 100,
        height: 100,
        borderWidth: 12,
    },
    container: {
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 30,
        paddingBottom: 20,
        textAlign: 'left',
    },
    linkName: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'LatoWebHeavy',
        fontSize: 34,
    },
    copyButton: {
        fontSize: 10,
        padding: '3px 6px',
        marginLeft: 15,
    },
    originalLink: {
        display: 'block',
        color: darkGray,
        fontSize: 16,
    },
    date: {
        display: 'block',
        marginTop: 10,
    },
    dateValue: {
        marginLeft: 4,
        color: leadingBlue,
        fontFamily: 'LatoWebHeavy',
    },
    clicksContainer: {
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
    },
    clicksNumber: {
        display: 'inline-block',
        fontSize: 48,
        fontFamily: 'LatoWebHeavy',
    },
    clicksLabel: {
        display: 'inline-block',
        fontSize: 19,
        width: 64,
        textTransform: 'uppercase',
        marginLeft: 4,
    },
});
