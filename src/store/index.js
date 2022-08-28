import { createStore } from "vuex";
import { auth } from "./authmodule.js";
const store = createStore({
    modules: {
        auth,

    },
});
export default store;
