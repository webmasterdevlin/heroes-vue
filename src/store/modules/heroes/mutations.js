import * as types from "../../types";

const mutations = {
  [types.MUTATE_GET_HEROES](state, heroes) {
    state.heroes = heroes.reverse();
  },

  [types.MUTATE_GET_HERO](state, hero) {
    state.hero = hero;
  },

  [types.MUTATE_ADD_HERO](state, heroData) {
    state.heroes.unshift(heroData);
  },

  // Applicable if a component(s) of the current page is rendering the array of heroes
  // This will update the properties hero inside the array of heroes
  [types.MUTATE_UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex(h => h.id === hero.id);
    state.heroes[index] = hero;
  },

  [types.MUTATE_REMOVE_HERO](state, id) {
    const index = state.heroes.findIndex(h => h.id === id);
    state.heroes.splice(index, 1);
  }
};

export default mutations;
