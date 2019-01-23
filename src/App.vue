<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="my-5"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

export default {
  name: "App",
  components: {
    HeaderNav
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(-12px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-12px);
  }
}

.fadeitem-leave-to,
.fadeitem-enter {
  opacity: 0;
  transform: translateY(30px);
}
.fadeitem-enter-active,
.fadeitem-leave-active {
  transition: all 1s linear;
}
</style>
