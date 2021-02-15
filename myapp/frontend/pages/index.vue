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
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">
            An awesome title
          </v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>





    </v-container>
  </v-app>
</template>

<script>
  import axios from "axios"

  export default {
    data(){
      return {
        courses: null,
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
      axios.get('http://localhost:8000/api/v1/courses')
        .then(response => {
        console.log('Success to Fetch API')
        this.courses = response.data
      })
    }
  }
</script>
