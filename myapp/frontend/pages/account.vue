<template>
  <v-container>
    <div align="center">
    <v-row align='baseline' class="ma-4">
      <div v-if="this.$store.state.isLogin" align="center">
        <h3 class="ma-4">Name</h3>
        <h1 v-if="this.$store.state.isLogin">{{ this.$store.state.displayName }}</h1>
      </div>
      <div v-else>
        <h1>ログインしておりません。</h1>
      </div>
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
          this.$store.commit('updateLogout')
          console.log('Sign Outしました')
        }).catch((error) => {
          // Error
          console.log(error)
        })
      }
    }
  }
</script>