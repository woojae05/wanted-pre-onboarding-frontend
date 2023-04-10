import axios from 'axios';
import { getLocalStorage, removeLocalStorage } from '../utils/localStorage';

const customAxios = axios.create({
    baseURL: "https://www.pre-onboarding-selection-task.shop/",
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
        window.open('/signIn', '_self');
    }
);

customAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 400 && error?.response?.data.details === 'Token is missing') {
            removeLocalStorage('token');
            alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
            window.open('/signIn', '_self');
        }
        return Promise.reject(error);
    }
);
export default customAxios;