<template>
  <v-container>
    <h1>
      詳細
    </h1>

    <v-card color="blue lighten-4">

      <div v-if="isFetched" align="center">
        <div class="ma-4">
          <h3>講義名</h3>
          <h1>
            {{ course.lecture_name}}
          </h1>
        </div>

        <div class="ma-4">
          <h3>開講期間</h3>
          <h2>
            {{ course.lecture_season}}
          </h2>
        </div>

        <div class="ma-4">
          <h3>教員名</h3>
          <h2>
            {{ course.teacher_name }}
          </h2>
        </div>

        <div class="ma-4">
          <v-btn :href="getCourseURL(course.lecture_code)" text large rounded color="gray" outlined>
            シラバス URL
          </v-btn>
        </div>
      </div>

        <v-spacer></v-spacer>
      </v-card>
      <v-spacer></v-spacer>


      <div align="left">
        <h3>コメント一覧</h3>
      </div>
      <v-spacer></v-spacer>

      <v-textarea
        label="感想 (ex: 面白かった) (ex: 先生がずっと話している講義だった) (ex: 〇〇を改善してほしい)"
        auto-grow
        outlined
        rows="1"
        row-height="15"
        class="ma-4"
      ></v-textarea>

      <p>個人を特定したコメント並びに、誹謗中傷は禁止させていただきます。</p>
      <p>感想を送信するには、ログインが必要となります。</p>
      <div>
        <v-btn depressed color="blue">
          送信
        </v-btn>
      </div>

  </v-container>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        course: null,
        isFetched: false,
      }
    },
    methods: {
      getCourseURL: function(id) {
        return "https://alss-portal.gifu-u.ac.jp/campusweb/slbssbdr.do?value(risyunen)=2020&value(semekikn)=1&value(kougicd)=" + id + "&value(crclumcd)="
      }
    },
    mounted() {
      // HTTP request
      axios.get('http://localhost:8000/api/v1/courses/' + this.$route.params.id )
      .then(res => {
        console.log('Success to Fetch API')
        console.log(res.data)
        this.course = res.data
        this.isFetched = true
      })
    }
  }
</script>
