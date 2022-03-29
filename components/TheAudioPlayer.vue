<template>
  <div class="audio-player  shadow-lg">
      <section class="player-box">

        <div class="player-info">
          <img :src="currentAudio.cover" alt="audio image" width="60" height="60">
          <p class="text"> {{currentAudio.title}}</p>
        </div>

        <the-main-btns @resetPlayer="resetPlayer"/>

        <div class="player-progress" ref="progress">
            <div class="player-notes" v-for="item in notes" :key="item.audio_id">
              <ul class="list-style" v-if="item.audio_id === currentAudio.id">
                <the-note-box
                  v-for="(note, index) in item.audio_notes"
                  :key="index"
                  :note_text="note.note_text"
                  :note_time="note.note_time"
                  :current-time="audio.currentTime"
                  :duration="audio.duration"/>
              </ul>
            </div>
            <div class="progress-bar" @click="clickProgress">
              <div class="progress-current" :style="{ width : barWidth }"></div>
              <div class="progress-dot" :style="[barWidth == 0 ? {left : 0} : {left : dotPosition}]">
                <span></span>
              </div>
            </div>
            <div class="progress-bottom">
              <div class="progress-time">{{ currentTime ? currentTime : '00:00' }}</div>
              <div class="progress-time">{{ duration ? duration : '00:00' }}</div>
            </div>
            <div v-cloak></div>
        </div>

        <the-additions-btns @leaveNote="$emit('leaveNote', $event)"/>
      </section>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        dotPosition: null,
      }
    },
    created() {
      let vm = this;
      this.$store.dispatch('updatePlayedAudio', false)

      this.audio.ontimeupdate = function () {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function () {
        vm.generateTime();
      };
    },
    computed: {
      ...mapState({
        notes: 'notes',
        currentAudio: 'current_audio',
        audioPaused: 'audioPaused',
        audio: 'audio',
        currentAudioIndex: 'currentAudioIndex',
        audios: 'audios',
        audioSpeed: 'audioSpeed',
        shuffle: 'shuffle',
        reapetaudio: 'reapetaudio',
      }),
      ...mapGetters([
        'getAudioPaused'
      ])
    },
    methods: {
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.$store.commit('RESET')
        setTimeout(() => {
          if (this.getAudioPaused) {
            this.$store.dispatch('updatePlayedAudio', true)
          } else {
            this.$store.dispatch('updatePlayedAudio', false)
          }
        }, 300);
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        let dot = (100 / this.audio.duration) * this.audio.currentTime - 0.5;
        this.dotPosition = dot + "%"
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";

        this.$store.commit('UPDATE_CURRENT_TIME', (maxduration * percentage) / 100)
        this.$store.dispatch('updatePlayedAudio', true)

      },
      clickProgress(e) {
        this.$store.dispatch('updatePlayedAudio', false)
        this.updateBar(e.pageX);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
