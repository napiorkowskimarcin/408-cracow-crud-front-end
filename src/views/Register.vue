<template>
  <form @submit="userLogin" method="post" autocomplete="off">
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
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      posts: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
    userLogin(event) {
      event.preventDefault();
      this.axios
        .post("http://localhost:3000/api/user/signup", this.posts)
        .then((result) => {
          console.log(result);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
