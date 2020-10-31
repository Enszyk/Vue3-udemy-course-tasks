const app = Vue.createApp({
  data() {
    return {
      inputClassName: '',
      visibility: true,
      bgColor: ''
    }
  },
  methods: {
    changeVisibility() {
      this.visibility = !this.visibility;
    },
  },
  computed: {
    pClass() {
      if (this.inputClassName === 'user1' || this.inputClassName === 'user2')
        return this.inputClassName;
    },
    visibilityClass() {
      return this.visibility ? 'gi' : 'hidden';
    }
  }
})

app.mount('#assignment');