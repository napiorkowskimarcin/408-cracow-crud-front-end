<template>
  <div class="hello">
    Welcome Please log in
    <div><router-link to="/login">LOGIN PAGE</router-link></div>
    <div><router-link to="/signup">SIGN UP PAGE</router-link></div>
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
</template>

<script>
export default {
  name: "Welcome",
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
