<template>
  <div>
    <p v-if="this.$store.state.isLogin">ログインしています</p>
    <p v-else>ログインしていません。</p>
    <button @click="changeLoginStatus">ボタン</button>
  </div>
</template>

<script>
export default {
  methods: {
    counter() {
      this.$store.commit('increment')
    },
    changeMessage() {
      this.$store.commit('changeMessage', this.message)
    },
    changeLoginStatus(){
      console.log('Login Status is True')
      this.$store.commit('changeLogin')
    }
  }
}
</script>
