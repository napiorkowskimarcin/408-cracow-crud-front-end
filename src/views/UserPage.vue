<template>
  <div class="hello">
    <div class="if-logged-block tasks-list" v-if="isLoggedIn">
      <table class="table">
        <thead class="thead-dark ">
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Modify</th>
          </tr>
        </thead>

        <tr v-for="(item, index) in taskList" :key="index">
          <td>{{ item.todo_name }}</td>
          <td>{{ item.todo_desc }}</td>
          <td>
            <router-link :to="`/update/${item.todo_id}`"
              >Change it!</router-link
            >
          </td>
        </tr>
      </table>

      <div class="tab-create">
        <br />
        <p>Want to create a new one?</p>
        <router-link to="/create">CREATE A TASK</router-link>
      </div>
    </div>
    <div v-if="!isLoggedIn">
      <h2>Welcome !</h2>
      <p>Please sign in/up.</p>
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
      taskList: undefined,
    };
  },

  async mounted() {
    //GET TASK LIST OF USER SAVED IN TOKEN
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

  .red {
    background-color: red;
  }
}
</style>
