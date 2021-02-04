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
            <v-card tile py-2 class="mx-auto" :elevation="5" align="center">
              <v-card-text>
                {{ course.lecture_name}}
                <br>
                {{ course.lecture_season }}
              </v-card-text>

              <div align="center">
                <v-btn text icon color="gray light-2" @click="add_plus_counter(course)" plain>
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
                {{ course.plus }}
                <v-btn text icon color="gray light-2" @click="add_minus_counter(course)" plain>
                  <v-icon>mdi-thumb-down</v-icon>
                </v-btn>
                {{ course.minus }}
<!--                :id="'purchase-' + item.id"-->

                <nuxt-link :to="'/courses/' + course._id" style="text-decoration: none">
                  <v-btn plain>
                    <v-icon>mdi-message-text</v-icon>
                  </v-btn>
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
