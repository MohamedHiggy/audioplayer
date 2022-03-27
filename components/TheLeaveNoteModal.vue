<template>
  <transition name="modal" mode="out-in">
    <div class="modal" v-if="show">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-content">
            <input type="text" class="modal-input" v-model="note" placeholder="Leave a note">
            <button type="button" class="modal-btn" @click="leaveNote" title="Leave a note" :disabled="!note">leave a note</button>
          </div>
          <button class="modal-close" @click="dismiss">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #fff"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
        default: false,
      },
      time: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        note: ''
      }
    },

    created() {
      if (process.client) {
        const listener = document.addEventListener('keydown', e => {
          if (e.keyCode === 27 && this.show) {
            this.dismiss()
          }
        })

        this.$once('hook:beforeDestroy', () => {
          document.removeEventListener('keydown', listener)
        })
      }
    },

    methods: {
      dismiss() {
        this.note = ''
        this.$emit("close")
      },
      leaveNote() {
        const payload = {
          note_time: this.time,
          note_text: this.note
        }
        console.log(`this.note`, payload);
      }
    }
  }
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity .3s ease;
  z-index: 9999;
  &:focus {
    outline: 0;
  }
  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &-container {
    position: relative;
    background: var(--white);
    width: 600px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    margin: 0 auto;
    padding: 10px;
  }
  &-close {
    border: none;
    position: absolute;
    top: -16px;
    left: -10px;
    background-color: var(--main-color);
    border-radius: 5px;
    padding: 5px;
  }

  &-content {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
  }


  &-input {
    border: 1px solid #edf0f7;
    border-radius: 10px;
    background-color: var(--white);
    outline: none;
    width: 45%;
    padding: 12px 15px;
  }

  &-btn {
    background-color: var(--main-color);
    border-radius: 10px;
    border: 1px solid var(--main-color);
    color: var(--white);
    text-transform: uppercase;
    width: 45%;
    height: 50px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: var(--main-color);
      background-color: var(--white);
    }
    &:disabled {
      border: 1px solid #cccccc;
      background-color: #cccccc;
      color: #fff;
      cursor: not-allowed;
      &:hover {
          box-shadow: none;
      }
    }
  }
  &-enter, &-leave {
    opacity: 0;
  }

  &-enter &-container,
  &-leave &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .modal {
    &-wrapper {
      display: table-cell;
      vertical-align: middle;
      padding: 0 15px;
    }
    &-container {
      width: 100%;
      padding: 25px 10px;
    }
    &-content {
      flex-direction: column;
      gap: 15px;
    }
    &-input, &-btn {
      width: 100%;
    }
  }
}
</style>
