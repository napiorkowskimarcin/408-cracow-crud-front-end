<template>
  <div class="hello">
    Welcome !
    <div class="if-logged-block tasks-list" v-if="isLoggedIn">
      <p class="welcome-text">
        You are logged in. You can view, edit and remove tasks:
      </p>

      <router-link
        v-for="(item, index) in taskList"
        :key="index"
        :to="`/update/${item.todo_id}`"
        >{{ item.todo_name }}</router-link
      >

      <div class="tab-create">
        <br />
        <p>Want to create a new one?</p>
        <router-link to="/create">CREATE A TASK</router-link>
      </div>
    </div>
    <div v-if="!isLoggedIn">Please sign in/up.</div>
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
      taskList: undefined,
    };
  },

  async mounted() {
    let response = await this.axios.get("http://localhost:3000/api/todos", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    this.taskList = response.data.taskNameArray.rows;
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tasks-list {
  display: flex;
  flex-direction: column;

  a {
    color: rgb(54, 52, 165);
  }
  .red {
    background-color: red;
  }
}
</style>
