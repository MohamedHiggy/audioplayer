<template>
  <header class="header-navbar sticky-top w-100">
      <nav class="navbar navbar-expand navbar-light shadow-sm w-100">
          <div class="container-fluid">

              <div class="border rounded-circle shadow-sm p-2 aside-toggle-btn" @click.prevent="asideToggle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                      class="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
              </div>

              <ul class="navbar-nav ms-auto">

                  <li class="nav-item user-dropdown">
                      <button class="username" @click="list = !list">
                          <span>user name</span>
                      </button>
                      <transition name="fade">
                        <ul class="droopdown-menu shadow-sm" v-if="list">
                            <li class="list">
                              <button class="list-btn" type="button">Logout</button>
                            </li>
                        </ul>
                      </transition>
                  </li>
              </ul>
          </div>
      </nav>
  </header>
</template>

<script>
  export default {
    data() {
        return {
            list: false,
        };
    },
    methods: {
        asideToggle() {
            this.$emit("toggleAside");
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
