/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins

import { registerPlugins } from "@/plugins";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import { routes } from "./routes";
// Components
import App from "./App.vue";
const stores = createStore({
  state() {
    return {
      fullName: "",
      workPlace: "",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
const router = new createRouter({
  history: createWebHistory(),
  routes: routes,
});
router.beforeEach((to, from, next) => {
  if (stores.state.fullName == "" && to.path !== '/login') {
    next({name: "user"});
  } else {
    next();
  }
});

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);
app.use(router);
app.use(stores);
app.mount("#app");
