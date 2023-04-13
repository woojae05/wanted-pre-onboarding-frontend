import axios from 'axios';
import config from "../config/config.json"
import { getLocalStorage, removeLocalStorage } from '../utils/localStorage';

const customAxios = axios.create({
    baseURL: config.SERVER,
});

customAxios.interceptors.request.use(
    (config: any) => {
        const accessToken = getLocalStorage('token');
        if (!accessToken) return config;
        config.headers = {
            'Content-type': 'application/json',
            authorization: `${accessToken}`,
        };
        return config;
    },
    (error) => {
        removeLocalStorage('token');
        alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
        window.open('/signin', '_self');
    }
);

customAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 400 && error?.response?.data.details === 'Token is missing') {
            removeLocalStorage('token');
            alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
            window.open('/signin', '_self');
        }
        return Promise.reject(error);
    }
);
export default customAxios;