<template>
  <div id="app">
    <active-user 
    :user="user"
    />
    <user-data />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Norbert",
        age: 20, 
      }
    };
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
