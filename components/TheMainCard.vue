<template>
  <div class="card shadow-sm">
    <div class="card-img-top" :class="[ getcurrentAudio && getcurrentAudio.id == item.id && getAudioPaused ? 'cardVisible': '']">
      <img :src="item.cover" alt="Card image cap" height="200px" width="100%">
      <div class="play-box">
        <button class="play-btn" @click="playAudio" v-if="getcurrentAudio">
            <div class="sound-wrapper w-full" v-if="getcurrentAudio && getcurrentAudio.id == item.id && getAudioPaused">
                <div class="line line1"></div>
                <div class="line line1"></div>
                <div class="line line1"></div>
                <div class="line line1"></div>
            </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" v-else>
            <g id="Group_28436" data-name="Group 28436" transform="translate(-167 -738)">
              <rect id="Rectangle_6071" data-name="Rectangle 6071" width="32" height="32" transform="translate(167 738)" fill="none"/>
              <path id="Path_233489" data-name="Path 233489" d="M3.76,8.1v12.85A3.432,3.432,0,0,0,8.9,23.914L14.475,20.7l5.573-3.223a3.416,3.416,0,0,0,0-5.922L14.475,8.338,8.9,5.128A3.428,3.428,0,0,0,3.76,8.1Z" transform="translate(170.239 739.335)" fill="#3a9679"/>
            </g>
          </svg>
        </button>
        <button class="play-btn" @click="addAudio" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g id="Group_28436" data-name="Group 28436" transform="translate(-167 -738)">
              <rect id="Rectangle_6071" data-name="Rectangle 6071" width="32" height="32" transform="translate(167 738)" fill="none"/>
              <path id="Path_233489" data-name="Path 233489" d="M3.76,8.1v12.85A3.432,3.432,0,0,0,8.9,23.914L14.475,20.7l5.573-3.223a3.416,3.416,0,0,0,0-5.922L14.475,8.338,8.9,5.128A3.428,3.428,0,0,0,3.76,8.1Z" transform="translate(170.239 739.335)" fill="#3a9679"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="card-body">
      <h4 class="card-title">{{item.title}}</h4>
      <p class="card-author">{{ item.author}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'getcurrentAudio',
        'getAudioPaused'
      ])
    },
    methods: {
      addAudio() {
        this.$store.commit('SET_current_audio', this.item)
      },
      playAudio() {

        if (this.item.id != this.getcurrentAudio.id) {
          let payload = {
            index: this.index,
            item: this.item
          }
          this.$store.commit('SET_AUDIO', payload)
        }

        if (this.item.id == this.getcurrentAudio.id && this.getAudioPaused == false) {
          this.$store.dispatch('updatePlayedAudio', true)
        }
      }
    }
  }
</script>
