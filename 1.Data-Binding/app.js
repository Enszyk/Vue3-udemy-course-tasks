const app = Vue.createApp({
  data() {
    return {
      name: 'Norbert',
      surname: 'S',
      age: 20,
      imgSrc: 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png'
    }
  },
  computed: {
    randomNumber() {
      return Math.random();
    },
    fullName() {
      return this.name + ' ' + this.surname;
    },
    calculateAge() {
      return this.age + 5;
    }
  }
})

app.mount('#assignment')