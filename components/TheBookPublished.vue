<template>
  <div class="book-published mt-5">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 mb-3" v-for="(item, index) in books" :key="item.id">
          <TheMainCard :item="item" :index="index"/>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        books: 'books',
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>
