import * as types from "../../types";
import axios from "axios";
import BaseUrl from "../../../api-config";

const actions = {
  [types.ACTION_GET_HEROES]({ commit }) {
    commit(types.MUTATE_ISLOADING_HERO, true);
    return axios
      .get(BaseUrl.heroes)
      .then(response => {
        commit(types.MUTATE_GET_HEROES, response.data);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_HERO, false));
  },
  [types.ACTION_GET_HERO]({ commit }, id) {
    commit(types.MUTATE_ISLOADING_HERO, true);
    return axios
      .get(`${BaseUrl.heroes}${id}`)
      .then(response => {
        commit(types.MUTATE_GET_HERO, response.data);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR_HERO, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_HERO, false));
  },
  [types.ACTION_ADD_HERO]({ commit }, heroData) {
    commit(types.MUTATE_ISLOADING_HERO, true);
    return axios
      .post(BaseUrl.heroes, heroData)
      .then(response => {
        commit(types.MUTATE_ADD_HERO, response.data);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR_HERO, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_HERO, false));
  },
  [types.ACTION_UPDATE_HERO]({ commit }, hero) {
    commit(types.MUTATE_ISLOADING_HERO, true);
    return axios
      .put(`${BaseUrl.heroes}${hero.id}`, hero)
      .then(response => {
        commit(types.MUTATE_UPDATE_HERO, response.data);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR_HERO, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_HERO, false));
  },
  /*Pessimistic UI update*/
  [types.ACTION_REMOVE_HERO]({ commit }, hero) {
    commit(types.MUTATE_ISLOADING_HERO, true);
    return axios
      .delete(`${BaseUrl.heroes}${hero.id}`)
      .then(() => {
        commit(types.MUTATE_REMOVE_HERO, hero.id);
        return Promise.resolve();
      })
      .catch(({ message }) => {
        commit(types.MUTATE_ERROR_HERO, message);
      })
      .finally(() => commit(types.MUTATE_ISLOADING_HERO, false));
  }
};

export default actions;
