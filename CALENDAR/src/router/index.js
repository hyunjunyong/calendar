import { createRouter, createWebHistory } from "vue-router";
import calendar from "../views/Calendar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calendar",
      component: calendar,
    },
  ],
});

export default router;
