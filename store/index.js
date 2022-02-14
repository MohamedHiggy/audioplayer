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
  audioPaused: false,
  audio: new Audio()
})

export const mutations = {
  SET_CURRENT_BOOK(state, current_book) {
    state.current_book = current_book;
    state.audio.src = state.current_book.source;
    state.audio.currentTime = 0;
  },

  SET_BOOK(state, current_book) {
    state.audio.currentTime = 0;
    state.current_book = current_book.item;
    state.audio.src = current_book.item.source;
    state.currentBookIndex = current_book.index
    state.audioPaused = true;
    state.audio.play();
  },

  SET_PLAYED_BOOK(state, audioPaused) {
    state.audioPaused = audioPaused;
    if (audioPaused) {
      state.audio.play();
    } else {
      state.audio.pause();
    }
  },
  INCREMENT(state, action) {
    action ? state.currentBookIndex++ : state.currentBookIndex = 0
  },
  DECREMENT(state, action) {
    action ? state.currentBookIndex-- : state.currentBookIndex = state.books.length - 1
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
