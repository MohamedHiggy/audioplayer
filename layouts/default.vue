<template>
  <div class="deafult-layout">
    <the-nav />
    <div class="container pt-5 mt-3">
      <Nuxt />
    </div>
    <the-audio-player  v-if="current_audio"/>
    <div class="draggable-box shadow-lg" id="draggableBox" @mousedown="draggableDown" @mousemove="draggableMove" @mouseup="draggableUp">
      <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, laudantium.</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      isMouseDown: false,
      initX: '',
      initY: '',
      boxHeight: '',
      boxWidth: ''
    }
  },
  beforeDestroy() {
    if (this.getAudioPaused) {
      this.$store.commit('CLOSE')
    }
  },
  computed: {
    ...mapGetters({
      current_audio: 'getcurrentAudio',
      getAudioPaused: 'getAudioPaused'
    })
  },
  methods: {
    draggableDown(event) {
        this.isMouseDown = true;
        document.body.classList.add('no-select');
        this.initX = event.offsetX;
        this.initY = event.offsetY;
    },
    draggableMove(event) {
      const targetBox = document.getElementById("draggableBox")
      if (this.isMouseDown) {
        let cx = event.clientX - this.initX
        let cy = event.clientY - this.initY
        if (cx < 0) {
          cx = 0;
        }
        if (cy < 0) {
          cy = 0;
        }
        if (window.innerWidth - event.clientX + this.initX < this.width) {
          cx = window.innerWidth - this.width;
        }
        if (event.clientY > window.innerHeight - this.height+ this.initY) {
          cy = window.innerHeight - this.height;
        }
        targetBox.style.left = cx + 'px';
        targetBox.style.top = cy + 'px';
      }
    },
    draggableUp() {
      this.isMouseDown = false;
      document.body.classList.remove('no-select');
    },
    setBoxValues() {
      const targetBox = document.getElementById("draggableBox")
      this.height = targetBox.offsetHeight
      this.width = targetBox.offsetWidth
    }
  },
  mounted() {
    this.setBoxValues()
  },
  created() {
    this.$store.commit('SET_current_audio', this.$store.state.audios[0])
  },
};
</script>

<style>
.no-select {
  user-select: none;
}

.deafult-layout {
  position: relative;
}

.draggable-box  {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 6666;
  cursor: move;
  transition: 0.05s transform ease-out;
  transform: translate(10px, 10px);
}
</style>

