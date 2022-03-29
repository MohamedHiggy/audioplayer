<template>
  <div class="player-actions">
    <button class="side-btn" @click="prevAudio" title="prev audio">
      <svg id="Group_28442" data-name="Group 28442" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <rect id="Rectangle_6072" data-name="Rectangle 6072" width="24" height="24" fill="none"/>
        <g id="Group_28440" data-name="Group 28440" transform="translate(2.77 5)">
          <path id="Path_233467" data-name="Path 233467" d="M17.165,7.22v9.57A2.556,2.556,0,0,1,13.335,19l-4.15-2.39-4.15-2.4a2.544,2.544,0,0,1,0-4.41l4.15-2.4,4.15-2.39A2.553,2.553,0,0,1,17.165,7.22Z" transform="translate(0.065 -4.664)" fill="#2a6592"/>
          <path id="Path_233468" data-name="Path 233468" d="M20.24,18.93a.755.755,0,0,0,.75-.75V5.82a.75.75,0,0,0-1.5,0V18.18A.749.749,0,0,0,20.24,18.93Z" transform="translate(-19.49 -4.664)" fill="#2a6592"/>
        </g>
      </svg>
    </button>
    <button class="center-btn" @click="moveAudio('negative')" title="decrease 15 sec">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="Group_28451" data-name="Group 28451" transform="translate(-155 -727)">
          <rect id="Rectangle_6074" data-name="Rectangle 6074" width="24" height="24" transform="translate(155 727)" fill="none"/>
          <g id="Group_28450" data-name="Group 28450" transform="translate(154.65 726.74)">
            <path id="Path_233477" data-name="Path 233477" d="M14.43,16.92H12.14a.75.75,0,1,1,0-1.5h2.29a.78.78,0,0,0,0-1.56H12.14a.767.767,0,0,1-.61-.31.746.746,0,0,1-.1-.68l.76-2.29a.741.741,0,0,1,.71-.51h3.06a.75.75,0,0,1,0,1.5H13.44l-.26.79h1.25a2.28,2.28,0,0,1,0,4.56Z" fill="#2a6592"/>
            <path id="Path_233478" data-name="Path 233478" d="M9.54,16.92a.755.755,0,0,1-.75-.75V12.78L8.6,13a.747.747,0,1,1-1.11-1l1.5-1.67a.761.761,0,0,1,.83-.2.748.748,0,0,1,.48.7v5.35A.756.756,0,0,1,9.54,16.92Z" fill="#2a6592"/>
            <path id="Path_233479" data-name="Path 233479" d="M12,3.48c-.08,0-.16.01-.24.01l.82-1.02a.738.738,0,0,0-.12-1.05.747.747,0,0,0-1.05.12L9.44,4c-.01.01-.01.02-.02.04a.826.826,0,0,0-.07.13,1.121,1.121,0,0,0-.05.13.66.66,0,0,0-.01.14v.2c.01.03.03.05.04.08.02.05.04.09.06.14a.524.524,0,0,0,.1.11.241.241,0,0,0,.06.08c.02.01.03.02.05.03a.2.2,0,0,0,.08.04.523.523,0,0,0,.16.06.2.2,0,0,0,.1.02c.03,0,.05.01.08.01a.145.145,0,0,0,.07-.02.272.272,0,0,0,.09,0,7.906,7.906,0,0,1,1.81-.22,8.14,8.14,0,1,1-8.14,8.14A8.055,8.055,0,0,1,5.5,8.25a.75.75,0,0,0-1.2-.9,9.51,9.51,0,0,0-1.95,5.76A9.64,9.64,0,1,0,12,3.48Z" fill="#2a6592"/>
          </g>
        </g>
      </svg>
    </button>
    <button class="play-btn" @click="playAudio" :title="getAudioPaused ? 'pause audio' : 'play audio'">
      <svg v-if="!getAudioPaused" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g id="Group_28436" data-name="Group 28436" transform="translate(-167 -738)">
          <rect id="Rectangle_6071" data-name="Rectangle 6071" width="32" height="32" transform="translate(167 738)" fill="none"/>
          <path id="Path_233489" data-name="Path 233489" d="M3.76,8.1v12.85A3.432,3.432,0,0,0,8.9,23.914L14.475,20.7l5.573-3.223a3.416,3.416,0,0,0,0-5.922L14.475,8.338,8.9,5.128A3.428,3.428,0,0,0,3.76,8.1Z" transform="translate(170.239 739.335)" fill="#fff"/>
        </g>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: #fff"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
    </button>
    <button class="center-btn" @click="moveAudio('positive')" title="increase 15 sec">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="Group_28449" data-name="Group 28449" transform="translate(-155 -726)">
          <rect id="Rectangle_6073" data-name="Rectangle 6073" width="24" height="24" transform="translate(155 726)" fill="none"/>
          <g id="Group_28448" data-name="Group 28448" transform="translate(154.65 725.753)">
            <path id="Path_233474" data-name="Path 233474" d="M14.43,16.92H12.14a.75.75,0,1,1,0-1.5h2.29a.78.78,0,0,0,0-1.56H12.14a.767.767,0,0,1-.61-.31.746.746,0,0,1-.1-.68l.76-2.29a.741.741,0,0,1,.71-.51h3.06a.75.75,0,0,1,0,1.5H13.44l-.26.79h1.25a2.28,2.28,0,0,1,0,4.56Z" fill="#2a6592"/>
            <path id="Path_233475" data-name="Path 233475" d="M9.54,16.92a.755.755,0,0,1-.75-.75V12.78L8.6,13a.747.747,0,1,1-1.11-1l1.5-1.67a.761.761,0,0,1,.83-.2.748.748,0,0,1,.48.7v5.35A.756.756,0,0,1,9.54,16.92Z" fill="#2a6592"/>
            <path id="Path_233476" data-name="Path 233476" d="M19.69,7.35a.75.75,0,1,0-1.2.9,8.055,8.055,0,0,1,1.65,4.86A8.14,8.14,0,1,1,12,4.98a7.841,7.841,0,0,1,1.81.22.272.272,0,0,0,.09,0c.03,0,.05.02.07.02s.05-.01.08-.01a.44.44,0,0,0,.1-.02.758.758,0,0,0,.16-.06c.03-.02.06-.03.09-.05.01-.01.03-.01.04-.02.03-.02.04-.05.06-.07a.58.58,0,0,0,.1-.12.591.591,0,0,0,.06-.14c.01-.03.03-.06.04-.09V4.59a.379.379,0,0,0,0-.15.66.66,0,0,0-.01-.14,1.121,1.121,0,0,0-.05-.13.611.611,0,0,0-.07-.14A.037.037,0,0,0,14.56,4L12.58,1.53a.748.748,0,0,0-1.05-.12.757.757,0,0,0-.12,1.05l.82,1.02c-.08,0-.16-.01-.24-.01a9.64,9.64,0,1,0,9.64,9.64A9.5,9.5,0,0,0,19.69,7.35Z" fill="#2a6592"/>
          </g>
        </g>
      </svg>
    </button>
    <button class="side-btn" @click="nextAudio" title="next audio">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g id="Group_28441" data-name="Group 28441" transform="translate(-285 -738)">
            <rect id="Rectangle_6072" data-name="Rectangle 6072" width="24" height="24" transform="translate(285 738)" fill="none"/>
            <g id="Group_28440" data-name="Group 28440" transform="translate(285.24 738.336)">
              <path id="Path_233467" data-name="Path 233467" d="M3.76,7.22v9.57A2.556,2.556,0,0,0,7.59,19l4.15-2.39,4.15-2.4a2.544,2.544,0,0,0,0-4.41L11.74,7.4,7.59,5.01A2.553,2.553,0,0,0,3.76,7.22Z" fill="#2a6592"/>
              <path id="Path_233468" data-name="Path 233468" d="M20.24,18.93a.755.755,0,0,1-.75-.75V5.82a.75.75,0,0,1,1.5,0V18.18A.749.749,0,0,1,20.24,18.93Z" fill="#2a6592"/>
            </g>
          </g>
        </svg>
    </button>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapState({
        audio: 'audio',
        audios: 'audios',
        audioPaused: 'audioPaused',
        currentAudioIndex: 'currentAudioIndex',
      }),
      ...mapGetters([
        'getAudioPaused'
      ])
    },
    created() {
      let vm = this;
      this.audio.onended = function () {
        vm.nextAudio();
      };
      document.addEventListener('keyup', function (event) {
          if (event.keyCode === 179) {
              vm.playAudio();
          }
          if (event.keyCode === 176) {
              vm.nextAudio();
          }
          if (event.keyCode === 177) {
              vm.prevAudio();
          }
          if (event.keyCode === 39) {
              vm.moveAudio('positive');
          }
          if (event.keyCode === 37) {
              vm.moveAudio('negative');
          }
      });
    },
    methods: {
      playAudio() {
        !this.audioPaused ? this.$store.dispatch('updatePlayedAudio', true) : this.$store.dispatch('updatePlayedAudio', false)
      },
      moveAudio(event) {
        this.$store.commit('UPDATE_CURRENT_TIME', event)
      },
      nextAudio() {
        this.currentAudioIndex < this.audios.length - 1 ? this.$store.commit('INCREMENT', true) : this.$store.commit('INCREMENT', false)
        this.$store.commit('UPDATE_AUDIO')
        this.$emit('resetPlayer')
      },
      prevAudio() {
        this.currentAudioIndex > 0 ? this.$store.commit('DECREMENT', true) : this.$store.commit('DECREMENT', false)
        this.$store.commit('UPDATE_AUDIO')
        this.$emit('resetPlayer')
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
