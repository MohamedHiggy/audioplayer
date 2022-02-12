<template>
  <div class="book-published mt-5">
      <the-section-header :text="`Recently Published`"/>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 mb-3" v-for="(item, index) in 8" :key="index">
          <TheMainCard />
        </div>
      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
