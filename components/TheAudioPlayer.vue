<template>
  <div class="audio-player shadow">
        <section class="player-box">
          <div class="player-info">
            <img :src="currentBook.cover" alt="book image" width="60" height="60">
            <p class="text"> {{currentBook.title}}</p>
          </div>
          <div class="player-actions">
            <button class="side-btn" @click="prevAudio">
              <svg id="Group_28442" data-name="Group 28442" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect id="Rectangle_6072" data-name="Rectangle 6072" width="24" height="24" fill="none"/>
                <g id="Group_28440" data-name="Group 28440" transform="translate(2.77 5)">
                  <path id="Path_233467" data-name="Path 233467" d="M17.165,7.22v9.57A2.556,2.556,0,0,1,13.335,19l-4.15-2.39-4.15-2.4a2.544,2.544,0,0,1,0-4.41l4.15-2.4,4.15-2.39A2.553,2.553,0,0,1,17.165,7.22Z" transform="translate(0.065 -4.664)" fill="#3a9679"/>
                  <path id="Path_233468" data-name="Path 233468" d="M20.24,18.93a.755.755,0,0,0,.75-.75V5.82a.75.75,0,0,0-1.5,0V18.18A.749.749,0,0,0,20.24,18.93Z" transform="translate(-19.49 -4.664)" fill="#3a9679"/>
                </g>
              </svg>
            </button>
            <button class="center-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="Group_28451" data-name="Group 28451" transform="translate(-155 -727)">
                  <rect id="Rectangle_6074" data-name="Rectangle 6074" width="24" height="24" transform="translate(155 727)" fill="none"/>
                  <g id="Group_28450" data-name="Group 28450" transform="translate(154.65 726.74)">
                    <path id="Path_233477" data-name="Path 233477" d="M14.43,16.92H12.14a.75.75,0,1,1,0-1.5h2.29a.78.78,0,0,0,0-1.56H12.14a.767.767,0,0,1-.61-.31.746.746,0,0,1-.1-.68l.76-2.29a.741.741,0,0,1,.71-.51h3.06a.75.75,0,0,1,0,1.5H13.44l-.26.79h1.25a2.28,2.28,0,0,1,0,4.56Z" fill="#3a9679"/>
                    <path id="Path_233478" data-name="Path 233478" d="M9.54,16.92a.755.755,0,0,1-.75-.75V12.78L8.6,13a.747.747,0,1,1-1.11-1l1.5-1.67a.761.761,0,0,1,.83-.2.748.748,0,0,1,.48.7v5.35A.756.756,0,0,1,9.54,16.92Z" fill="#3a9679"/>
                    <path id="Path_233479" data-name="Path 233479" d="M12,3.48c-.08,0-.16.01-.24.01l.82-1.02a.738.738,0,0,0-.12-1.05.747.747,0,0,0-1.05.12L9.44,4c-.01.01-.01.02-.02.04a.826.826,0,0,0-.07.13,1.121,1.121,0,0,0-.05.13.66.66,0,0,0-.01.14v.2c.01.03.03.05.04.08.02.05.04.09.06.14a.524.524,0,0,0,.1.11.241.241,0,0,0,.06.08c.02.01.03.02.05.03a.2.2,0,0,0,.08.04.523.523,0,0,0,.16.06.2.2,0,0,0,.1.02c.03,0,.05.01.08.01a.145.145,0,0,0,.07-.02.272.272,0,0,0,.09,0,7.906,7.906,0,0,1,1.81-.22,8.14,8.14,0,1,1-8.14,8.14A8.055,8.055,0,0,1,5.5,8.25a.75.75,0,0,0-1.2-.9,9.51,9.51,0,0,0-1.95,5.76A9.64,9.64,0,1,0,12,3.48Z" fill="#3a9679"/>
                  </g>
                </g>
              </svg>
            </button>
            <button class="play-btn" @click="playAudio">
              <svg v-if="!getAudioPaused" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g id="Group_28436" data-name="Group 28436" transform="translate(-167 -738)">
                  <rect id="Rectangle_6071" data-name="Rectangle 6071" width="32" height="32" transform="translate(167 738)" fill="none"/>
                  <path id="Path_233489" data-name="Path 233489" d="M3.76,8.1v12.85A3.432,3.432,0,0,0,8.9,23.914L14.475,20.7l5.573-3.223a3.416,3.416,0,0,0,0-5.922L14.475,8.338,8.9,5.128A3.428,3.428,0,0,0,3.76,8.1Z" transform="translate(170.239 739.335)" fill="#fff"/>
                </g>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="fill: #fff"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
            </button>
            <button class="center-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="Group_28449" data-name="Group 28449" transform="translate(-155 -726)">
                  <rect id="Rectangle_6073" data-name="Rectangle 6073" width="24" height="24" transform="translate(155 726)" fill="none"/>
                  <g id="Group_28448" data-name="Group 28448" transform="translate(154.65 725.753)">
                    <path id="Path_233474" data-name="Path 233474" d="M14.43,16.92H12.14a.75.75,0,1,1,0-1.5h2.29a.78.78,0,0,0,0-1.56H12.14a.767.767,0,0,1-.61-.31.746.746,0,0,1-.1-.68l.76-2.29a.741.741,0,0,1,.71-.51h3.06a.75.75,0,0,1,0,1.5H13.44l-.26.79h1.25a2.28,2.28,0,0,1,0,4.56Z" fill="#3a9679"/>
                    <path id="Path_233475" data-name="Path 233475" d="M9.54,16.92a.755.755,0,0,1-.75-.75V12.78L8.6,13a.747.747,0,1,1-1.11-1l1.5-1.67a.761.761,0,0,1,.83-.2.748.748,0,0,1,.48.7v5.35A.756.756,0,0,1,9.54,16.92Z" fill="#3a9679"/>
                    <path id="Path_233476" data-name="Path 233476" d="M19.69,7.35a.75.75,0,1,0-1.2.9,8.055,8.055,0,0,1,1.65,4.86A8.14,8.14,0,1,1,12,4.98a7.841,7.841,0,0,1,1.81.22.272.272,0,0,0,.09,0c.03,0,.05.02.07.02s.05-.01.08-.01a.44.44,0,0,0,.1-.02.758.758,0,0,0,.16-.06c.03-.02.06-.03.09-.05.01-.01.03-.01.04-.02.03-.02.04-.05.06-.07a.58.58,0,0,0,.1-.12.591.591,0,0,0,.06-.14c.01-.03.03-.06.04-.09V4.59a.379.379,0,0,0,0-.15.66.66,0,0,0-.01-.14,1.121,1.121,0,0,0-.05-.13.611.611,0,0,0-.07-.14A.037.037,0,0,0,14.56,4L12.58,1.53a.748.748,0,0,0-1.05-.12.757.757,0,0,0-.12,1.05l.82,1.02c-.08,0-.16-.01-.24-.01a9.64,9.64,0,1,0,9.64,9.64A9.5,9.5,0,0,0,19.69,7.35Z" fill="#3a9679"/>
                  </g>
                </g>
              </svg>
            </button>
            <button class="side-btn" @click="nextAudio">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g id="Group_28441" data-name="Group 28441" transform="translate(-285 -738)">
                    <rect id="Rectangle_6072" data-name="Rectangle 6072" width="24" height="24" transform="translate(285 738)" fill="none"/>
                    <g id="Group_28440" data-name="Group 28440" transform="translate(285.24 738.336)">
                      <path id="Path_233467" data-name="Path 233467" d="M3.76,7.22v9.57A2.556,2.556,0,0,0,7.59,19l4.15-2.39,4.15-2.4a2.544,2.544,0,0,0,0-4.41L11.74,7.4,7.59,5.01A2.553,2.553,0,0,0,3.76,7.22Z" fill="#3a9679"/>
                      <path id="Path_233468" data-name="Path 233468" d="M20.24,18.93a.755.755,0,0,1-.75-.75V5.82a.75.75,0,0,1,1.5,0V18.18A.749.749,0,0,1,20.24,18.93Z" fill="#3a9679"/>
                    </g>
                  </g>
                </svg>
            </button>
          </div>
          <div class="player-progress" ref="progress">
              <div class="progress-top">
              </div>
              <div class="progress-bar">
                <div class="progress-current" :style="{ width : barWidth }"></div>
                <div class="progress-dot" :style="{ left : barWidth }">
                  <span></span>
                </div>
              </div>
              <div class="progress-bottom">
                <div class="progress-time">{{ currentTime }}</div>
                <div class="progress-time">{{ duration }}</div>
              </div>
          </div>
          <div class="player-advanced">

            <button class="advanced-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g id="Group_26874" data-name="Group 26874" transform="translate(-91 -577)">
                    <rect id="Rectangle_2692" data-name="Rectangle 2692" width="24" height="24" transform="translate(91 577)" fill="none"/>
                    <g id="Group_28446" data-name="Group 28446" transform="translate(90.75 576.75)">
                      <path id="Path_233469" data-name="Path 233469" d="M22,3.75H2a.75.75,0,0,1,0-1.5H22a.75.75,0,0,1,0,1.5Z"/>
                      <path id="Path_233470" data-name="Path 233470" d="M11,9.75H2a.75.75,0,0,1,0-1.5h9a.75.75,0,0,1,0,1.5Z"/>
                      <path id="Path_233471" data-name="Path 233471" d="M8,15.75H2a.75.75,0,0,1,0-1.5H8a.75.75,0,0,1,0,1.5Z"/>
                      <path id="Path_233472" data-name="Path 233472" d="M6,21.75H2a.75.75,0,0,1,0-1.5H6a.75.75,0,0,1,0,1.5Z"/>
                      <path id="Path_233473" data-name="Path 233473" d="M21.86,7.68a2.621,2.621,0,0,0-2.35-.28L15.16,8.58a2.477,2.477,0,0,0-1.89,2.47v6.23a2.888,2.888,0,0,0-1.43-.39,2.93,2.93,0,1,0,2.93,2.93V14.17l6.48-1.77v3.43a2.888,2.888,0,0,0-1.43-.39,2.93,2.93,0,1,0,2.93,2.93V9.87A2.569,2.569,0,0,0,21.86,7.68ZM11.84,21.25a1.43,1.43,0,1,1,1.43-1.43A1.43,1.43,0,0,1,11.84,21.25Zm7.98-1.45a1.43,1.43,0,1,1,1.43-1.43A1.43,1.43,0,0,1,19.82,19.8Z"/>
                    </g>
                  </g>
                </svg>
            </button>

            <button class="advanced-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="Group_35455" data-name="Group 35455" transform="translate(-23 -75)">
                  <g id="Group_28491" data-name="Group 28491" transform="translate(23 75)">
                    <rect id="Rectangle_2678" data-name="Rectangle 2678" width="24" height="24" fill="none"/>
                    <g id="Group_28490" data-name="Group 28490" transform="translate(3.75 4.5)">
                      <path id="Path_233501" data-name="Path 233501" d="M22.073,19.6H11.1a.992.992,0,1,1,0-1.984h10.97a.992.992,0,0,1,0,1.984Z" transform="translate(-6.564 -3.892)"/>
                      <path id="Path_233502" data-name="Path 233502" d="M22.073,13.314H11.1a.992.992,0,0,1,0-1.984h10.97a.992.992,0,0,1,0,1.984Z" transform="translate(-6.564 -4.46)"/>
                      <path id="Path_233503" data-name="Path 233503" d="M22.073,7.014H11.1a.992.992,0,0,1,0-1.984h10.97a.992.992,0,0,1,0,1.984Z" transform="translate(-6.564 -5.03)"/>
                      <path id="Path_233507" data-name="Path 233507" d="M11.1,7.014h0a.992.992,0,0,1,0-1.984h0a.992.992,0,1,1,0,1.984Z" transform="translate(-10.11 -5.03)"/>
                      <path id="Path_233508" data-name="Path 233508" d="M11.1,7.014h0a.992.992,0,0,1,0-1.984h0a.992.992,0,1,1,0,1.984Z" transform="translate(-10.11 1.84)"/>
                      <path id="Path_233509" data-name="Path 233509" d="M11.1,7.014h0a.992.992,0,0,1,0-1.984h0a.992.992,0,1,1,0,1.984Z" transform="translate(-10.11 8.71)"/>
                    </g>
                  </g>
                </g>
              </svg>
            </button>

            <button class="advanced-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="18" viewBox="0 0 30 18">
                  <g id="Group_35455" data-name="Group 35455" transform="translate(-24 -81)">
                    <g id="Group_28491" data-name="Group 28491" transform="translate(23 75)">
                      <text id="_1.5X" data-name="1.5X" transform="translate(1 20)" font-size="14" font-family="IBMPlexSans-Medium, IBM Plex Sans" font-weight="500" letter-spacing="0em"><tspan x="0" y="0">1.5X</tspan></text>
                    </g>
                  </g>
                </svg>
            </button>

            <div class="volume-box">
              <button  @click="showSliderVolume" class="advanced-btn">
                <svg v-if="volume != 0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
              <input type="range" v-if="showslider" class="input-range" step="0.005" min="0" max="1" v-model="volume">
            </div>

            <button class="advanced-btn" @click="closeAudio" v-if="getAudioPaused">
              <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Group_28463" data-name="Group 28463" transform="translate(-126 -724.424)">
                  <g id="Group_35297" data-name="Group 35297" transform="translate(126 764.424) rotate(-90)">
                    <rect id="Rectangle_6585" data-name="Rectangle 6585" width="40" height="40" rx="20" fill="#e16262" opacity="0.1"/>
                    <g id="Group_35047" data-name="Group 35047" transform="translate(10 10)">
                      <rect id="Rectangle_6579" data-name="Rectangle 6579" width="20" height="20" fill="none"/>
                      <g id="Group_35295" data-name="Group 35295" transform="translate(3.88 4.167)">
                        <path id="Path_53" data-name="Path 53" d="M20.4,22.684a1.037,1.037,0,0,1-1.469,0L14.152,17.9a1.037,1.037,0,0,1,0-1.469l4.781-4.781A1.039,1.039,0,0,1,20.4,13.122l-4.042,4.052L20.4,21.215A1.047,1.047,0,0,1,20.4,22.684Z" transform="translate(-8.753 -11.348)" fill="#e16262"/>
                        <path id="Path_284584" data-name="Path 284584" d="M6.555,11.336a1.037,1.037,0,0,1-1.469,0L.3,6.555a1.037,1.037,0,0,1,0-1.469L5.086.3A1.039,1.039,0,0,1,6.555,1.773L2.513,5.826,6.555,9.867A1.047,1.047,0,0,1,6.555,11.336Z" transform="translate(6.859 11.641) rotate(180)" fill="#e16262"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>


          </div>
        </section>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    data() {
      return {
        volume: 1,
        showslider: false,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
      }
    },
    watch: {
      volume (newVal) {
        this.$store.commit('UPDETE_VOLUME', newVal)
      },
    },
    created() {
      let vm = this;
      this.$store.dispatch('updatePlayedBook', false)

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
      });
    },
    computed: {
      ...mapState({
        currentBook: 'current_book',
        audioPaused: 'audioPaused',
        audio: 'audio',
        currentBookIndex: 'currentBookIndex',
        books: 'books'
      }),
      ...mapGetters([
        'getAudioPaused'
      ])
    },
    methods: {
      playAudio() {
        if (!this.audioPaused) {
          this.$store.dispatch('updatePlayedBook', true)
        } else {
          this.$store.dispatch('updatePlayedBook', false)
        }
      },
      nextAudio () {
        if (this.currentBookIndex < this.books.length - 1) {
          this.$store.commit('INCREMENT', true)
        } else {
          this.$store.commit('INCREMENT', false)
        }
        this.$store.commit('UPDATE_BOOK')
        this.resetPlayer();
      },

      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.$store.commit('RESET')
        setTimeout(() => {
          if (this.getAudioPaused) {
            this.$store.dispatch('updatePlayedBook', true)
          } else {
            this.$store.dispatch('updatePlayedBook', false)
          }
        }, 300);
      },

      prevAudio () {
          if (this.currentBookIndex > 0) {
            this.$store.commit('DECREMENT', true)
          } else {
            this.$store.commit('DECREMENT', false)
          }
          this.$store.commit('UPDATE_BOOK')
          this.resetPlayer();
        },
      closeAudio () {
        if (this.getAudioPaused) {
          this.$store.commit('CLOSE')
          this.circleLeft= null
          this.barWidth= null
          this.duration= null
          this.currentTime= null
        }
      },
      showSliderVolume() {
        this.showslider = !this.showslider
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
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
    }
  }
</script>

<style lang="scss" scoped>

</style>
