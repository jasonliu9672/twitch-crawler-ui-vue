import axios from 'axios'

const service = axios.create({
    baseURL: 'http://140.112.42.160:22222',
    timeout: 50000
})

service.interceptors.request.use(
    config => {

        //   if (store.getters.token) {
        //     // let each request carry token
        //     // ['X-Token'] is a custom headers key
        //     // please modify it according to the actual situation
        //     config.headers['X-Token'] = getToken()
        //   }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
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
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)
export default service