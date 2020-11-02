<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Age</label>
        <input type="number" />
      </div>
      <div>
        <button>Set User</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      console.log('XD');
    }
  }
};
</script>

<style scoped>
#app{
  border: 2px solid #333;
  padding: 1rem;
  padding-bottom: 0rem;
  border-radius: 15px;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 6rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
#app button {
  display: block;
  margin: 0 auto;
  width: 6rem;
  border: 2px solid #333;
  padding: 0.5rem;
}

</style>
