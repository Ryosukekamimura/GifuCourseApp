<template>
    <v-container fluid class="ma-2">
        <v-row no-gutters>
          <v-col
            v-for="course in courses"
            :key="course"
            cols="12"
            sm="4"
            class="mb-4"
          >
            <v-card tile py-2 class="mx-auto" :elevation="5">
              <v-card-text>
                {{ course.lecture_name}}
                <br>
                {{ course.lecture_season }}
              </v-card-text>

              <div align="center">
                <v-btn text icon color="gray light-2" @click="add_plus_counter(course.plus)" plain>
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
                {{ course.plus }}
                <v-btn text icon color="gray light-2" @click="add_minus_counter(course.minus)" plain>
                  <v-icon>mdi-thumb-down</v-icon>
                </v-btn>
                {{ course.minus }}
                <v-btn>
                  <v-icon>mdi-comment</v-icon>
                </v-btn>
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
        msg: "Welcome to Vue.js App",
        courses: null,
      }
    },
    methods: {
      add_plus_counter: function(plus_value) {
        plus_value += 1
      },
      add_minus_counter: function(minus_value) {
        minus_value += 1
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
