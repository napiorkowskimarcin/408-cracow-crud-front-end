<template>
  <div>
    <div v-if="isLoggedIn">
      <form @submit="updateTask" method="post" class="card">
        <h2>MODIFICATION OF THE TASK</h2>
        <div class="mb-3">
          <br />
          <label for="taskName" class="form-label">
            Previous name: {{ result.todo_name }}
          </label>
          <input
            type="taskName"
            class="form-control"
            v-model="posts.taskName"
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <label for="taskDescription" class="form-label"
            >Previous description: {{ result.todo_desc }}</label
          >
          <input
            type="taskDescription"
            class="form-control"
            v-model="posts.taskDescription"
            autocomplete="off"
          />
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
      <br />
      <form @submit="removeTask" method="post">
        <button type="submit" class="btn btn-primary red">Remove task</button>
      </form>
    </div>
    <div v-if="!isLoggedIn">
      You are not allowed to be here. Please sign in/up
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapState({ accessToken: "accessToken", username: "username" }),
    ...mapGetters(["isLoggedIn"]),
  },
  data() {
    return {
      result: {
        todo_name: null,
        todo_desc: null,
      },
      posts: {
        taskName: null,
        taskDescription: null,
      },
    };
  },
  async mounted() {
    let id = this.$route.params.Id;
    let response = await this.axios.get(
      `https://mn-cracow-back.herokuapp.com/api/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    response = response.data.taskList.rows[0];
    this.result.todo_name = response.todo_name;
    this.result.todo_desc = response.todo_desc;

    // this.taskList = response.data.taskNameArray.rows;
  },
  methods: {
    //method 1 - update task
    //UPDATE TASK
    async updateTask(event) {
      event.preventDefault();
      const data = {
        taskName: this.posts.taskName,
        taskDescription: this.posts.taskDescription,
        taskId: this.$route.params.Id,
      };

      await this.axios.post(
        "https://mn-cracow-back.herokuapp.com/api/todos/update",
        data,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );
      this.$router.push("/usertasks");
    },
    //method 1 - remove task
    async removeTask(event) {
      event.preventDefault();
      await this.axios.delete(
        `https://mn-cracow-back.herokuapp.com/api/todos/delete/${this.$route.params.Id}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );
      this.$router.push("/usertasks");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  h2 {
    margin-bottom: 30px;
  }
  display: flex;
  justify-content: center;
  padding: 30px;
  input {
    max-width: 300px;
    margin: 0 auto;
  }
  .btn {
    max-width: 150px;
    margin: 0 auto;
  }
}

.red {
  background-color: red;
}
</style>
