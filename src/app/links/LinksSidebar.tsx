import React from 'react';
import { css } from 'aphrodite';
import { NavLink, Link, match as matchType } from 'react-router-dom';
import { connect } from 'react-redux';

import { sidebarStyles as styles } from '../../assets/styles';

import { fetchLinks as fetchLinksAction } from '../../redux/links';


interface Props {
    match: matchType,
    links: Array<any>,
    fetchLinks: Function,
}

class LinksSidebar extends React.Component<Props> {
    componentWillMount() {
        const { fetchLinks } = this.props;
        fetchLinks();
    }

    render() {
        const { match, links } = this.props;
        return (
            <div>
                <h2 className={css(styles.header)}>
                    Links
                    <Link
                        className={`btn btn-outline-primary ${css(styles.headerButton)}`}
                        to={`${match.url}/add`}
                    >
                        Add
                    </Link>
                </h2>
                <ul className={css(styles.list)}>
                    {links.map(link => (
                        <NavLink
                            to={`${match.url}/${link.id}`}
                            className={css(styles.link)}
                            activeClassName={css(styles.linkActive)}
                            key={link.id}
                        >
                            <li className={css(styles.listItem)}>
                                <span className={css(styles.listItemHead)}>
                                    {link.shortenedUrl}
                                </span>
                                <span className={css(styles.listItemSubsection)}>{link.url}</span>
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: { links: Array<any>; }) => ({ links: state.links });
const mapDispatchToProps = { fetchLinks: fetchLinksAction };

export default connect(mapStateToProps, mapDispatchToProps)(LinksSidebar);
