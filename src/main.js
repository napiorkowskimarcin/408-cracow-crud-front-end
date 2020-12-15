import { createApp } from "vue";
//
import router from "./router";
import App from "./App.vue";
import store from "./store";
//
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
