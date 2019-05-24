import { StyleSheet } from 'aphrodite';

// eslint-disable-next-line import/prefer-default-export
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
    formRow: { width: '100%' },
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
    },
});
