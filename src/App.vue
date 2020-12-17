<template>
  <div id="app">
    <nav v-if="!isLoggedIn">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Signin</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
    <nav v-if="isLoggedIn">
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create task</router-link>
      <router-link to="/usertasks">List of tasks</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  nav {
    background-color: #eee;
    a {
      margin-left: 30px;
    }
  }
}
</style>
