//import axios from "axios";
//import { scroller } from "vue-scrollto/src/scrollTo";

const actions = {
    logout() {
        localStorage.removeItem('user');
    },

    logged_user({ commit }) {
        let user = localStorage.getItem('user');
        let data = JSON.parse(user);
        commit('setUser', data);
    },
};

export default actions;
