<template>
  <div class="audio-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 mb-3" v-for="(item, index) in audios" :key="item.id">
          <TheMainCard :item="item" :index="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        audios: 'audios',
      })
    },
  }
</script>

<style lang="scss"></style>
