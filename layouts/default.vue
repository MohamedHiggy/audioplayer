<template>
  <div class="deafult-layout">
    <the-nav />
    <div class="container pt-5 mt-3">
      <Nuxt />
    </div>

    <!--the audio player-->
    <the-audio-player v-if="current_audio" />

    <!--The draggable box of audio subtitle-->
    <the-draggable-box
      v-show="getAudioPaused"
      @expandBox="expandBox = true"
      :expand-box="expandBox"
    />

    <!--The modal of subtitle-->
    <the-subtitle-box
      @closeExpandBox="expandBox = false"
      :expand-box="expandBox"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      expandBox: false,
    };
  },
  beforeDestroy() {
    if (this.getAudioPaused) {
      this.$store.commit("CLOSE");
    }
  },
  computed: {
    ...mapState({
      currentAudioIndex: 'currentAudioIndex',
      audios: 'audios',
    }),
    ...mapGetters({
      current_audio: "getcurrentAudio",
      getAudioPaused: "getAudioPaused",
    }),
  },
  created() {
    const audioIndex = localStorage.getItem('currentIndex')
    if (audioIndex) {
      this.$store.commit("SET_current_audio", this.audios[audioIndex]);
    } else {
      this.$store.commit("SET_current_audio", this.audios[0]);
    }
  },
};
</script>

<style lang="scss">
</style>

