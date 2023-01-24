import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import input from "../views/input.vue";
import TwoInput from "../views/TwoInput.vue";
import Division from "../views/division.vue";

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
    {
      path: "/TwoInput",
      name: "TwoInput",
      component: TwoInput,
    },
    {
      path: "/division",
      name: "division",
      component: Division,
    },
  ],
});

export default router;
