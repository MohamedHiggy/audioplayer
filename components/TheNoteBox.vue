<template>
  <li class="list">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
      @mouseenter="note_active = true"
      @mouseleave="note_active = false">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
    <transition name="note" mode="out-in">
      <div class="list-box shadow" v-show="note_active">
        <p class="text">{{note_text}}</p>
      </div>
    </transition>
  </li>
</template>

<script>
  export default {
    props: {
      note_text: {
        type: String,
        required: true
      },
      note_time: {
        type: Number,
        required: true
      },
      currentTime: {
        type: Number,
        required: true,
        default: false
      },
      duration: {
        type: Number,
        required: true,
        default: false
      }
    },
    /* watch: {
      currentTime(event) {
        if (event) {
          console.log(event);
        }
      }
    }, */
    data() {
      return {
        note_active: false
      }
    },
  }
</script>

<style lang="scss" scoped>
.note-enter-active, .note-leave-active { transition: opacity .5s; }
.note-enter, .note-leave-active { opacity: 0; }
</style>
