import api from '../api';

const SET_LINKS_LIST = 'SET_LINKS_LIST';
const APPEND_LINK = 'APPEND_LINK';

export default function reducer(state = [], action) {
    switch (action.type) {
        case SET_LINKS_LIST:
            return [...action.payload];
        case APPEND_LINK:
            return [action.payload, ...state];
        default:
            return state;
    }
}

function setLinks(links) {
    return {
        type: SET_LINKS_LIST,
        payload: links,
    };
}

function appendLink(link) {
    return {
        type: APPEND_LINK,
        payload: link,
    };
}

export function fetchLinks() {
    return async dispatch => {
        const resp = await api.get('/api/link');
        await dispatch(setLinks(resp.data));
    };
}

export function createLink(data) {
    return async dispatch => {
        const resp = await api.post(
            '/api/link',
            data,
        );
        await dispatch(appendLink(resp.data));
        return resp.data;
    };
}
