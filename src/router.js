import Vue from "vue";
import Router from "vue-router";

import Heroes from "./views/Heroes";
import Villains from "@/views/Villains";
import About from "@/views/About";
import EditHero from "@/views/EditHero";
import EditVillain from "@/views/EditVillain";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      redirect: { name: "heroes" }
    },
    {
      path: "/heroes",
      name: "heroes",
      component: Heroes
    },
    {
      path: "/edit-hero/:id",
      name: "edit-hero",
      component: EditHero
    },
    {
      path: "/villains",
      name: "villains",
      component: Villains
    },
    {
      path: "/edit-villain/:id",
      name: "edit-villain",
      component: EditVillain
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
