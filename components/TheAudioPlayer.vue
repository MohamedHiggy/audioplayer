<template>
  <div class="audio-player  shadow-lg">
      <section class="player-box">

        <div class="player-info">
          <img :src="currentAudio.cover" alt="audio image" width="60" height="60">
          <p class="text"> {{currentAudio.title}}</p>
        </div>

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
          <button class="play-btn" @click="playAudio" :title=" getAudioPaused ? 'pause audio' : 'play audio'">
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

        <div class="player-advanced">

          <button class="advanced-btn" @click="$store.commit('SHUFFLE')" title="shuffle">
            <svg v-if="!shuffle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: #2a6592"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
          </button>

          <button class="advanced-btn" @click="$store.commit('REAPET_AUDIO')" title="reapet audio">
            <svg v-if="!reapetaudio" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M21 6h-5v2h4v9H4V8h5v3l5-4-5-4v3H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #2a6592;"><path d="M21 6h-5v2h4v9H4V8h5v3l5-4-5-4v3H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></path></svg>
          </button>

          <button class="advanced-btn" @click="addNote" title="add note">
            <svg width="20" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V5H2V18.385L3.763 17H18V10H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H4.455L0 22.5V4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H12ZM17 3V0H19V3H22V5H19V8H17V5H14V3H17Z" fill="#000000"/>
            </svg>
          </button>

          <div class="speed-box">
            <button class="advanced-btn audio-speed-btn" @click="showSpeed = !showSpeed" title="audio speed">
              {{audioSpeed}} ✖
            </button>
            <ul class="list-style shadow" v-show="showSpeed">
              <li class="list" v-for="item in speeds" :key="item.id" :class="[audioSpeed == item.speed ? 'active' : '']" @click="handelPlayerSpeed(item)">
                {{item.speed}}
              </li>
            </ul>
          </div>

          <div class="volume-box">
            <button  @click="showslider = !showslider" class="advanced-btn" title="audio volume">
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
      </section>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        showslider: false,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        showSpeed: false,
        dotPosition: null,
        volume: 1,
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
        ]
      }
    },
    watch: {
      volume(e) {
        if (e) {
          this.$store.commit('UPDETE_VOLUME', e)
        }
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
      this.audio.onended = function () {
        vm.nextAudio();
      };

      document.addEventListener('keyup', function (evt) {
          if (evt.keyCode === 179) {
              vm.playAudio();
          }
          if (evt.keyCode === 176) {
              vm.nextAudio();
          }
          if (evt.keyCode === 177) {
              vm.prevAudio();
          }
          if (evt.keyCode === 39) {
              vm.moveAudio('positive');
          }
          if (evt.keyCode === 37) {
              vm.moveAudio('negative');
          }
      });
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
        audioVolume: 'audioVolume',
        shuffle: 'shuffle',
        reapetaudio: 'reapetaudio',
      }),
      ...mapGetters([
        'getAudioPaused'
      ])
    },
    methods: {
      playAudio() {
        if (!this.audioPaused) {
          this.$store.dispatch('updatePlayedAudio', true)
        } else {
          this.$store.dispatch('updatePlayedAudio', false)
        }
      },
      nextAudio () {
        if (this.currentAudioIndex < this.audios.length - 1) {
          this.$store.commit('INCREMENT', true)
        } else {
          this.$store.commit('INCREMENT', false)
        }
        this.$store.commit('UPDATE_AUDIO')
        this.resetPlayer();
      },
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
      prevAudio () {
          if (this.currentAudioIndex > 0) {
            this.$store.commit('DECREMENT', true)
          } else {
            this.$store.commit('DECREMENT', false)
          }
          this.$store.commit('UPDATE_AUDIO')
          this.resetPlayer();
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
      },
      handelPlayerSpeed(event) {
        this.$store.commit('HANDEL_PLAYER_SPEED', event.speed)
        this.showSpeed = false
      },
      moveAudio(event) {
        this.$store.commit('UPDATE_CURRENT_TIME', event)
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
