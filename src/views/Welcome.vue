<template>
  <div class="hello">
    Welcome !
    <div class="if-logged-block links" v-if="isLoggedIn">
      You are logged in. You may go to :
      <div>
        <router-link to="/usertasks">-list of tasks</router-link>
        <br />
        <router-link to="/create">-create new task</router-link>
        <br />
        <!-- <router-link to="/">-create new task</router-link>
        <br /> -->
      </div>
    </div>

    <div class="if-not-logged-block" v-if="!isLoggedIn">
      <div>
        <router-link to="/login">LOGIN PAGE</router-link>
      </div>
      <div>
        <router-link to="/signup">SIGN UP PAGE</router-link>
      </div>

      <div class="get-users">
        <h3>List of existing users:</h3>
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
    this.axios.get("http://localhost:3000/api/users").then((res) => {
      this.list = res.data;
    });
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
ul {
  list-style-type: none;
}
</style>
