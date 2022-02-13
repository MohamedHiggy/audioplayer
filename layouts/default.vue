<template>
  <div class="d-flex w-100">
      <the-side-bar :activeAside="activeAside"/>
      <main class="w-100 bg-light d-flex flex-column" :class="{active: activeAside}">
          <the-nav @toggleAside="toggleAside"/>
          <div class="container-fluid pt-4 pb-5 content">
              <Nuxt />
              <the-audio-player :playedBook="playedBook"/>
          </div>
      </main>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        activeAside: false,
      }
    },
    computed: {
      ...mapState(['playedBook'])
    },
    mounted() {
      this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
      })
    },
    created() {
      if (process.browser){
        this.onResize()
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },
    methods: {
      onResize() {
          if (window.innerWidth < 1024) {
            this.activeAside = true
          } else {
            this.activeAside = false
          }
      },
      toggleAside() {
        this.activeAside = !this.activeAside
      }
    }
  }
</script>


<style lang="scss">

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  text-decoration: none !important;
}

label {
  cursor: pointer;
  margin-bottom: 0;
}

/* Firefox */
input[type=checkbox] {
  cursor: pointer;
}

select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  cursor: pointer;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}

textarea {
  resize: none;
  border-radius: 10px !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #A0AEC0;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #A0AEC0;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #A0AEC0;
}

p {
  margin: 0;
}

.content {
  background-color: #F7F9FD;
  min-height: 100vh;
  position: relative;
}

main.active{
    margin-left: 0px !important;
}
main{
    margin-left: 230px;
    transition: margin 0.5s;
    min-height: 100vh;
}

.aside-nav.active{
    width: 0px !important;
}

@media(min-width:300px) and (max-width:1023.98px){
    .aside-nav{
        top: 107px !important;
    }
    main{
        margin-left: 0px !important;
        overflow: hidden;
        margin-top: 100px !important;
    }
    .header-navbar{
        position:fixed !important;
    }
}

</style>
