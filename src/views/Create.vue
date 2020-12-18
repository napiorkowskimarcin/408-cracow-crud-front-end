<template>
  <div>
    <form @submit="createTask" method="post" v-if="isLoggedIn" class="card">
      <h2>CREATE A TASK</h2>
      <div class="mb-3">
        <br />
        <label for="taskName" class="form-label"> Task name</label>
        <input
          type="taskName"
          class="form-control"
          v-model="posts.taskName"
          autocomplete="off"
        />
      </div>
      <div class="mb-3">
        <label for="taskDescription" class="form-label">Task description</label>
        <input
          type="taskDescription"
          class="form-control"
          v-model="posts.taskDescription"
          autocomplete="off"
        />
      </div>
      <p class="text-danger">{{ message }}</p>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
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
      posts: {
        taskName: null,
        taskDescription: null,
      },
      message: null,
    };
  },
  methods: {
    async createTask(event) {
      event.preventDefault();
      if (!this.posts.taskName) {
        return (this.message = "name of taskrequired");
      }
      if (!this.posts.taskDescription) {
        return (this.message = "description of the of task required");
      }
      const data = {
        taskName: this.posts.taskName,
        taskDescription: this.posts.taskDescription,
      };

      await this.axios.post("http://localhost:3000/api/todos/create", data, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

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
</style>
