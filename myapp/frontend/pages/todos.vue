<template>
  <div>
    <p>{{ $store.state.counter }}</p>
    <button @click="counter">ボタン</button>
<!--    <p>{{  }}</p>-->
  </div>
</template>

<script>
export default {
  methods: {
    counter() {
      this.$store.state.increment
    }
  }
}
</script>
