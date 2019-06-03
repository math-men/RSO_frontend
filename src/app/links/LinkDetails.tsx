import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { match as matchType } from 'react-router-dom';

import api from '../../api';

import { leadingBlue, darkGray } from '../../assets/colors';
import { transformLink } from '../../redux/links';


interface Link {
    id: string,
    url: string,
    shortenedUrl: string,
    expirationDate?: string,
    clicks?: Number,
}

interface State {
    link?: Link,
}

interface Props {
    match: matchType<{ id: string }>,
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
        this.setState({ link: transformLink(response.data) });
    }

    copyText = async () => {
        const { link } = this.state;
        if (link) {
            await navigator.clipboard.writeText(link.shortenedUrl);
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
                    {link.shortenedUrl}
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
                {
                    link.expirationDate ? (
                        <span className={css(styles.date)}>
                            Expiration date:
                            <span className={css(styles.dateValue)}>{link.expirationDate}</span>
                        </span>
                    ) : null
                }
                {
                    link.clicks ? (
                        <div className={css(styles.clicksContainer)}>
                            <span className={css(styles.clicksNumber)}>{link.clicks}</span>
                            <span className={css(styles.clicksLabel)}>Total clicks</span>
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        position: 'fixed',
        top: 'calc(50vh - 110px)',
        marginLeft: 'auto',
        marginRight: 'auto',
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
