<template>
  <v-container>
    <div align="center">
    <v-row align='baseline' class="ma-4">
      <h3 class="ma-4">Name</h3>
      <h1>神村 亮佑</h1>
    </v-row>

    <v-row align='baseline' class="ma-4">
      <v-img
        contain
        src='https://avatars.githubusercontent.com/u/52638834?s=400&u=b84ca46232a81c77045d99675a57900d7ba15af6&v=4'
        max-height="256"
        max-width="256"
      ></v-img>
    </v-row>

    <div v-if="this.$store.state.isLogin">
      <v-btn color="light-blue" @click="signOut">
        サインアウト
      </v-btn>
    </div>
    <div v-else>
      <nuxt-link to="/login" style="text-decoration:none">
        <v-btn color="light-orange">
          サインイン
        </v-btn>
      </nuxt-link>
    </div>
    </div>
  </v-container>
</template>


<script>
  import firebase from '../src/plugins/firebaseConfig'

  export default{
    methods: {
      signOut(){
        firebase.auth().signOut().then(() => {
          // Success Sign-out
          this.changeLoginStatus()
          console.log('Sign Outしました')
        }).catch((error) => {
          // Error
          console.log(error)
        })
      },
      changeLoginStatus(){
        this.$store.commit('changeLogin')
      }
    }
  }
</script>