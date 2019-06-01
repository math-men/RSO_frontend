import axios from 'axios';
import store from './redux/store';
import { resetToken } from './redux/auth';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: 'json',
});

api.interceptors.request.use(
    config => {
        const { auth: { token } } = store.getState();
        const newConfig = { ...config };
        if (token) {
            newConfig.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        return newConfig;
    },
    error => Promise.reject(error),
);

api.interceptors.response.use(
    null,
    error => {
        if (error.response.status === 401) {
            store.dispatch(resetToken());
        }
        return Promise.reject(error);
    },
);

export default api;
