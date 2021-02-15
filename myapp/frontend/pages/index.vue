<template>
  <v-app>
    <v-container fluid class="ma-2">
      <v-tabs
        v-model="tabs"
        flat
        background-color="grey lighten-4"
        color="black black--text"
        light
        centered
      >
      <v-tab
        v-for="n in 2"
        :key="n"
      >
        {{ (n % 2 == 1) ? "前期" : "後期"}}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <!-- 前期　-->
        <v-row no-gutters>
          <v-col
            v-for="(course, index) in earlyCourses"
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
                <nuxt-link :to="'/earlyCourse/' + course._id" style="text-decoration: none">
                  <v-btn class="ma-1" color="blue lighten-2 white--text font-weight-bold" large :elevation="5">詳細をみる</v-btn>
                </nuxt-link>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <!-- 後期 -->
        <v-row no-gutters>
          <v-col
            v-for="(course, index) in latterCourses"
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
                <nuxt-link :to="'/earlyCourse/' + course._id" style="text-decoration: none">
                  <v-btn class="ma-1" color="blue lighten-2 white--text font-weight-bold" large :elevation="5">詳細をみる</v-btn>
                </nuxt-link>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
    </v-container>
  </v-app>
</template>

<script>
  import axios from "axios"

  export default {
    data(){
      return {
        earlyCourses: null,
        latterCourses: null,
        dialog: false,
        tabs: null,
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
      axios.get('http://localhost:8000/api/v1/courses/early')
        .then(response => {
        console.log('Success to Fetch API')
        this.earlyCourses = response.data
      }),
      axios.get('http://localhost:8000/api/v1/courses/latter')
        .then(response => {
          console.log('Success to Fetch API')
          this.latterCourses = response.data
          console.log(response.data)
        })
    }
  }
</script>
