<template>
  <div class="book-published mt-5 pb-5">
      <the-section-header :text="`Recently Published`"/>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 mb-3" v-for="item in books" :key="item.id">
          <TheMainCard :item="item"/>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['books'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
