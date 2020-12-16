<template>
  <form @submit="updateTask" method="post">
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
    <button type="submit" class="btn btn-primary">Update</button>
    <!-- <router-link :to="`/update/${item.todo_id}`"
      >Remove this element</router-link
    > -->
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapState({ accessToken: "accessToken", username: "username" }),
  },
  data() {
    return {
      posts: {
        taskName: null,
        taskDescription: null,
      },
    };
  },
  async mounted() {
    console.log(this.$route.params.Id);
    // let response = await this.axios.get(
    //   `http://localhost:3000/api/todos/${id}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${this.accessToken}`,
    //     },
    //   }
    // );
    // console.log(response.data.taskNameArray.rows);
    // this.taskList = response.data.taskNameArray.rows;
  },
  methods: {
    async updateTask(event) {
      event.preventDefault();
      const data = {
        taskName: this.posts.taskName,
        taskDescription: this.posts.taskDescription,
      };

      await this.axios.post("http://localhost:3000/api/todos/update", data, {
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
.btn-primary {
  color: white;
}
</style>
