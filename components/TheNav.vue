<template>
  <nav class="navbar navbar-expand-md fixed-top shadow-sm">
    <nuxt-link to="/" class="navbar-brand">Home</nuxt-link>
    <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link to="/video" class="nav-link">record video</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
