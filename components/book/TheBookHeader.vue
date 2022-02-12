<template>
  <div class="book-header flex-c">
      <div class="book-image">
        <div class="image">
          <img src="~/assets/images/image.png" alt="book image" width="100%" height="100%">
        </div>
        <div class="book-bottom">
          <div class="item">
            <img src="~/assets/icons/shared/white_headSet.svg" alt="icon">
            <div class="item-text">
              <p class="title">Listen</p>
              <p>12.Min</p>
            </div>
          </div>
          <div class="item">
            <img src="~/assets/icons/shared/white_book.svg" alt="icon">
            <div class="item-text">
              <p class="title">Read</p>
              <p>09.Pages</p>
            </div>
          </div>
        </div>
      </div>
      <div class="book-details">
        <h4 class="title">Men Are from Mars, Women Are from Venus.</h4>
        <p class="auther">Written by : <span>John Gray</span></p>
        <div class="book-actions flex-c">
          <button class="action-btn flex-c" type="button">
            <img src="~/assets/icons/shared/black_book.svg" alt="icon">
            <span>Add to library</span>
          </button>
          <button class="action-btn flex-c" type="button">
            <img src="~/assets/icons/shared/face.svg" alt="icon">
            <span>Rate the summary</span>
          </button>
          <button class="action-btn flex-c" type="button">
            <img src="~/assets/icons/shared/share.svg" alt="icon">
            <span>Share</span>
          </button>
        </div>
        <div class="book-stats flex-c">
          <div class="item flex-c">
            <div class="item-icon">
              <img src="~/assets/icons/shared/greenLike.svg" alt="like icon">
            </div>
            <div class="item-text">
              <p class="num">5000</p>
              <p>Likes</p>
            </div>
          </div>
          <div class="item flex-c">
            <div class="item-icon">
              <img src="~/assets/icons/shared/reddislike.svg" alt="dis like icon">
            </div>
            <div class="item-text">
              <p class="num">150</p>
              <p>Dislikes</p>
            </div>
          </div>
          <div class="item flex-c">
            <div class="item-icon">
              <img src="~/assets/icons/shared/gray_headSet.svg" alt="headSet icon">
            </div>
            <div class="item-text">
              <p class="num">40000</p>
              <p>Read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
