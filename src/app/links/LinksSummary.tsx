import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';


interface Props {
    links: Array<any>,
}

const LinksSummary: React.FC<Props> = ({ links }) => (
    <div className={css(styles.container)}>
        <span className={css(styles.head)}>
            {`${links.length} `}
            links total
        </span>
        <span className={css(styles.subtitle)}>
            Select element from sidebar to see details
        </span>
    </div>
);

const styles = StyleSheet.create({
    container: {
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 30,
        paddingBottom: 20,
    },
    head: {
        display: 'block',
        fontFamily: 'LatoWebHeavy',
        fontSize: 34,
    },
    subtitle: { display: 'block' },
});

const mapStateToProps = (state: { links: Array<any>; }) => ({ links: state.links });

export default connect(mapStateToProps)(LinksSummary);
