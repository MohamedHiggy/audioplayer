<template>
  <div class="deafult-layout">
    <the-nav />
    <div class="content-layout">
      <Nuxt />
    </div>

    <!--the audio player-->
    <the-audio-player v-if="current_audio" @leaveNote="leaveNote"/>

    <!--Leave Note modal-->
    <the-leave-note-modal :show="note_modal" :time="note_time" @close="note_modal = false"/>

    <!--The draggable box of audio subtitle-->
    <!-- <the-draggable-box
      @expandBox="expandBox = true"
      :expand-box="expandBox"
    /> -->

    <!--The modal of subtitle-->
    <!-- <the-subtitle-box
      @closeExpandBox="expandBox = false"
      :expand-box="expandBox"
    /> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      expandBox: false,
      note_modal: false,
      note_time: 0
    };
  },
  beforeDestroy() {
    if (this.getAudioPaused) {
      this.$store.commit("CLOSE");
    }
  },
  computed: {
    ...mapState({
      currentAudioIndex: "currentAudioIndex",
      audios: "audios",
    }),
    ...mapGetters({
      current_audio: "getcurrentAudio",
      getAudioPaused: "getAudioPaused",
    }),
  },
  created() {
    const audioIndex = localStorage.getItem("currentIndex");
    if (audioIndex) {
      this.$store.commit("SET_current_audio", this.audios[audioIndex]);
      this.$store.commit("SET_AUDIO_INDEX", audioIndex);
    } else {
      this.$store.commit("SET_current_audio", this.audios[0]);
    }
  },
  methods: {
    leaveNote(event) {
      this.note_time = event
      this.note_modal = true
    }
  }
};
</script>

<style lang="scss">
.deafult-layout {
  position: relative;
  .content-layout {
    margin-top: 100px;
    margin-bottom: 100px;
  }
}

@media (max-width: 768px) {
  .deafult-layout {
    position: relative;
    .content-layout {
      margin-bottom: 300px !important;
    }
  }
}
</style>

