import Cookies from 'js-cookie'
import { userLogin } from "@/api/user.js";
const state = {
    status: true,
    state: {
        status: '',
        token: Cookies.get('token') || '',
    }
}
const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, { token }) {
        state.status = 'success'
        state.token = token
    },
    auth_fail(state) {
        state.status = 'fail'
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
    },
}

const actions = {
    login({ commit }, user) {
        return new Promise((reslove, reject) => {
            commit('auth_request')
            userLogin(user.username, user.password)
                .then(res => {
                    const token = res.data.token;
                    if (token) {
                        Cookies.set('token', token)
                        // axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', { token });
                    }
                    else {
                        commit('auth_fail');
                    }
                    reslove(res);
                })
                .catch(err => {
                    commit('auth_error');
                    Cookies.remove('token');
                    reject(err);
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('logout')
            Cookies.remove('token');
            // delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}