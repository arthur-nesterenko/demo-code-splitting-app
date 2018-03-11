
import axios from 'axios';
import { stringify } from 'qs';
import {
    handleResponseErrors,
    handleResponseSuccess,
    handleRequestConfig,
} from './utils';

const api = axios.create({

    baseURL: 'https://api.nytimes.com/svc/books/v3',
    params: {
        'api-key': "2daa0b81f3fb47f493d725ae30be9ef8",
    },
})

api.interceptors.response.use(handleResponseSuccess, handleResponseErrors);
api.interceptors.request.use(handleRequestConfig, Promise.reject);



export const request = (url, params = {}, data = {}, method = 'get', ...rest) =>
    api({
        method,
        url,
        data,
        params,
        paramsSerializer: params => stringify(params, { arrayFormat: 'bracket' }),
        ...rest,
    });



export default api;
