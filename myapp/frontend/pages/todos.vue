<template>
  <div>
    <p>{{ this.$store.state.count }}</p>
    <button @click="counter">ボタン</button>
<!--    <p>{{  }}</p>-->
  </div>
</template>

<script>
export default {
  methods: {
    counter() {
      this.$store.commit('increment')
    }
  }
}
</script>
