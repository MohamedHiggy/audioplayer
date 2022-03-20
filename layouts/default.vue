<template>
  <div class="deafult-layout">
    <the-nav />
    <div class="container pt-5 mt-3">
      <Nuxt />
    </div>
    <the-audio-player  v-if="current_audio"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  beforeDestroy() {
    if (this.getAudioPaused) {
      this.$store.commit('CLOSE')
    }
  },
  computed: {
    ...mapGetters({
      current_audio: 'getcurrentAudio',
      getAudioPaused: 'getAudioPaused'
    })
  },
  created() {
    this.$store.commit('SET_current_audio', this.$store.state.audios[0])
  },
};
</script>

<style>
.deafult-layout {
  position: relative;
}
</style>

