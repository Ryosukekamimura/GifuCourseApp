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


                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        @click.stop="dialog = true"
                      >
                        <v-icon>mdi-comment</v-icon>
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="headline grey lighten-2">
                        Privacy Policy
                      </v-card-title>

                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          text
                          @click="dialog = false"
                        >
                          I accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
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
