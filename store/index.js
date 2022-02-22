export const state = () => ({
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
  currentBookIndex: 0,
  current_book: null,
  audioSpeed: 1,
  audioPaused: false,
  audioVolume: 1,
  audio: new Audio()
})

export const mutations = {
  SET_CURRENT_BOOK(state, current_book) {
    state.current_book = current_book;
    state.audio.src = state.current_book.source;
    state.audio.currentTime = 0;
    state.audio.playbackRate = state.audioSpeed;
    state.audio.volume = state.audioVolume
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
    state.audio.currentTime = currentTime;
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

export const actions = {
  updateCurrentBook({ commit }, payload) {
    commit('SET_CURRENT_BOOK', payload);
  },

  updatePlayedBook({ commit }, payload) {
    commit('SET_PLAYED_BOOK', payload);
  },
  setBookIndex({commit}, payload) {
    commit('SET_BOOK_INDEX', payload);
  },
}

export const getters = {
  getBooks(state) {
    return state.books
  },
  getCurrentBook(state) {
    return state.current_book
  },
  getAudioPaused(state) {
    return state.audioPaused
  },
}
