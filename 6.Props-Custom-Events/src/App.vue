<template>
  <div id="app">
    <active-user :user="user" />
    <user-data @set-user-data="setNewUserData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: null,
      },
    };
  },
  methods: {
    setNewUserData(user) {
      this.user = user;
    },
  },
};
</script>

<style>
#app {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px auto;
  width: 60%;
}
</style>
