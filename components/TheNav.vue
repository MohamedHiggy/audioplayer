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

              <div class="search-bar">
                <input type="search" name="search" class="input-search" placeholder="Search for a Book, Author,Revision"/>
                <span class="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                    <g id="Group_35451" data-name="Group 35451" transform="translate(-38.001 -736)">
                      <g id="Group_27418" data-name="Group 27418" transform="translate(38.001 736)">
                        <g id="Group_27417" data-name="Group 27417">
                          <rect id="Rectangle_5674" data-name="Rectangle 5674" width="28" height="28" fill="none"/>
                          <g id="Group_27413" data-name="Group 27413" transform="translate(1.666 1.334)">
                            <path id="Path_169353" data-name="Path 169353" d="M212.559,433.638a13.667,13.667,0,1,1,13.667-13.667A13.682,13.682,0,0,1,212.559,433.638Zm0-25.333a11.667,11.667,0,1,0,11.667,11.667A11.68,11.68,0,0,0,212.559,408.3Z" transform="translate(-198.892 -406.305)" fill="#fff"/>
                            <path id="Path_169354" data-name="Path 169354" d="M220.559,428.972a1,1,0,0,1-.708-.293l-2.667-2.667A1,1,0,0,1,218.6,424.6l2.667,2.667a1,1,0,0,1-.707,1.708Z" transform="translate(-192.892 -400.305)" fill="#fff"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>

                </span>
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
