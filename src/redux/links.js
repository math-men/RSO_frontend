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

export function transformLink(link) {
    return {
        id: link.shortenedUrl,
        shortenedUrl: `${process.env.REACT_APP_HOSTNAME}/${link.shortenedUrl}`,
        url: link.url,
        expirationDate: link.expirationDate,
        clicks: link.clicks,
    };
}

export function fetchLinks() {
    return async dispatch => {
        const resp = await api.get('/api/link');
        await dispatch(setLinks(resp.data.map(transformLink)));
    };
}

export function createLink(data) {
    return async dispatch => {
        const resp = await api.post(
            '/api/link',
            data,
        );
        const link = transformLink(resp.data);
        await dispatch(appendLink(link));
        return link;
    };
}
