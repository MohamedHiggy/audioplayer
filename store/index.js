export const state = () => ({
  current_book: null,
  audioPaused: false
})

export const mutations = {
  SET_CURRENT_BOOK(state, current_book) {
    state.current_book = current_book;
  },
  SET_PLAYED_BOOK(state, audioPaused) {
    state.audioPaused = audioPaused;
  },
};

export const actions = {
  updateCurrentBook({ commit }, payload) {
    commit('SET_CURRENT_BOOK', payload);
  },
  updatePlayedBook({ commit }, payload) {
    commit('SET_PLAYED_BOOK', payload);
  },
}

export const getters = {
  getCurrentBook(state) {
    return state.current_book
  },
  getAudioPaused(state) {
    return state.audioPaused
  },
}
