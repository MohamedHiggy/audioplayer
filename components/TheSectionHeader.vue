<template>
  <div class="section-header mb-4">
    <p class="header-title">{{text}}</p>
    <div class="header-right">
      <p class="right-text">View all</p>
      <div class="slider-button">
        <button class="button-slide disabled" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #3A9679"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
        </button>
        <button class="button-slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #fff"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
