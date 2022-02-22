export default {
  SET_CURRENT_BOOK(state, current_book) {
    if (current_book) {
      state.current_book = current_book;
      state.audio.src = state.current_book.source;
      state.audio.currentTime = 0;
      state.audio.playbackRate = state.audioSpeed;
      state.audio.volume = state.audioVolume
    }
    else {
      state.audio.src = state.current_book.source;
      state.audio.currentTime = 0;
      state.audio.playbackRate = state.audioSpeed;
      state.audio.volume = state.audioVolume
    }
  },

  SET_BOOK(state, current_book) {
    state.audio.currentTime = 0;
    state.current_book = current_book.item;
    state.audio.src = current_book.item.source;
    state.currentBookIndex = current_book.index
    state.audioPaused = true;
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
    state.audio.play();
  },

  UPDATE_CURRENT_TIME(state, currentTime) {
    if (currentTime == 'positive') {
      state.audio.currentTime += 10;
    } else if (currentTime == 'negative') {
      state.audio.currentTime -= 10;
    } else {
      state.audio.currentTime = currentTime
    }
  },

  SET_PLAYED_BOOK(state, audioPaused) {
    state.audioPaused = audioPaused;
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
    if (audioPaused) {
      state.audio.play();
    } else {
      state.audio.pause();
    }
  },

  HANDEL_PLAYER_SPEED(state, audioSpeed) {
    state.audioSpeed = audioSpeed;
    state.audio.playbackRate = state.audioSpeed;
  },
  INCREMENT(state, action) {
    action ? state.currentBookIndex++ : state.currentBookIndex = 0
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
  },
  DECREMENT(state, action) {
    action ? state.currentBookIndex-- : state.currentBookIndex = state.books.length - 1
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
  },
  SET_BOOK_INDEX(state, currentBookIndex) {
    state.currentBookIndex = currentBookIndex;
  },
  UPDATE_BOOK(state) {
    state.current_book = state.books[state.currentBookIndex]
  },
  RESET(state) {
    state.audio.currentTime = 0;
    state.audio.src = state.current_book.source;
  },

  UPDETE_VOLUME(state, volume) {
    state.audioVolume = volume
    state.audio.volume = state.audioVolume
  },

  CLOSE(state) {
    state.audio.pause();
    state.audio.currentTime = 0;
    state.audio = new Audio()
    state.audioPaused = false
    state.current_book = null
    state.currentBookIndex= 0
  }
};
