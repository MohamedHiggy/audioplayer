export const state = () => ({
  books: [
      {
        id: 1,
        title: 'Men are from Mars, Women are from Venus.',
        books_pages: 8,
        audio: '~/assets/audios/audio1.mp3',
        image: require('~/assets/images/card.jpg'),
        played: false
      },
      {
        id: 2,
        title: 'Men are from Mars, Women are from Venus.',
        books_pages: 48,
        audio: '~/assets/audios/audio2.mp3',
        image: require('~/assets/images/image.png'),
        played: false
      },
      {
        id: 3,
        title: 'Men are from Mars, Women are from Venus.',
        books_pages: 25,
        audio: '~/assets/audios/audio1.mp3',
        image: require('~/assets/images/card.jpg'),
        played: false
      },
      {
        id: 4,
        title: 'Men are from Mars, Women are from Venus.',
        books_pages: 32,
        audio: '~/assets/audios/audio2.mp3',
        image: require('~/assets/images/image.png'),
        played: false
      }
  ],
  playedBook: null
})

export const mutations = {
  SET_BOOK(state, playedBook) {
    state.playedBook = playedBook;
  },
};

export const actions = {
  async playAudio({ commit }, event) {
    commit('SET_BOOK', event);
  },
}
