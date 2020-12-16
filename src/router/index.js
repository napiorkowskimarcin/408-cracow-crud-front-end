import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Usertask from "../views/UserPage.vue";
import Create from "../views/Create.vue";
import Update from "../views/Update.vue";

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
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/update/:Id",
    name: "Update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
