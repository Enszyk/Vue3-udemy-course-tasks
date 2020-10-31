const app = Vue.createApp({
  data() {
    return {
      value: 0
    }
  },
  methods: {
    addToValue(num) {
      this.value += num;
    }
  },
  computed: {
    calculatedValue() {
      if (this.value < 37)
        return 'Not there yet';
      else if (this.value > 37)
        return 'Too much!';
      else
        return this.value
    },
    resetValue() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    }
  },
  watch: {
    value() {
      if (this.value === 37)
        this.resetValue;
    }
  }
})

app.mount('#assignment');