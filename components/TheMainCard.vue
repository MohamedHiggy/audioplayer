<template>
  <div class="card shadow-sm">
    <div class="card-img-top">
      <img :src="item.cover" alt="Card image cap" height="408px" width="100%">
      <div class="play-box">
        <button class="play-btn" @click="playBook">
          <svg v-if="getCurrentBook && getCurrentBook.id == item.id && getAudioPaused" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: #3A9679"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" v-else>
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
      <div class="card-stats">
        <div class="stat">
          <img src="../assets/icons/shared/green_headSet.svg" alt="icon" width="28" height="28">
          <p class="stat-text">12.Min</p>
        </div>
        <div class="stat">
          <img src="../assets/icons/shared/greenBook.svg" alt="icon" width="28" height="28">
          <p class="stat-text">
            {{ item.books_pages > 1 ? item.books_pages + 'pages' : item.books_pages + 'page'}}
          </p>
        </div>
      </div>
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
        'getCurrentBook',
        'getAudioPaused'
      ])
    },
    methods: {
      playBook() {

        if (this.item.id != this.getCurrentBook.id) {
          let payload = {
            index: this.index,
            item: this.item
          }
          this.$store.commit('SET_BOOK', payload)
        }

        if (this.item.id == this.getCurrentBook.id && this.getAudioPaused) {
          this.$store.commit('SET_PLAYED_BOOK', false)
        }

        if (this.item.id == this.getCurrentBook.id && !this.getAudioPaused) {
          this.$store.dispatch('updatePlayedBook', true)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
