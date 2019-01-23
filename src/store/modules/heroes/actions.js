import * as types from "../../types";
import heroesService from "../../../services/heroes-services";

const actions = {
  [types.ACTION_GET_HEROES]({ commit }) {
    return new Promise(resolve => {
      heroesService
        .getHeroes()
        .then(data => {
          commit(types.MUTATE_GET_HEROES, data);
          resolve();
        })
        .catch(err => {
          alert("Something happened: " + err);
        });
    });
  },
  [types.ACTION_GET_HERO]({ commit }, id) {
    return new Promise(resolve => {
      heroesService
        .getHero(id)
        .then(data => {
          commit(types.MUTATE_GET_HERO, data);
          resolve();
        })
        .catch(err => {
          alert("Something happened: " + err);
        });
    });
  },
  [types.ACTION_ADD_HERO]({ commit }, heroData) {
    return new Promise(resolve => {
      heroesService
        .addHero(heroData)
        .then(data => {
          commit(types.MUTATE_ADD_HERO, data);
          resolve();
        })
        .catch(err => {
          alert("Something happened: " + err);
        });
    });
  },

  [types.ACTION_UPDATE_HERO]({ commit }, hero) {
    return new Promise(resolve => {
      heroesService
        .updateHero(hero)
        .then(data => {
          commit(types.MUTATE_UPDATE_HERO, data);
          resolve();
        })
        .catch(err => {
          alert("Something happened: " + err);
        });
    });
  },

  [types.ACTION_REMOVE_HERO]({ commit }, hero) {
    return new Promise(resolve => {
      heroesService
        .removeHero(hero)
        .then(() => {
          commit(types.MUTATE_REMOVE_HERO, hero.id);
          resolve();
        })
        .catch(err => {
          alert("Something happened: " + err);
        });
    });
  }
};

export default actions;
