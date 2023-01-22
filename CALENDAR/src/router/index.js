import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import input from "../views/input.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path: "/input",
      name: "input",
      component: input,
    },
  ],
});

export default router;
