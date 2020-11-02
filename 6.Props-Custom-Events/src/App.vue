<template>
  <div id="app">
    <user-data />
    <active-user 
    :user="user"
    />
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
  text-align: center;
  margin: 60px auto;
}
</style>
