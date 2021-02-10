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
  </v-container>
</template>

<script>
  import firebase, { firestore } from '../src/plugins/firebaseConfig'
  import "firebase/firestore"

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

        //**認証後のユーザー情報を取得してオブジェクト化 */
        const getAccountData = result => {
          return new Promise((resolve, reject) => {
            let userObject = {}
            let user = result.user
            userObject.token = result.credential.accessToken
            userObject.refreshToken = user.refreshToken
            userObject.uid = user.uid
            userObject.displayName = user.displayName
            userObject.photoURL = user.photoURL
            userObject.email = user.email
            userObject.isNewUser = result.additionalUserInfo.isNewUser
            userObject.providerId = result.additionalUserInfo.providerId
            console.log(userObject)
            resolve(userObject)
          })
        }

        // ** 実行する
        Promise.resolve()
          .then(this.setPersistence)
          .then(auth)
          .then(getAccountData)
          .then(userObject => this.writeCloudStore(userObject))
          .then(userObject => this.updateLogin(userObject.displayName))
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
      //** CloudStoreに書き込む */
      writeCloudStore(userObject){
        return new Promise((resolve, reject) => {
          var userRef = firestore.collection("v1").doc("users").collection("user")

          userRef.doc(userObject.uid).set({
            userId: userObject.uid,
            displayName: userObject.displayName
          }, {merge: true})
          .then(result => {
            resolve(userObject)
            console.log("Success")
          })
        })
      },
      // Webストレージのログイン情報をアップデートする
      updateLogin(displayName) {
        this.$store.commit('updateLogin', displayName)
      }
    }
  }
</script>
