import axios from 'axios';
import config from "../config/config.json"
import { getLocalStorage, removeLocalStorage } from '../utils/localStorage';

const customAxios = axios.create({
    baseURL: config.SERVER,
});
customAxios.interceptors.request.use((config) => {
    if (!config.headers.authorization && getLocalStorage("token")) {
        config.headers.authorization = `Bearer ${getLocalStorage("token")}`;
    }
    return config;
}, (error) => error);

customAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.data.statusCode === 401) {
            removeLocalStorage('token');
            alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
            window.open('/signin', '_self');
        }
        return Promise.reject(error);
    }
);
export default customAxios;