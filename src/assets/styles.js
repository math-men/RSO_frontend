import { StyleSheet } from 'aphrodite';
import { writerBlack, whitestWhite, leadingBlue, darkGray, errorRed, transparentize } from './colors';

export const formStyles = StyleSheet.create({
    formWrapper: {
        width: 380,
        marginLeft: 80,
        marginRight: 80,
        marginTop: 30,
        marginBottom: 20,
    },
    header: {
        textAlign: 'left',
        marginBottom: 25,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formRow: {
        width: '100%',
        margin: 0,
    },
    label: {
        display: 'block',
        textTransform: 'uppercase',
        textAlign: 'left',
        fontFamily: 'LatoWebHeavy',
        fontSize: 14,
    },
    input: {},
    submit: {
        alignSelf: 'flex-end',
        fontFamily: 'LatoWebHeavy',
        textTransform: 'uppercase',
        paddingLeft: 20,
        paddingRight: 20,
        minWidth: 106,
        height: 38,
    },
    error: {
        color: errorRed,
        display: 'block',
        textAlign: 'left',
        fontSize: 12,
    },
});


export const sidebarStyles = StyleSheet.create({
    container: {
        backgroundColor: writerBlack,
        color: whitestWhite,
        padding: '35px 50px 10px',
        textAlign: 'left',

        gridRowStart: 'app',
        gridRowEnd: 'end',
        gridColumnStart: 'start',
        gridColumnEnd: 'app',
    },
    header: {
        fontFamily: 'LatoWebHeavy',
        fontSize: 24,
        color: leadingBlue,
        marginLeft: 0,
        marginBottom: 20,
    },
    headerButton: {
        fontSize: 10,
        padding: '3px 6px',
        marginLeft: 15,
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: '0 -50px',
    },
    link: {
        color: whitestWhite,
        fontFamily: 'LatoWebHeavy',
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px',
        width: '100%',
        height: 80,
        textDecoration: 'none',
        ':hover': { backgroundColor: transparentize(leadingBlue, 0.5) },
    },
    listItem: { width: '100%' },
    listItemHead: {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    listItemSubsection: {
        display: 'block',
        fontFamily: 'latoWeb',
        fontSize: 12,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    linkActive: {
        backgroundColor: leadingBlue,
        ':hover': { backgroundColor: leadingBlue },
    },
    stickyContainer: {
        position: 'sticky',
        top: 20,
    },
});

export const authFormStyles = StyleSheet.create({
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
    row: { marginBottom: 30 },
    input: { padding: 23 },
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
        height: 38,
    },
    buttonFootnote: {
        color: darkGray,
        fontSize: 12,
        marginTop: 3,
    },
    error: {
        color: errorRed,
        display: 'block',
        textAlign: 'left',
        fontSize: 12,
    },
    separator: {
        color: writerBlack,
        paddingLeft: 10,
        paddingRight: 10,
    },
    gdprNote: {
        color: darkGray,
        fontSize: 12,
        marginTop: 3,
        width: 322,
        textAlign: 'justify',
    },
});
