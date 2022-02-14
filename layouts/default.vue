<template>
  <div class="d-flex w-100">
    <the-side-bar :activeAside="activeAside" />
    <main
      class="w-100 bg-light d-flex flex-column"
      :class="{ active: activeAside }"
    >
      <the-nav @toggleAside="toggleAside" />
      <div class="container-fluid pt-4 pb-5 content">
        <Nuxt />
        <the-audio-player
          :currentBook="currentBook"
          :isTimerPlaying="isTimerPlaying"
          :barWidth="barWidth"
          :currentTime="currentTime"
          :duration="duration"
          @playAudio="playAudio"
          @nextAudio="nextAudio"
          @prevAudio="prevAudio"
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
    this.audio = new Audio();
    this.audio.src = this.currentBook.source;
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
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    nextAudio() {
      if (this.currentBookIndex < this.books.length - 1) {
        this.currentBookIndex++;
      } else {
        this.currentBookIndex = 0;
      }
      this.currentBook = this.books[this.currentBookIndex];
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
        } else {
          this.audio.pause();
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

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  text-decoration: none !important;
}

label {
  cursor: pointer;
  margin-bottom: 0;
}

/* Firefox */
input[type="checkbox"] {
  cursor: pointer;
}

select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  cursor: pointer;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}

textarea {
  resize: none;
  border-radius: 10px !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a0aec0;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a0aec0;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #a0aec0;
}

p {
  margin: 0;
}

.content {
  background-color: #f7f9fd;
  min-height: 100vh;
  position: relative;
}

main.active {
  margin-left: 0px !important;
}
main {
  margin-left: 230px;
  transition: margin 0.5s;
  min-height: 100vh;
}

.aside-nav.active {
  width: 0px !important;
}

@media (min-width: 300px) and (max-width: 1023.98px) {
  .aside-nav {
    top: 107px !important;
  }
  main {
    margin-left: 0px !important;
    overflow: hidden;
    margin-top: 100px !important;
  }
  .header-navbar {
    position: fixed !important;
  }
}
</style>
