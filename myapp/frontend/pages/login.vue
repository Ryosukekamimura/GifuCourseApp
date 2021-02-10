<template>
  <v-container>
    <div align="center" class="ma-5">
      <h1>メールアドレス　ログイン</h1>
    </div>

    <div align="center" class="text-center">
      <v-btn @click="googleAuth" color="red ma-4 pa-5">
        <v-row class="pa-5">
          <v-icon class="white--text">
            mdi-google
          </v-icon>
          <h4 class="white--text">
            Googleでログイン
          </h4>
        </v-row>
      </v-btn>
    </div>

    <div>
      <nuxt-link to="todos">
        <h1>TODOS</h1>

      </nuxt-link>
    </div>
  </v-container>
</template>

<script>
  import firebase from '../src/plugins/firebaseConfig'

  export default {
    data() {
      return {
        email: ""
      }
    },
    methods: {
      // ** Google認証を行うときに呼び出す関数
      googleAuth() {
        const auth = () => {
          return new Promise((resolve, reject) => {
            const authUI = new firebase.auth.GoogleAuthProvider();
            console.log('auth')
            firebase
              .auth()
              .signInWithPopup(authUI)
              .then(result => {
                console.log(result)
                resolve(result)
                // ログイン成功時、ログインステータスを変更する
                this.changeLoginStatus()
              })
              .catch(error => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                const email = error.email
                const credential = error.credential
              })
          })
        }

        // ** 実行する
        Promise.resolve()
          .then(this.setPersistence)
          .then(auth)
          // TODO: Firebase CloudStoreに接続する
      },
      // ** 認証状態を明示的にセットする
      setPersistence() {
        return new Promise(((resolve, reject) => {
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(result => {
              resolve()
            })
        }))
      },
      changeLoginStatus() {
        this.$store.commit('changeLogin')
      }
    }
  }
</script>
