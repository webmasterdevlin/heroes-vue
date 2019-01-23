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
        v-for="villain in villains"
        :key="villain.id"
      >
        <div class="card-header">
          <h3 class="card-title">
            {{ villain.firstName }} {{ villain.lastName }}
          </h3>
          <h5 class="card-subtitle mb-2 text-muted">{{ villain.house }}</h5>
          <p class="card-text">{{ villain.knownAs }}</p>
        </div>
        <section class="card-body">
          <div class="row">
            <button
              @click="removeVillain(villain)"
              class="btn btn-outline-danger card-link col text-center"
            >
              <li class="fas fa-eraser"></li>
              Delete
            </button>
            <button
              @click="editVillain(villain.id)"
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
  name: "Villains",
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
      villains: types.GETTERS_INIT_VILLAINS
    })
  },
  methods: {
    onSubmit() {
      this.postVillain(this.newItem);
      this.newItem = {};
      this.isShowNewItemForm = !this.isShowNewItemForm;
    },
    showNewItemForm() {
      this.isShowNewItemForm = !this.isShowNewItemForm;
    },
    cancelForm() {
      this.isShowNewItemForm = !this.isShowNewItemForm;
    },

    removeVillain(villain) {
      const isConfirmed = confirm(`Delete ${villain.firstName}?`);
      if (!isConfirmed) return;

      this.deleteVillain(villain);
    },
    editVillain(id) {
      this.$router.push({ name: "edit-villain", params: { id: id } });
    },
    ...mapActions({
      initVillains: types.ACTION_GET_VILLAINS,
      postVillain: types.ACTION_ADD_VILLAIN,
      deleteVillain: types.ACTION_REMOVE_VILLAIN
    })
  },
  beforeMount() {
    this.initVillains();
  }
};
</script>

<style scoped>
p {
  font-size: 1.25rem;
}
</style>
