<template>
  <div class="hello">
    Welcome !
    <div class="if-logged-block" v-if="isLoggedIn">
      You are logged in. See your tasks:

      <ul>
        <li v-for="(item, index) in taskList" :key="index">
          <!--  -->
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Welcome",
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapState({ accessToken: "accessToken", username: "username" }),
  },
  data() {
    return {
      dataReady: false,
      taskList: undefined,
    };
  },

  async mounted() {
    console.log("See userpage token:" + this.accessToken);
    let response = await this.axios.get("http://localhost:3000/api/todos", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    this.taskList = response.data.taskNameArray;
    console.log(this.taskList);
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
ul {
  list-style-type: none;
}
</style>
