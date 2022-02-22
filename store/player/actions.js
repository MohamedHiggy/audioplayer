export default {
  updateCurrentBook(context, payload) {
    context.commit('SET_CURRENT_BOOK', payload);
  },

  updatePlayedBook(context, payload) {
    context.commit('SET_PLAYED_BOOK', payload);
  },
  setBookIndex(context, payload) {
    context.commit('SET_BOOK_INDEX', payload);
  },
};
