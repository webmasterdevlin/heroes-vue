// Single-file module
import * as types from "../types";
import axios from "axios";
import BaseUrl from "../../api-config";

const state = {
  villains: [],
  villain: {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  },
  isLoading: false,
  error: ""
};

const mutations = {
  [types.MUTATE_GET_VILLAINS](state, villains) {
    state.villains = villains;
  },

  [types.MUTATE_GET_VILLAIN](state, villain) {
    state.villain = villain;
  },

  [types.MUTATE_ADD_VILLAIN](state, villainData) {
    state.villains.unshift(villainData);
  },

  // Applicable if a component(s) of the current page is rendering the array of villains
  // This will update the villain properties inside the array of villains
  [types.MUTATE_UPDATE_VILLAIN](state, villain) {
    const index = state.villains.findIndex(v => v.id === villain.id);
    state.villains[index] = villain;
  },

  [types.MUTATE_REMOVE_VILLAIN](state, id) {
    state.villains = state.villains.filter(v => v.id !== id);
  },

  [types.MUTATE_ISLOADING_VILLAIN](state, toggle) {
    state.isLoading = toggle;
  },

  [types.MUTATE_ERROR_VILLAIN](state, errorMessage) {
    state.error = errorMessage;
    alert("Something happened: " + errorMessage);
  }
};

const actions = {
  [types.ACTION_GET_VILLAINS]({ commit }) {
    commit(types.MUTATE_ISLOADING_VILLAIN, true);
    return axios
      .get(BaseUrl.villains)
      .then(response => {
        commit(types.MUTATE_GET_VILLAINS, response.data);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR_VILLAIN, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_VILLAIN, false));
  },
  [types.ACTION_GET_VILLAIN]({ commit }, id) {
    commit(types.MUTATE_ISLOADING_VILLAIN, true);
    return axios
      .get(`${BaseUrl.villains}${id}`)
      .then(response => {
        commit(types.MUTATE_GET_VILLAIN, response.data);
        return Promise.resolve();
      })
      .finally(() => commit(types.MUTATE_ISLOADING_VILLAIN, false));
  },
  [types.ACTION_ADD_VILLAIN]({ commit }, villainData) {
    commit(types.MUTATE_ISLOADING_VILLAIN, true);
    return axios
      .post(BaseUrl.villains, villainData)
      .then(response => {
        commit(types.MUTATE_ADD_VILLAIN, response.data);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR_VILLAIN, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_VILLAIN, false));
  },
  [types.ACTION_UPDATE_VILLAIN]({ commit }, villain) {
    commit(types.MUTATE_ISLOADING_VILLAIN, true);
    return axios
      .put(`${BaseUrl.villains}${villain.id}`, villain)
      .then(response => {
        commit(types.MUTATE_UPDATE_VILLAIN, response.data);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR_VILLAIN, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_VILLAIN, false));
  },
  /*Optimistic UI update*/
  [types.ACTION_REMOVE_VILLAIN]({ commit, getters }, villain) {
    const previousVillains = getters.GETTERS_INIT_VILLAINS;
    commit(types.MUTATE_REMOVE_VILLAIN, villain.id);
    return axios
      .delete(`${BaseUrl.villains}${villain.id}`)
      .then(() => {
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_GET_VILLAINS, previousVillains);
        commit(types.MUTATE_ERROR_VILLAIN, message);
      });
  }
};

const getters = {
  [types.GETTERS_INIT_VILLAINS]: state => state.villains,
  [types.GETTERS_INIT_VILLAIN]: state => state.villain,
  [types.GETTERS_TOTAL_VILLAINS]: state => state.villains.length,
  [types.GETTERS_ISLOADING_VILLAIN]: state => state.isLoading,
  [types.GETTERS_ERROR_VILLAIN]: state => state.error
};

export default {
  state,
  mutations,
  actions,
  getters
};
