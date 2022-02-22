<template>
  <div class="deafult-layout">
    <the-nav />
    <div class="container pt-5 mt-3">
      <Nuxt />
    </div>
    <the-audio-player  v-if="current_book"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      current_book: 'getCurrentBook'
    })
  },
  created() {
    this.$store.commit('SET_CURRENT_BOOK', this.$store.state.books[0])
  },
};
</script>

<style>
.deafult-layout {
  position: relative;
}
</style>

