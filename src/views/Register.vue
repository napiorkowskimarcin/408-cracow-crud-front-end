<template>
  <div>
    <form
      @submit="userRegister"
      method="post"
      autocomplete="off"
      v-if="!isLoggedIn"
      class="card"
    >
      <h2>CREATE AN ACCOUNT</h2>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="name"
          class="form-control"
          v-model="posts.name"
          autocomplete="off"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="posts.password"
          autocomplete="off"
        />
      </div>
      <button type="submit" class="btn btn-primary">Create account</button>
      <p class="text-danger">{{ message }}</p>
    </form>

    <div v-if="isLoggedIn">
      You are already logged in.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Register",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  data() {
    return {
      posts: {
        name: null,
        password: null,
      },
      message: null,
    };
  },
  methods: {
    //SIGN UP - CHECK IF NAME AND PASSWORD IS NOT EMPTY
    async userRegister(event) {
      event.preventDefault();
      if (!this.posts.name) {
        return (this.message = "name required");
      }
      if (!this.posts.password) {
        return (this.message = "password required");
      }
      //TRY TO SIGN UP  - HANDLE SIMPLE SITUATIONS (EXISTING NAME, EMPTY NAME OR PASSWORD INPUT)
      try {
        let response = await this.axios.post(
          "https://mn-cracow-back.herokuapp.com/api/user/signup",
          this.posts
        );

        if (!response.data.created) {
          return (this.message = response.data.message);
        }
        this.$router.push("/login");
        // this.$router.push("/login");
      } catch (error) {
        this.message = error.response.data.message;
      }
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
