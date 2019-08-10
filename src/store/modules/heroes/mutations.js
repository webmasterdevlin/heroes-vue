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
  // This will update the hero properties inside the array of heroes
  [types.MUTATE_UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex(h => h.id === hero.id);
    state.heroes[index] = hero;
  },

  [types.MUTATE_REMOVE_HERO](state, id) {
    const index = state.heroes.findIndex(h => h.id === id);
    state.heroes.splice(index, 1);
  },

  [types.MUTATE_ISLOADING_HERO](state, toggle) {
    state.isLoading = toggle;
  },

  [types.MUTATE_ERROR_HERO](state, errorMessage) {
    state.error = errorMessage;
    alert("Something happened: " + errorMessage);
  }
};

export default mutations;
