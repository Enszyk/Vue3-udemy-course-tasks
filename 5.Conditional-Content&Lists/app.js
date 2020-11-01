const app = Vue.createApp({
  data() {
    return {
      task: '',
      taskList: [],
      showList: true,
    }
  },
  computed: {
    buttonText() {
      return (this.showList ? 'Hide' : 'Show') + ' list';
    }
  },
  methods: {
    changeListVisibility() {
      this.showList = !this.showList;
    },
    addTask() {
      if (this.task !== '') {
        this.taskList.push(this.task);
        this.task = "";
      }
    }
  }
})

app.mount('#assignment')