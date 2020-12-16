import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Usertask from "../views/UserPage.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Register",
    component: Register,
  },
  {
    path: "/usertasks",
    name: "Usertasks",
    component: Usertask,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
