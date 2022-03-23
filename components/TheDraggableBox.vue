<template>
  <div
    class="draggable-box shadow-lg"
    :class="[expandBox ? 'hideElemnt' : 'showElemnt']"
    id="draggableBox"
    @mousedown="draggableDown"
    @mousemove="draggableMove"
    @mouseup="draggableUp"
  >
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi
      incidunt. Iusto laudantium eligendi, rem aut enim quas blanditiis! Aut rem
      molestias iusto! Aspernatur tempora modi molestias nam error, velit
      reiciendis odio. At dicta debitis doloremque quasi, eos autem veritatis
      cupiditate modi ad et blanditiis unde sunt numquam, tenetur explicabo
      quaerat minima magni? Impedit cupiditate quae atque voluptate maxime,
      commodi voluptatem unde esse? Vel nemo facilis, odit aliquam sequi nobis
      atque provident nihil soluta iusto consequatur perspiciatis omnis fugiat
      esse asperiores ea cumque autem ducimus voluptas consectetur deleniti,
      quam ipsum hic! Velit architecto cum facere consequuntur voluptates
      voluptate magnam praesentium.
    </p>
    <button class="expand-btn" @click="$emit('expandBox')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  </div>
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
  data() {
    return {
      isMouseDown: false,
      initX: "",
      initY: "",
      boxHeight: "",
      boxWidth: "",
    };
  },
  methods: {
    draggableDown(event) {
      this.isMouseDown = true;
      document.body.classList.add("no-select");
      this.initX = event.offsetX;
      this.initY = event.offsetY;
    },
    draggableMove(event) {
      const targetBox = document.getElementById("draggableBox");
      if (this.isMouseDown) {
        let cx = event.clientX - this.initX;
        let cy = event.clientY - this.initY;
        if (cx < 0) {
          cx = 0;
        }
        if (cy < 0) {
          cy = 0;
        }
        if (window.innerWidth - event.clientX + this.initX < this.width) {
          cx = window.innerWidth - this.width;
        }
        if (event.clientY > window.innerHeight - this.height + this.initY) {
          cy = window.innerHeight - this.height;
        }
        targetBox.style.left = cx + "px";
        targetBox.style.top = cy + "px";
      }
    },
    draggableUp() {
      this.isMouseDown = false;
      document.body.classList.remove("no-select");
    },
    setBoxValues() {
      const targetBox = document.getElementById("draggableBox");
      this.height = targetBox.offsetHeight;
      this.width = targetBox.offsetWidth;
    },
  },
  mounted() {
    this.setBoxValues();
  },
};
</script>

<style lang="scss" scoped>
.draggable-box {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 400px;
  height: 150px;
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 6666;
  cursor: move;
  transition: 0.05s transform ease-out;
  transform: translate(10px, 10px);
  .text {
    height: 100%;
    overflow-y: scroll;
    font-size: 18px;
    color: #666666;
  }
  .expand-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background-color: transparent;
  }
}
/* Hide scrollbar for Chrome, Safari and Opera */
.draggable-box .text::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.draggable-box .text {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.no-select {
  user-select: none;
}
.hideElemnt {
  animation: hidedraggable 1s linear;
  animation-fill-mode: forwards;
}

.showElemnt {
  animation: showdraggable 1s linear;
  animation-fill-mode: forwards;
}

@keyframes hidedraggable {
  0% {
    opacity: 1;
    right: 0;
  }
  100% {
    visibility: hidden;
    opacity: 0;
    right: -999px;
  }
}

@keyframes showdraggable {
  0% {
    opacity: 0;
    right: -999;
  }
  100% {
    visibility: visible;
    opacity: 1;
    right: 20px;
  }
}

@media (max-width: 768px) {
  .draggable-box {
    display: none;
  }
}
</style>
