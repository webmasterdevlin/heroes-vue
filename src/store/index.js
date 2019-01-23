import Vue from "vue";
import Vuex from "vuex";

import villains from "./modules/villains";
import heroes from "./modules/heroes";
// import mutations from "./modules/heroes/mutations";
// import actions from "./modules/heroes/actions";
// import getters from "./modules/heroes/getters";
// import state from "./modules/heroes/state";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    villains,
    heroes
  }
});
