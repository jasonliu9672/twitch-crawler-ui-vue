import axios from 'axios'
import store from '@/store/index.js'
const service = axios.create({
    baseURL: 'http://140.112.42.160:22222',
    timeout: 50000,
    withCredentials: true
})

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
             service.defaults.headers.common['Authorization'] = store.getters.token;
        }
        return config
    },
    error => {
        console.log(error)
        return new Promise(function (resolve, reject) {
            if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
                store.dispatch('user/logout');
                resolve();
            }
            reject(error);
        })
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data

        // if (res.code !== 20000) {
        //     return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        return res
        // }
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export const deleteAuthHeader = function () {
    delete service.defaults.headers.common['Authorization']
}
export default service