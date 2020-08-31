<template>
  <div>
    <section class="d-flex flex-row justify-content-start">
      <button @click="showNewItemForm" type="button" class="btn btn-info mx-1">
        <span class="fas fa-plus my-lg-0"></span> Add New
      </button>
      <transition name="fade">
        <button
          @click="cancelForm"
          v-if="isShowNewItemForm"
          type="button"
          class="btn btn-outline-warning mx-1"
        >
          <span class="fas fa-chevron-left my-lg-0"></span> Cancel
        </button>
      </transition>
    </section>
    <transition name="slide" type="animation">
      <div class="card my-3" style="width: auto;" v-if="isShowNewItemForm">
        <ValidationObserver tag="form" v-slot="{ invalid }">
        <form class="card-header" @submit.prevent="onSubmit">
          <section class="d-flex flex-row">
            <div class="mt-3 mr-3 input-width">
              <section>
                <ValidationProvider rules="required" v-slot="{errors}">
                  <label for="firstName">First Name</label>
                  <input
                      type="text"
                      id="firstName"
                      class="form-control"
                      v-model="newItem.firstName"
                      placeholder="📛"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </section>

            </div>
            <div class="mt-3 ml-3 input-width">
             <section>
               <ValidationProvider rules="required" v-slot="{errors}">
                 <label for="lastName">Last Name</label>
                 <input
                     type="text"
                     id="lastName"
                     class="form-control"
                     v-model="newItem.lastName"
                     placeholder="📛"
                 />
                 <span class="text-danger">{{ errors[0] }}</span>
               </ValidationProvider>
             </section>
            </div>
          </section>
          <section>
            <ValidationProvider rules="required" v-slot="{errors}">
              <label for="house" class="mt-3">House</label>
              <input
                  type="text"
                  id="house"
                  class="form-control"
                  v-model="newItem.house"
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
                  v-model="newItem.knownAs"
                  placeholder="👀"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </section>
         <section>
           <button type="submit" :disabled="invalid" class="btn btn-success mt-3">Save</button>
         </section>
        </form>
        </ValidationObserver>
      </div>
    </transition>
  </div>
</template>

<script>


export default {
  name: "NewItemForm",
  props: {
    isShowNewItemForm: {
      type: Boolean,
      default: () => false
    },
    newItem: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit"); // triggers the method of the container holding this
    },
    showNewItemForm() {
      this.$emit("handleShowNewItemForm");
    },
    cancelForm() {
      this.$emit("handleCancelForm");
    }
  }
};
</script>

<style scoped>

</style>
