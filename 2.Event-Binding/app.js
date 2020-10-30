const app = Vue.createApp({
  data() {
    return {
      inputValue1: "",
      inputValue2: "",
      updatedInputValue: ""
    }
  },
  methods: {
    showAlert() {
      alert('Alert')
    },
    registerInput(event, inputNum) {
      inputNum === 1 ?
        this.inputValue1 = event.target.value :
        this.inputValue2 = event.target.value;
    },
    updateInput() {
      this.updatedInputValue = this.inputValue2;
    }
  },
})

app.mount('#assignment')