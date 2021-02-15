<template>
    <v-container fluid class="ma-2">
        <v-row no-gutters>
          <v-col
            v-for="(course, index) in courses"
            :key="index"
            cols="12"
            sm="4"
            class="mb-4"
          >
            <v-card tile py-2 class="ma-3" :elevation="5" align="center">
              <v-card-text>
                <h3>{{ course.lecture_title}}</h3>
                {{ course.lecture_season }}
              </v-card-text>

              <div align="right">
                <nuxt-link :to="'/courses/' + course._id" style="text-decoration: none">
                  <v-btn class="ma-1" color="blue lighten-2 white--text font-weight-bold" large :elevation="5">詳細をみる</v-btn>
                </nuxt-link>
              </div>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import axios from "axios"

  export default {
    data(){
      return {
        courses: null,
        dialog: false,
      }
    },
    methods: {
      add_plus_counter: function(course) {
        console.log('高評価が押されました(未実装)')
        console.log(course._id)
      },
      add_minus_counter: function(course) {
        console.log('低評価が押されました(未実装)')
        console.log(course._id)
      }
    },
    mounted() {
      axios.get('http://localhost:8000/api/v1/courses')
        .then(response => {
        console.log('Success to Fetch API')
        this.courses = response.data
      })
    }
  }
</script>
