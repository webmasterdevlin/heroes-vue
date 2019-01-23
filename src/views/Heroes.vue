<template>
  <div class="container-fluid">
    <NewItemForm
      :isShowNewItemForm="isShowNewItemForm"
      :newItem="newItem"
      @handleSubmit="onSubmit"
      @handleShowNewItemForm="showNewItemForm"
      @handleCancelForm="cancelForm"
    ></NewItemForm>

    <section is="transition-group" name="fadeitem" v-cloak>
      <div
        class="card mt-3"
        style="width: auto;"
        v-for="hero in heroes"
        :key="hero.id"
      >
        <div class="card-header">
          <h3 class="card-title">{{ hero.firstName }} {{ hero.lastName }}</h3>
          <h5 class="card-subtitle mb-2 text-muted">{{ hero.house }}</h5>
          <p class="card-text">{{ hero.knownAs }}</p>
        </div>
        <section class="card-body">
          <div class="row">
            <button
              @click="removeHero(hero)"
              class="btn btn-outline-danger card-link col text-center"
            >
              <li class="fas fa-eraser"></li>
              Delete
            </button>
            <button
              @click="editHero(hero.id)"
              class="btn btn-outline-primary card-link col text-center"
            >
              <li class="fas fa-edit"></li>
              Edit
            </button>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as types from "../store/types";
import NewItemForm from "../components/NewItemForm";

export default {
  name: "Heroes",
  components: { NewItemForm },
  data() {
    return {
      isShowNewItemForm: false,
      newItem: {
        firstName: "",
        lastName: "",
        house: "",
        knownAs: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      heroes: types.GETTERS_INIT_HEROES
    })
  },
  methods: {
    onSubmit() {
      this.postHero(this.newItem);
      this.newItem = {};
      this.isShowNewItemForm = !this.isShowNewItemForm;
    },
    showNewItemForm() {
      this.isShowNewItemForm = !this.isShowNewItemForm;
    },
    cancelForm() {
      this.isShowNewItemForm = !this.isShowNewItemForm;
    },

    removeHero(hero) {
      const isConfirmed = confirm(`Delete ${hero.firstName}?`);
      if (!isConfirmed) return;

      this.deleteHero(hero);
    },
    editHero(id) {
      this.$router.push({ name: "edit-hero", params: { id: id } });
    },
    ...mapActions({
      initHeroes: types.ACTION_GET_HEROES,
      postHero: types.ACTION_ADD_HERO,
      deleteHero: types.ACTION_REMOVE_HERO
    })
  },
  beforeMount() {
    this.initHeroes();
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
