<template>
<transition name="subtitleBox" mode="out-in">
    <div class="subtitleBox" v-if="expandBox">
      <div class="wrapper">
        <div class="subtitleBox-container">
          <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi
          incidunt. Iusto laudantium eligendi, rem aut enim quas blanditiis! Aut
          rem molestias iusto! Aspernatur tempora modi molestias nam error, velit
          reiciendis odio. At dicta debitis doloremque quasi, eos autem veritatis
          cupiditate modi ad et blanditiis unde sunt numquam, tenetur explicabo
          quaerat minima magni? Impedit cupiditate quae atque voluptate maxime,
          commodi voluptatem unde esse? Vel nemo facilis, odit aliquam sequi nobis
          atque provident nihil soluta iusto consequatur perspiciatis omnis fugiat
          esse asperiores ea cumque autem ducimus voluptas consectetur deleniti,
          quam ipsum hic! Velit architecto cum facere consequuntur voluptates
          voluptate magnam praesentium.
          </p>
        </div>
        <button class="expand-btn" @click="$emit('closeExpandBox')">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      expandBox: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    created() {
      if (process.client) {
        const listener = document.addEventListener("keydown", (e) => {
          if (e.keyCode === 27 && this.expandBox) {
            this.$emit('closeExpandBox');
          }
        });

        this.$once("hook:beforeDestroy", () => {
          document.removeEventListener("keydown", listener);
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
.subtitleBox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  transition: opacity 1.5s ease;

  &-enter,
  &-leave {
    opacity: 0;
  }

  &-enter &-container,
  &-leave &-container {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .expand-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      border: none;
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
    }
    .subtitleBox-container {
        width: 600px;
        height: 450px;
        background-color: #fff;
        padding: 15px;
        border-radius: 10px;
        overflow-y: scroll;
        .text {
          font-size: 36px;
          color: #333333;
        }
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .subtitleBox-container::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .subtitleBox-container {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
}
</style>
