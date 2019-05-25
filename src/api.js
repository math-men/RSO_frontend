import axios from 'axios';
import store from './redux/store';

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

export default api;
