<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand">
      <li class="fas fa-cube"></li>
      Vue.js Tour of Heroes
    </span>
    <button
      @click="navIsCollapse = !navIsCollapse"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      v-bind:class="{
        'collapse navbar-collapse': navIsCollapse,
        'navbar-collapse': navIsCollapse
      }"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link"> Heroes </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/villains"> Villains </router-link>
        </li>
      </ul>
      <span class="mr-5" style=" color: purple; font-size: 24px">
        Total heroes: {{ totalHeroes }}
      </span>
      <span class="mr-5" style=" color: purple; font-size: 24px">
        Total villains: {{ totalVillains }}
      </span>
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item">
          <a
            class="nav-link"
            target="_blank"
            href="https://twitter.com/DevlinDuldulao"
            ><i class="layout-icon fab fa-twitter"></i
          ></a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            target="_blank"
            href="https://github.com/webmasterdevlin"
            ><i class="layout-icon fab fa-github"></i
          ></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  name: "HeadNav",
  data() {
    return {
      navIsCollapse: true
    };
  },
  computed: {
    ...mapGetters({
      totalHeroes: types.GETTERS_TOTAL_HEROES,
      totalVillains: types.GETTERS_TOTAL_VILLAINS
    })
  }
};
</script>

<style scoped></style>
