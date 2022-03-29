<template>
  <div class="player-addition">
    <button class="addition-btn" @click="$store.commit('SHUFFLE')" title="shuffle">
      <svg v-if="!shuffle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: #2a6592"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
    </button>
    <button class="addition-btn" @click="$store.commit('REAPET_AUDIO')" title="reapet audio">
      <svg v-if="!reapetaudio" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M21 6h-5v2h4v9H4V8h5v3l5-4-5-4v3H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></path></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #2a6592;"><path d="M21 6h-5v2h4v9H4V8h5v3l5-4-5-4v3H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></path></svg>
    </button>
    <button class="addition-btn" @click="addNote" title="add note">
      <svg width="20" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V5H2V18.385L3.763 17H18V10H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H4.455L0 22.5V4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H12ZM17 3V0H19V3H22V5H19V8H17V5H14V3H17Z" fill="#000000"/>
      </svg>
    </button>
    <div class="speed-box">
      <button class="addition-btn audio-speed-btn" @click="showSpeed = !showSpeed" title="audio speed">
        {{audioSpeed}} ✖
      </button>
      <ul class="list-style shadow" v-show="showSpeed">
        <li class="list" v-for="item in speeds" :key="item.id" :class="[audioSpeed == item.speed ? 'active' : '']" @click="handelPlayerSpeed(item)">
          {{item.speed}}
        </li>
      </ul>
    </div>
    <div class="volume-box">
      <button  @click="showslider = !showslider" class="addition-btn" title="audio volume">
        <svg v-if="audioVolume != 0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g id="Group_28449" data-name="Group 28449" transform="translate(-155 -726)">
            <rect id="Rectangle_6073" data-name="Rectangle 6073" width="24" height="24" transform="translate(155 726)" fill="none"/>
            <g id="Group_29111" data-name="Group 29111" transform="translate(154.75 726.592)">
              <path id="Path_233490" data-name="Path 233490" d="M18,16.75a.76.76,0,0,1-.45-.15.75.75,0,0,1-.15-1.05,5.94,5.94,0,0,0,0-7.1.75.75,0,0,1,1.2-.9,7.471,7.471,0,0,1,0,8.9A.739.739,0,0,1,18,16.75Z"/>
              <path id="Path_233491" data-name="Path 233491" d="M19.83,19.25a.76.76,0,0,1-.45-.15.75.75,0,0,1-.15-1.05,10.14,10.14,0,0,0,0-12.1.75.75,0,1,1,1.2-.9,11.64,11.64,0,0,1,0,13.9A.726.726,0,0,1,19.83,19.25Z"/>
              <path id="Path_233492" data-name="Path 233492" d="M14.02,3.78a3.911,3.911,0,0,0-4.01.45L7.09,6.06a1.3,1.3,0,0,1-.66.19H5A3.381,3.381,0,0,0,1.25,10v4A3.381,3.381,0,0,0,5,17.75H6.43a1.3,1.3,0,0,1,.66.19l2.92,1.83a4.832,4.832,0,0,0,2.54.82,3,3,0,0,0,1.47-.37,3.9,3.9,0,0,0,1.73-3.63V7.41A3.9,3.9,0,0,0,14.02,3.78Z"/>
            </g>
          </g>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #000"><path d="m7.727 6.313-4.02-4.02-1.414 1.414 18 18 1.414-1.414-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path></svg>
      </button>
      <input type="range" v-if="showslider" class="input-range" step="0.05" min="0" max="1" v-model="volume">
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        showslider: false,
        volume: 1,
        showSpeed: false,
        speeds: [
          {
            id: 1,
            speed: 0.25
          },
          {
            id: 2,
            speed: 0.5
          },
          {
            id: 3,
            speed: 0.75
          },
          {
            id: 4,
            speed: 1
          },
          {
            id: 5,
            speed: 1.5
          },
          {
            id: 6,
            speed: 1.75
          },
          {
            id: 7,
            speed: 2
          },
        ],
      }
    },
    watch: {
      volume(e) {
        if (e) {
          this.$store.commit('UPDETE_VOLUME', e)
        }
      }
    },
    computed: {
      ...mapState({
        audio: 'audio',
        audioVolume: 'audioVolume',
        audioSpeed: 'audioSpeed',
        shuffle: 'shuffle',
        audioPaused: 'audioPaused',
        reapetaudio: 'reapetaudio',
      }),
    },
    methods: {
      handelPlayerSpeed(event) {
        this.$store.commit('HANDEL_PLAYER_SPEED', event.speed)
        this.showSpeed = false
      },
      addNote() {
        this.$emit('leaveNote', this.audio.currentTime)
        if (this.audioPaused) {
          this.$store.dispatch('updatePlayedAudio', false)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
