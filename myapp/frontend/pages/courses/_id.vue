<template>
  <v-container>
    <h1>
      詳細
    </h1>
    <div v-if="isFetched" align="center">
      <div>
        <h3>講義名</h3>
        <h2>
          {{ course.lecture_name}}
        </h2>
      </div>
      <div>
        <h3>開講期間</h3>
        <h2>
          {{ course.lecture_season}}
        </h2>
      </div>
      <div>
        <h3>教員名</h3>
        <h2>
          {{ course.teacher_name}}
        </h2>
      </div>
      <div>
        <h3>コメント一覧</h3>
      </div>

      <v-spacer></v-spacer>

      <v-textarea
        label="感想 (ex: 面白かった) (ex: 先生がずっと話している講義だった) (ex: 〇〇を改善してほしい)"
        auto-grow
        outlined
        rows="1"
        row-height="15"
      ></v-textarea>

      <p>個人を特定したコメント並びに、誹謗中傷は禁止させていただきます。</p>
      <p>感想を送信するには、ログインが必要となります。</p>
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
