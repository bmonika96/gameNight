import AuthService from '../services/authService';
const user = JSON.parse(localStorage.getItem('user'));
const userData = JSON.parse(localStorage.getItem('userData'));
const initialState = user
    ? { status: { loggedIn: true }, user, userData }
    : { status: { loggedIn: false }, user: null };
export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                userResp => {

                    commit('loginSuccess', {"response":userResp, "data": user});
                    return Promise.resolve(userResp);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    getters:{
        getUser(state) {
            return state.userData
        }
    },
    mutations: {
        loginSuccess(state, payload) {

            state.status.loggedIn = true;
            state.user = payload.response;
            state.userData = payload.data;

        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.userData = null
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};
