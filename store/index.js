export const state = () => ({
  books: [
    {
      id: 1,
      title: "Audio 1",
      author: "author 1",
      source: "audio1.mp3",
      cover: "https://dummyimage.com/600x200/2f00ff/ffffff.jpg&text=B",
    },
    {
      id: 2,
      title: "Audio 2",
      author: "author 2",
      source: "audio2.mp3",
      cover: "https://dummyimage.com/600x200/ffffff/000000.jpg&text=B",
    },
    {
      id: 3,
      title: "Audio 3",
      author: "author 3",
      source: "audio3.mp3",
      cover: "https://dummyimage.com/600x200/000000/ffffff.jpg&text=B",
    },
    {
      id: 4,
      title: "Audio 4",
      author: "author 4",
      source: "audio4.mp3",
      cover: "https://dummyimage.com/600x200/ff00ff/000000.jpg&text=B",
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
      state.audio.currentTime += 15;
    } else if (currentTime == 'negative') {
      state.audio.currentTime -= 15;
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
