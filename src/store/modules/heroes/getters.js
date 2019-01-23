import * as types from "../../types";

const getters = {
  [types.GETTERS_INIT_HEROES]: state => state.heroes,
  [types.GETTERS_INIT_HERO]: state => state.hero
};

export default getters;
