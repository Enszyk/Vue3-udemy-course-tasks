<template>
  <div id="app">
    <h2>Name: {{ user.name }}</h2>
    <h3>Age: {{ user.age }}</h3>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style scoped>
#app h2,
h3 {
  color: #eee;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  background-color: #222;
  margin: 0;
}
#app h2 {
  margin-bottom: 1rem;
}
</style>
