<template>
  <div id="app">
    <nav v-if="!isLoggedIn" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Signin</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
    <nav v-if="isLoggedIn" class="navbar navbar-expand-lg navbar-dark bg-dark">
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
import { mapGetters, mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapState({ accessToken: "accessToken", username: "username" }),
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  nav {
    height: 65px;
    margin-bottom: 50px;
    a {
      margin-left: 90px;
      color: white;
      transition: 0.3s;
      &:hover {
        color: lightblue;
      }
    }
  }
}
</style>
