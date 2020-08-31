<template>
  <div>
    <h2>Edit Hero</h2>
    <div
      v-if="isLoading"
      style="display:flex; flex-direction: row; justify-content: center"
    >
      <div
        class="spinner-border"
        style="width: 9rem; height: 9rem; color: purple"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else class="card my-3" style="width: auto;">
      <ValidationObserver tag="form" v-slot="{ invalid }">
      <form class="card-header" @submit.prevent="onSubmit(hero)">
        <section class="d-flex flex-row">
          <div class="mt-3 mr-3 input-width">
            <ValidationProvider rules="required" v-slot="{errors}">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              class="form-control"
              v-model="hero.firstName"
              placeholder="📛"
            />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="mt-3 ml-3 input-width">
            <ValidationProvider rules="required" v-slot="{errors}">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              class="form-control"
              v-model="hero.lastName"
              placeholder="📛"
            />
            <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </section>
       <section>
         <ValidationProvider rules="required" v-slot="{errors}">
           <label for="house" class="mt-3">House</label>
           <input
               type="text"
               id="house"
               class="form-control"
               v-model="hero.house"
               placeholder="🏠"
           />
           <span class="text-danger">{{ errors[0] }}</span>
         </ValidationProvider>
       </section>
       <section>
         <ValidationProvider rules="required" v-slot="{errors}">
           <label for="knownAs" class="mt-3">Known as</label>
           <input
               type="text"
               id="knownAs"
               class="form-control"
               v-model="hero.knownAs"
               placeholder="👀"
           />
           <span class="text-danger">{{ errors[0] }}</span>
         </ValidationProvider>
       </section>
        <button type="submit" class="btn btn-info mt-3" :disabled="invalid">
          Update
        </button>
        <button
          @click="back"
          type="button"
          class="btn btn-outline-info mt-3 ml-3"
        >
          Back
        </button>
      </form>
      </ValidationObserver>
    </div>
    <div v-if="isSuccess" class="alert alert-success col-md-3" role="alert">
      This hero has been updated!
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import * as types from "../store/types";

export default {
  name: "EditHero",
  data() {
    return {
      isSuccess: false
    };
  },
  computed: {
    ...mapGetters({
      hero: types.GETTERS_INIT_HERO,
      isLoading: types.GETTERS_ISLOADING_HERO
    })
  },
  methods: {
    onSubmit(hero) {
      this.putHero(hero);
      this.isSuccess = true;
    },
    back() {
      this.$router.back();
    },
    ...mapActions({
      initHero: types.ACTION_GET_HERO,
      putHero: types.ACTION_UPDATE_HERO
    })
  },
  beforeMount() {
    this.initHero(this.$route.params.id);
  }
};
</script>

<style scoped>
p {
  font-size: 1.25rem;
}

.input-width {
  width: 100%;
}
</style>
