<template>
  <div class="d-flex w-100">
    <the-side-bar :activeAside="activeAside" />
    <main
      class="w-100 bg-light d-flex flex-column"
      :class="{ active: activeAside }"
    >
      <the-nav @toggleAside="toggleAside" />
      <div class="container-fluid pt-4 content" :class="[ current_book ? 'isAudio': '']">
        <Nuxt />
        <the-audio-player  v-if="current_book"/>
      </div>
    </main>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      activeAside: false
    };
  },
  computed: {
    ...mapGetters({
      current_book: 'getCurrentBook'
    })
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  created() {
    let vm = this;
    vm.onResize()
    this.$store.commit('SET_CURRENT_BOOK', this.$store.state.books[0])
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth < 1024) {
        this.activeAside = true;
      } else {
        this.activeAside = false;
      }
    },
    toggleAside() {
      this.activeAside = !this.activeAside;
    },
  },
};
</script>

