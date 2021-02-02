<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-text="ip">岐阜大学　全共科目　一覧</p>
    <input @click="getCourses" type="button" value="一覧をみる">
    <div>
      <ul>
        <li v-for="course in courses">{{ course.lecture_name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        ip: "",
        courses: ["1", "2", "3", "4",],
      }
    },
    methods: {
      getCourses() {
        console.log('接続を試みる')
        this.ip = "岐阜大学　全学共通科目に接続しております"

        axios.get('http://localhost:3000/api/v1/courses')
        .then((res) => {
          console.log("Success to Connect")
          console.log(res.status)
          console.log(res.data)
          this.courses = res.data
        })
        .catch((reason) => {
          console.log('APIの接続が失敗しました')
          this.ip = 'APIの接続に失敗しました。'
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
