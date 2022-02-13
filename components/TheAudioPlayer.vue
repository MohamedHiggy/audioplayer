<template>
  <div class="audio-player shadow">
    <h1>{{playedBook}}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      playedBook : {
        type: Object,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
