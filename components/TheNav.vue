<template>
  <header class="header-navbar sticky-top w-100">
      <nav class="navbar navbar-expand navbar-light shadow-sm w-100">
          <div class="container-fluid">

              <div class="border rounded-circle shadow-sm p-2 aside-toggle-btn" @click.prevent="asideToggle">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
              </div>

              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <nuxt-link to="/notfications" class="nav-item-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                      </svg>
                    </nuxt-link>
                  </li>
                  <li class="nav-item user-dropdown">
                      <button class="nav-item-content" @click="list = !list">
                          <img src="../assets/icons/shared/avatar.svg" alt="avatar" width="30" height="30">
                          <div class="user-info">
                            <div class="text">
                              <p>Ahmed Mohamed</p>
                              <span>A5dr@domain.com</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <circle cx="12" cy="12" r="9" />
                              <line x1="8" y1="12" x2="12" y2="16" />
                              <line x1="12" y1="8" x2="12" y2="16" />
                              <line x1="16" y1="12" x2="12" y2="16" />
                            </svg>
                          </div>
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
