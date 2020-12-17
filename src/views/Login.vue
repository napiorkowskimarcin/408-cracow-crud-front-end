<template>
  <div>
    <form @submit="userLogin" method="post" v-if="!isLoggedIn">
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
      <button type="submit" class="btn btn-primary">Sigin</button>
    </form>

    <div v-if="isLoggedIn">
      You are already logged in.
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  data() {
    return {
      posts: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async userLogin(event) {
      event.preventDefault();
      let response = await this.axios.post(
        "http://localhost:3000/api/user/signin",
        this.posts
      );
      response = response.data;
      const { accessToken, username } = response;
      this.setUser(username);
      this.setToken(accessToken);
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
