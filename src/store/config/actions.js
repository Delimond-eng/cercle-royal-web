import axios from "axios";
//import { scroller } from "vue-scrollto/src/scrollTo";

const actions = {
    logout() {
        localStorage.removeItem("user");
    },

    logged_user({ commit }) {
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);
        commit("setUser", data);
    },

    viewConfigData({ commit, state }) {
        try {
            axios
                .get(`${state.baseURL}/content/config`)
                .then((result) => {
                    commit("setMarchandCategories", result.data.config.marchand_categories);
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    },

    viewUserData({ commit, state }) {
        let user = localStorage.getItem("user");

        try {
            if (user !== null) {
                let data = JSON.parse(user);
                let formData = new FormData();
                formData.append("marchand_id", data.marchand_id);

                axios
                    .post(`${state.baseURL}/marchands/offres/voir`, formData)
                    .then((result) => {

                        commit("setOffers", result.data.offres);
                    })
                    .catch((err) => console.log(err));

                axios
                    .post(`${state.baseURL}/marchands/pointventes/voir`, formData)
                    .then((result) => {
                        commit("setShops", result.data.point_ventes);
                    })
                    .catch((err) => console.log(err));
            }
        } catch (err) {
            console.log(err);
        }
    },
};

export default actions;