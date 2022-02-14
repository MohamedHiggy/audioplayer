<template>
  <div class="d-flex w-100">
    <the-side-bar :activeAside="activeAside" />
    <main
      class="w-100 bg-light d-flex flex-column"
      :class="{ active: activeAside }"
    >
      <the-nav @toggleAside="toggleAside" />
      <div class="container-fluid pt-4 content" :class="[ currentBook ? 'isAudio': '']">
        <Nuxt />
        <the-audio-player
          v-if="currentBook"
          :currentBook="currentBook"
          :isTimerPlaying="isTimerPlaying"
          :barWidth="barWidth"
          :currentTime="currentTime"
          :duration="duration"
          @playAudio="playAudio"
          @nextAudio="nextAudio"
          @prevAudio="prevAudio"
          @closeAudio="closeAudio"
          @setVolume="setVolume"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAside: false,
      books: [
        {
          id: 1,
          title: "Book 1",
          books_pages: 8,
          source: "audio1.mp3",
          cover: require("~/assets/images/card.jpg"),
        },
        {
          id: 2,
          title: "Book 2",
          books_pages: 48,
          source: "audio2.mp3",
          cover: require("~/assets/images/image.png"),
        },
        {
          id: 3,
          title: "Book 3",
          books_pages: 25,
          source: "audio3.mp3",
          cover: require("~/assets/images/card.jpg"),
        },
        {
          id: 4,
          title: "Book 4",
          books_pages: 32,
          source: "audio4.mp3",
          cover: require("~/assets/images/image.png"),
        },
      ],
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      currentBook: null,
      currentBookIndex: 0,
      transitionName: null,
      audioVolume: 1
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  created() {
    let vm = this;
    this.currentBook = this.books[0];
    this.$store.dispatch('updateCurrentBook', this.books[0])
    this.audio = new Audio();
    this.audio.src = this.currentBook.source;
    this.audio.volume = this.audioVolume
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextAudio();
      this.isTimerPlaying = true;
    };

    vm.onResize()
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    setVolume (val) {
      this.audio.volume = val
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
    playAudio() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
        this.$store.dispatch('updatePlayedBook', true)
      } else {
        this.$store.dispatch('updatePlayedBook', false)
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    closeAudio() {
      if (this.isTimerPlaying) {
        this.audio.pause();
        this.$store.dispatch('updatePlayedBook', false)
        this.audio.currentTime = 0;
        this.audio= null
        this.circleLeft= null
        this.barWidth= null
        this.duration= null
        this.currentTime= null
        this.isTimerPlaying= false
        this.currentBook= null
        this.currentBookIndex= 0
        this.transitionName= null
      }
    },
    nextAudio() {
      if (this.currentBookIndex < this.books.length - 1) {
        this.currentBookIndex++;
      } else {
        this.currentBookIndex = 0;
      }
      this.currentBook = this.books[this.currentBookIndex];
      this.$store.dispatch('updateCurrentBook', this.books[this.currentBookIndex])
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentBook.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
          this.$store.dispatch('updatePlayedBook', true)
        } else {
          this.audio.pause();
          this.$store.dispatch('updatePlayedBook', false)
        }
      }, 300);
    },
    prevAudio() {
      if (this.currentBookIndex > 0) {
        this.currentBookIndex--;
      } else {
        this.currentBookIndex = this.books.length - 1;
      }
      this.currentBook = this.books[this.currentBookIndex];
      this.$store.dispatch('updateCurrentBook', this.books[this.currentBookIndex])
      this.resetPlayer();
    },
    onResize() {
      if (window.innerWidth < 1024) {
        this.activeAside = true;
      } else {
        this.activeAside = false;
      }
    },
    toggleAside() {
      this.activeAside = !this.activeAside;
    },
  },
};
</script>

