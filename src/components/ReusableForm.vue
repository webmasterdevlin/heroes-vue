<template>
  <div class="card my-3" style="width: auto;">
    <ValidationObserver tag="form" v-slot="{ invalid }">
    <form
        class="card-header"
        @submit.prevent="onSubmit"
        style="min-width: 460px;"
    >
      <div class="d-flex flex-column">
        <section class="form-group">
          <ValidationProvider rules="required" v-slot="{errors}">
          <label for="firstName">First Name</label>
          <input
              v-model="obj.firstName"
              placeholder="📛"
              autocomplete="off"
              type="text"
              id="firstName"
              class="form-control"
          />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </section>

        <section class="form-group">
          <ValidationProvider rules="required" v-slot="{errors}">
          <label for="lastName">Last Name</label>
          <input
              v-model="obj.lastName"
              placeholder="📛"
              autocomplete="off"
              type="text"
              id="lastName"
              class="form-control"
          />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </section>
        <section class="form-group">
          <ValidationProvider rules="required" v-slot="{errors}">
          <label for="house">House</label>
          <input
              v-model="obj.house"
              placeholder="🏠"
              autocomplete="off"
              type="text"
              id="house"
              class="form-control"
          />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </section>
        <section class="form-group">
          <ValidationProvider rules="required" v-slot="{errors}">
          <label for="knownAs">Known as</label>
          <input
              v-model="obj.knownAs"
              placeholder="👀"
              autocomplete="off"
              type="text"
              id="knownAs"
              class="form-control"
          />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </section>
       <section>
         <button type="submit"  :disabled="invalid" class="btn btn-success">
           {{ text }}
         </button>
       </section>
      </div>
    </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "ReusableForm",
  props: {
    text: {
      type: String,
      default: () => String,
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style scoped></style>
