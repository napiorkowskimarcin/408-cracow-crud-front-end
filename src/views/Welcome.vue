<template>
  <div class="hello">
    <h2>Welcome !</h2>
    <div class="if-logged-block links" v-if="isLoggedIn">
      You are logged in. You may go to :
      <div>
        <router-link to="/usertasks">list of tasks</router-link>
        <br />
        <router-link to="/create">create new task</router-link>
        <br />
      </div>
    </div>

    <div class="if-not-logged-block" v-if="!isLoggedIn">
      <p class="router-links">
        Feel free to <router-link to="/login">sign in</router-link> or
        <router-link to="/signup">sign up</router-link>.
      </p>

      <br />
      <div class="get-users">
        <h4>//Temporary - for faster tests.</h4>
        <h5>List of users:</h5>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <!--  -->
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Welcome",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },

  data() {
    return {
      list: undefined,
    };
  },

  mounted() {
    //GET LIST OF USERS - EASIER TO TEST IF EVERYTHING WORKS AS IS SHOULD
    this.axios.get("http://localhost:3000/api/users").then((res) => {
      this.list = res.data;
    });
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
}
</style>
