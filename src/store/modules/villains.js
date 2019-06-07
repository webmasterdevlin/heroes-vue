// Single-file module
import * as types from "@/store/types";
import axios from "axios";
import BaseUrl from "@/services/api-config";

const state = {
  villains: [],
  villain: {}
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
    const index = state.villains.findIndex(v => v.id === id);
    state.villains.splice(index, 1);
  }
};

const actions = {
  [types.ACTION_GET_VILLAINS]({ commit }) {
    return axios.get(BaseUrl.villains).then(response => {
      commit(types.MUTATE_GET_VILLAINS, response.data);
      return Promise.resolve();
    });
  },
  [types.ACTION_GET_VILLAIN]({ commit }, id) {
    return axios.get(`${BaseUrl.villains}${id}`).then(response => {
      commit(types.MUTATE_GET_VILLAIN, response.data);
      return Promise.resolve();
    });
  },
  [types.ACTION_ADD_VILLAIN]({ commit }, villainData) {
    return axios.post(BaseUrl.villains, villainData).then(response => {
      commit(types.MUTATE_ADD_VILLAIN, response.data);
      return Promise.resolve();
    });
  },
  [types.ACTION_UPDATE_VILLAIN]({ commit }, villain) {
    return axios
      .put(`${BaseUrl.villains}${villain.id}`, villain)
      .then(response => {
        commit(types.MUTATE_UPDATE_VILLAIN, response.data);
        return Promise.resolve();
      });
  },
  [types.ACTION_REMOVE_VILLAIN]({ commit }, villain) {
    return axios.delete(`${BaseUrl.villains}${villain.id}`).then(() => {
      commit(types.MUTATE_REMOVE_VILLAIN, villain.id);
      return Promise.resolve();
    });
  }
};

const getters = {
  [types.GETTERS_INIT_VILLAINS]: state => state.villains,
  [types.GETTERS_INIT_VILLAIN]: state => state.villain
};

export default {
  state,
  mutations,
  actions,
  getters
};
