import * as types from "../../types";

const getters = {
  [types.GETTERS_INIT_HEROES]: state => state.heroes,
  [types.GETTERS_INIT_HERO]: state => state.hero,
  [types.GETTERS_TOTAL_HEROES]: state => state.heroes.length,
  [types.GETTERS_ISLOADING_HERO]: state => state.isLoading,
  [types.GETTERS_ERROR_HERO]: state => state.error
};

export default getters;
